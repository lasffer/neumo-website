/**
 * Servicio para interactuar con MongoDB Atlas Data API
 * 
 * Configuración requerida en MongoDB Atlas:
 * 1. Habilitar Data API en tu cluster
 * 2. Crear Public/Private Key pair o API Key
 * 3. Obtener el Data API URL de tu cluster
 * 
 * Variables de entorno necesarias (crear archivo .env):
 * 
 * Para autenticación con Public/Private Key (recomendado):
 * - VITE_MONGODB_API_URL: URL de tu Data API endpoint
 * - VITE_MONGODB_PRIVATE_KEY: Tu Private Key (formato PEM)
 * - VITE_MONGODB_PUBLIC_KEY: Tu Public Key (formato PEM)
 * - VITE_MONGODB_APP_ID: ID de tu aplicación MongoDB Atlas
 * 
 * Para autenticación con API Key (alternativa):
 * - VITE_MONGODB_API_KEY: Tu API Key
 * 
 * Opcionales:
 * - VITE_MONGODB_DATABASE: Nombre de tu base de datos (default: neumo_db)
 * - VITE_MONGODB_COLLECTION: Nombre de tu colección (default: newsletter_subscriptions)
 * - VITE_MONGODB_DATA_SOURCE: Nombre de tu Data Source (default: Cluster0)
 */

const MONGODB_API_URL = import.meta.env.VITE_MONGODB_API_URL
const MONGODB_PRIVATE_KEY = import.meta.env.VITE_MONGODB_PRIVATE_KEY
const MONGODB_PUBLIC_KEY = import.meta.env.VITE_MONGODB_PUBLIC_KEY
const MONGODB_APP_ID = import.meta.env.VITE_MONGODB_APP_ID
const MONGODB_API_KEY = import.meta.env.VITE_MONGODB_API_KEY
const MONGODB_DATABASE = import.meta.env.VITE_MONGODB_DATABASE || 'neumo_db'
const MONGODB_COLLECTION = import.meta.env.VITE_MONGODB_COLLECTION || 'newsletter_subscriptions'
const MONGODB_DATA_SOURCE = import.meta.env.VITE_MONGODB_DATA_SOURCE || 'Cluster0'

// Cache del JWT para evitar regenerarlo en cada request
let cachedJWT = null
let jwtExpiry = 0

/**
 * Convierte una clave PEM a formato CryptoKey
 */
const importPrivateKey = async (pemKey) => {
  // Remover headers/footers y saltos de línea
  const pemHeader = '-----BEGIN PRIVATE KEY-----'
  const pemFooter = '-----END PRIVATE KEY-----'
  const pemContents = pemKey
    .replace(pemHeader, '')
    .replace(pemFooter, '')
    .replace(/\s/g, '')
  
  // Convertir de base64 a ArrayBuffer
  const binaryDer = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0))
  
  return await crypto.subtle.importKey(
    'pkcs8',
    binaryDer.buffer,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    false,
    ['sign']
  )
}

/**
 * Genera un JWT firmado con la private key
 */
const generateJWT = async () => {
  // Si tenemos un JWT válido en cache, retornarlo
  const now = Math.floor(Date.now() / 1000)
  if (cachedJWT && jwtExpiry > now) {
    return cachedJWT
  }

  if (!MONGODB_PRIVATE_KEY || !MONGODB_APP_ID) {
    throw new Error('Private Key y App ID son requeridos para autenticación JWT')
  }

  try {
    const privateKey = await importPrivateKey(MONGODB_PRIVATE_KEY)
    
    // Crear el header
    const header = {
      alg: 'RS256',
      typ: 'JWT',
    }

    // Crear el payload
    const now = Math.floor(Date.now() / 1000)
    const payload = {
      aud: MONGODB_API_URL, // Usar la URL del Data API como audience
      sub: MONGODB_APP_ID,
      iat: now,
      exp: now + 3600, // Expira en 1 hora
    }

    // Codificar header y payload
    const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    const unsignedToken = `${encodedHeader}.${encodedPayload}`

    // Firmar el token
    const signature = await crypto.subtle.sign(
      'RSASSA-PKCS1-v1_5',
      privateKey,
      new TextEncoder().encode(unsignedToken)
    )

    // Convertir la firma a base64url
    const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')

    const jwt = `${unsignedToken}.${encodedSignature}`
    
    // Guardar en cache
    cachedJWT = jwt
    jwtExpiry = now + 3600

    return jwt
  } catch (error) {
    console.error('Error generando JWT:', error)
    throw new Error('Error al generar token JWT: ' + error.message)
  }
}

/**
 * Obtiene el header de autenticación según el método configurado
 */
const getAuthHeader = async () => {
  // Prioridad: JWT (Public/Private Key) sobre API Key
  if (MONGODB_PRIVATE_KEY && MONGODB_APP_ID) {
    const jwt = await generateJWT()
    return { 'Authorization': `Bearer ${jwt}` }
  } else if (MONGODB_API_KEY) {
    return { 'api-key': MONGODB_API_KEY }
  } else {
    throw new Error('No se encontró método de autenticación. Configura Private Key + App ID o API Key.')
  }
}

/**
 * Guarda un email en la colección de suscripciones al newsletter
 */
export const saveNewsletterEmail = async (email) => {
  // Validar configuración
  const hasJWTConfig = MONGODB_PRIVATE_KEY && MONGODB_APP_ID && MONGODB_API_URL
  const hasAPIKeyConfig = MONGODB_API_KEY && MONGODB_API_URL
  
  if (!hasJWTConfig && !hasAPIKeyConfig) {
    console.error('MongoDB Atlas Data API no está configurado.')
    return {
      success: false,
      message: 'Error de configuración: Configura Private Key + App ID o API Key junto con la URL del Data API.',
    }
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Por favor, ingresa un email válido.',
    }
  }

  const normalizedEmail = email.toLowerCase().trim()

  try {
    // Obtener header de autenticación
    const authHeader = await getAuthHeader()

    // Verificar si el email ya existe
    const checkResponse = await fetch(
      `${MONGODB_API_URL}/action/findOne`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...authHeader,
        },
        body: JSON.stringify({
          dataSource: MONGODB_DATA_SOURCE,
          database: MONGODB_DATABASE,
          collection: MONGODB_COLLECTION,
          filter: { email: normalizedEmail },
        }),
      }
    )

    if (!checkResponse.ok) {
      throw new Error(`Error al verificar email: ${checkResponse.statusText}`)
    }

    const checkResult = await checkResponse.json()

    // Si el email ya existe
    if (checkResult.document) {
      return {
        success: true,
        message: 'Este email ya está suscrito a nuestro newsletter.',
      }
    }

    // Insertar nuevo email
    const insertResponse = await fetch(
      `${MONGODB_API_URL}/action/insertOne`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...authHeader,
        },
        body: JSON.stringify({
          dataSource: MONGODB_DATA_SOURCE,
          database: MONGODB_DATABASE,
          collection: MONGODB_COLLECTION,
          document: {
            email: normalizedEmail,
            subscribedAt: new Date().toISOString(),
            status: 'active',
          },
        }),
      }
    )

    if (!insertResponse.ok) {
      const errorData = await insertResponse.json().catch(() => ({}))
      throw new Error(errorData.error || `Error al guardar: ${insertResponse.statusText}`)
    }

    const insertResult = await insertResponse.json()

    return {
      success: true,
      message: '¡Gracias por suscribirte! Te mantendremos informado.',
      data: insertResult,
    }
  } catch (error) {
    console.error('Error al guardar email en MongoDB:', error)
    return {
      success: false,
      message: error.message || 'Ocurrió un error al procesar tu solicitud. Por favor, intenta más tarde.',
    }
  }
}

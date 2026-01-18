import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/ama-frente.webp'
import sanLogo from '../assets/logo_san.png'
import avalAma from '../assets/logos/aval_ama.jpeg'
import cursoPdfUrl from '../assets/cursos/pdf_detalle_largo/2026_Curso_Neumo.pdf?url'
import patrocinioFundacionRespirar from '../assets/logos/patrocinio_fundacion_respirar.jpg'
import sociedadCifs from '../assets/logos/sociedades/cifs_logo.png'
import sociedadFundacionVacunar from '../assets/logos/sociedades/fundacion_vacunar.jpg'
import sociedadRotary from '../assets/logos/sociedades/rotary.png'
import sociedadSamt from '../assets/logos/sociedades/samt.jpg'
import sociedadUata from '../assets/logos/sociedades/uata.jpg'
import avalAaiba from '../assets/logos/aval_aaiba.png'
import avalLalcec from '../assets/logos/aval_lalcecinstitucional.jpg'
import { saveNewsletterEmail } from '../services/mongodb'
import CourseModal from '../components/CourseModal'

const navLinks = [
  { href: '/', label: 'Inicio' },
  {
    href: '/servicios',
    label: 'Servicios',
    subItems: [
      { href: '/servicios/sesiones-cientificas', label: 'Sesiones científicas' },
      { href: '/servicios/recertificacion', label: 'Recertificación' },
      { href: '/servicios/guias-consensos', label: 'Guías y consensos' },
      { href: '/servicios/articulos-interes', label: 'Artículos de interés' },
      { href: '/servicios/cursos-congresos', label: 'Cursos y congresos' },
    ],
  },
  {
    href: '/noticias',
    label: 'Noticias',
    subItems: [
      { href: '/noticias', label: 'Noticias' },
      { href: '/videos', label: 'Videos' },
      { href: '/noticias/articulos-interes', label: 'Artículos de interés' },
      { href: '/noticias/sociedades-amigas', label: 'Sociedades amigas' },
    ],
  },
  { href: '/institucion', label: 'Institución' },
  { href: '/contacto', label: 'Contacto' },
]

const highlights = [
  {
    title: 'Miembro de la AMA',
    desc: 'Sociedad Argentina de Neumonología, integrante desde 1918.',
  },
  {
    title: 'Avales y comités',
    desc: 'Rigor académico respaldado por comités científicos.',
  },
  {
    title: 'Formación continua',
    desc: 'Cursos, conferencias y recertificación permanente.',
  },
  {
    title: 'Comunidad colaborativa',
    desc: 'Compartimos protocolos y evidencia entre especialistas.',
  },
]

const timelineItems = [
  { year: '1891', title: 'Nace la AMA', desc: 'Se crea la Sociedad Médica Argentina; base institucional de la SAN.' },
  { year: '1918', title: 'Edificio y expansión', desc: 'Se inaugura la sede de Av. Santa Fe y crecen las actividades científicas.' },
  { year: '1925', title: 'Ingreso a la AMA', desc: 'La Sociedad de Tisiología pasa a ser Sociedad Argentina de Tisiología dentro de la AMA.' },
  { year: '1953', title: 'Patología torácica', desc: 'Nuevo nombre: Sociedad Argentina de Tisiología y Patología Torácica.' },
  { year: '1993', title: 'Sociedad Argentina de Neumonología', desc: 'La denominación actual acompaña el avance tecnológico y las subespecialidades.' },
  { year: '1994', title: 'CRAMA', desc: 'La AMA lanza la recertificación voluntaria cada 5 años con Juntas de Evaluación.' },
  { year: 'Homenajes', title: 'Cetrángolo y Bracco', desc: 'Conferencia anual Cetrángolo y premios a trabajos clínico-quirúrgicos y de patología infecciosa.' },
  { year: 'Presente', title: 'Gestión ampliada', desc: 'Comisión Directiva con mandatos de dos años para profundizar proyectos.' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  return (
    <div className="sticky top-0 z-50 border-t border-primary-600 bg-white/95 text-slate-900 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={sanLogo} alt="Sociedad Argentina de Neumonología" className="h-8 w-auto" />
          <span className="text-base font-bold text-primary-700">SAN</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-800 sm:flex">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              {link.subItems?.length ? (
                <span className="rounded px-3 py-2 transition hover:bg-primary-50 hover:text-primary-800 cursor-pointer">
                  {link.label}
                </span>
              ) : (
                <Link
                  to={link.href}
                  className="rounded px-3 py-2 transition hover:bg-primary-50 hover:text-primary-800"
                >
                  {link.label}
                </Link>
              )}
              {link.subItems?.length ? (
                <div className="pointer-events-none absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white text-sm shadow-lg">
                    {link.subItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-3 py-2 text-slate-700 transition hover:bg-primary-50 hover:text-primary-800"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-primary-200 hover:text-primary-700 sm:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div
        className={`sm:hidden transition-[max-height] duration-300 ease-in-out ${
          open ? 'max-h-80 border-t border-slate-200' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <div key={link.href} className="flex flex-col gap-1">
              {link.subItems?.length ? (
                <>
                  <button
                    type="button"
                    onClick={() => setOpenSubmenu(openSubmenu === link.href ? null : link.href)}
                    className="flex items-center justify-between rounded px-2 py-2 transition hover:bg-primary-50 hover:text-primary-800"
                  >
                    {link.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${openSubmenu === link.href ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSubmenu === link.href && (
                    <div className="ml-3 flex flex-col gap-1">
                      {link.subItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => {
                            setOpen(false)
                            setOpenSubmenu(null)
                          }}
                          className="rounded px-2 py-1 text-slate-600 transition hover:bg-primary-50 hover:text-primary-800"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-2 py-2 transition hover:bg-primary-50 hover:text-primary-800"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

const Hero = () => (
  <section
    id="services"
    className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
  >
    <div
      className="relative flex items-center px-6 py-12 sm:px-12"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(15,23,42,0.82), rgba(15,23,42,0.62)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 via-transparent to-transparent" />
      <div className="relative max-w-2xl space-y-4 text-white">
        <div className="flex items-center gap-3">
          <img src={sanLogo} alt="Sociedad Argentina de Neumonología" className="h-12 w-auto drop-shadow-lg sm:h-16" />
          <img src={avalAma} alt="Aval AMA" className="h-10 w-auto drop-shadow-lg sm:h-14" />
        </div>
        <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
          Sociedad Argentina de Neumonología
        </h1>
        <p className="text-base text-white/90 sm:text-lg font-medium">
          Entidad científica sin fines de lucro, desde 1918. Miembro de la AMA desde 1925.
        </p>
        <p className="text-sm text-white/80 sm:text-base">
          Nacimos para unir médicos, investigadores y pacientes. Comunidad que comparte saberes y acerca la prevención respiratoria a cada rincón del país.
        </p>
      </div>
    </div>
  </section>
)

const SociedadesAmigasSection = () => {
  const logos = [
    { src: sociedadUata, alt: 'UATA', url: 'https://www.uata.org.ar/' },
    { src: avalAaiba, alt: 'AAIBA', url: 'https://www.aaiba.org.ar/' },
    { src: avalLalcec, alt: 'LALCEC', url: 'https://www.lalcec.org.ar/' },
    { src: sociedadSamt, alt: 'SAMPT', url: null },
    { src: sociedadFundacionVacunar, alt: 'Fundación Vacunar', url: 'https://www.fundacionvacunar.org.ar/' },
    { src: sociedadRotary, alt: 'Rotary - Club of Lamorinda Sunrise', url: 'https://lamorindasunrise.org/' },
    { src: patrocinioFundacionRespirar, alt: 'Fundación Respirar', url: 'https://fundacionrespirar.org/' },
    { src: sociedadCifs, alt: 'Copenhagen Institute for Futures Studios', url: 'https://www.cifs.dk/' },
  ]

  // Usamos 3 copias para asegurar un bucle continuo en el marquee
  const copiesCount = 3
  const allCopies = []
  
  for (let i = 0; i < copiesCount; i++) {
    logos.forEach((logo, logoIdx) => {
      const logoElement = (
        <img
          alt={logo.alt}
          src={logo.src}
          className="max-h-12 w-auto object-contain opacity-70 grayscale"
        />
      )
      allCopies.push(
        <div key={`copy-${i}-logo-${logoIdx}`} className="flex-shrink-0 px-8">
          {logo.url ? (
            <a href={logo.url} target="_blank" rel="noopener noreferrer" className="block">
              {logoElement}
            </a>
          ) : (
            logoElement
          )}
        </div>
      )
    })
  }

  return (
    <section className="mt-8 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-slate-900">
          Sociedades amigas
        </h2>
        {/* Versión estática para pantallas grandes */}
        <div className="mx-auto mt-10 hidden w-full items-center justify-center gap-x-8 gap-y-10 lg:flex lg:flex-wrap lg:gap-x-12">
          {logos.map((logo, idx) => {
            const logoElement = (
              <img
                alt={logo.alt}
                src={logo.src}
                className="max-h-12 w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
              />
            )
            return logo.url ? (
              <a
                key={idx}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {logoElement}
              </a>
            ) : (
              <div key={idx}>{logoElement}</div>
            )
          })}
        </div>
        {/* Versión marquee para pantallas pequeñas - 3 copias para asegurar bucle perfecto */}
        <div className="mt-10 overflow-hidden lg:hidden">
          <div className="flex animate-logos-marquee-5" style={{ width: `${copiesCount * 100}%` }}>
            {allCopies}
          </div>
        </div>
      </div>
    </section>
  )
}

const CourseHighlight = () => {
  return (
    <section className="mt-8 bg-gradient-to-br from-primary-50 to-primary-100/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-600 px-4 py-1.5 text-xs font-semibold text-white">
            Novedad 2026
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Curso Intensivo de Neumonología 2026
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Formación continua especializada para profesionales que buscan profundizar sus conocimientos en neumonología, 
            con un enfoque integral desde la atención especializada hasta la práctica clínica.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            <div className="rounded-lg bg-white/60 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Modalidad</p>
              <p className="mt-1 text-sm font-medium text-slate-900">Curso virtual online</p>
            </div>
            <div className="rounded-lg bg-white/60 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Duración</p>
              <p className="mt-1 text-sm font-medium text-slate-900">5 de marzo - 4 de junio</p>
            </div>
            <div className="rounded-lg bg-white/60 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Frecuencia</p>
              <p className="mt-1 text-sm font-medium text-slate-900">Sesiones semanales</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.ama-med.org.ar/especialidades/detalleCurso/588"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition"
            >
              Inscribirse al curso
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href={cursoPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-700 shadow-sm ring-1 ring-inset ring-primary-300 hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition"
            >
              Ver programa completo
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    const result = await saveNewsletterEmail(email)

    if (result.success) {
      setMessage({ type: 'success', text: result.message })
      setEmail('') // Limpiar el input
    } else {
      setMessage({ type: 'error', text: result.message })
    }

    setLoading(false)

    // Limpiar mensaje después de 5 segundos
    setTimeout(() => {
      setMessage({ type: '', text: '' })
    }, 5000)
  }

  return (
    <section className="mt-8 bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-balance text-slate-900 sm:text-3xl lg:col-span-7">
          Recibí novedades sobre nuestras publicaciones
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Dirección de email
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresá tu email"
              autoComplete="email"
              disabled={loading}
              className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6 border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={loading}
              className="flex-none rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Guardando...' : 'Suscribirse'}
            </button>
          </div>
          {message.text && (
            <p
              className={`mt-4 text-sm/6 ${
                message.type === 'success'
                  ? 'text-green-600'
                  : message.type === 'error'
                  ? 'text-red-600'
                  : 'text-slate-700'
              }`}
            >
              {message.text}
            </p>
          )}
          <p className="mt-4 text-sm/6 text-slate-700">
            Respetamos tu privacidad. Leé nuestra{' '}
            <a
              href="#"
              className="font-semibold whitespace-nowrap text-primary-600 hover:text-primary-700"
            >
              política de privacidad
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  )
}

import fundacionVacunarImg from '../assets/cursos_congresos/2025/fundacion_vacunar.png'
import masterFormacionImg from '../assets/cursos_congresos/2024/master_formacion.png'
import flyerCardioImg from '../assets/cursos_congresos/2025/flyer_cardio.jpg'
import flyerCongresoOncoImg from '../assets/cursos_congresos/2025/flyer_congreso_onco.jpg'
import masterFormacionPdfUrl from '../assets/cursos_congresos/2024/master_formacion_hipertension_arterial.pdf?url'
import flyerCardioBigUrl from '../assets/cursos_congresos/2025/flyer_cardio_big.jpg'

// Datos de noticias de sociedades amigas (últimas 4 para mostrar en home)
const ultimasNoticiasSociedadesAmigas = [
  {
    id: 1,
    title: 'PROGRAMA, FECHA, HORARIOS, INSCRIPCIÓN Y BECAS',
    content: 'Información completa sobre programa académico, fechas del evento, horarios de las sesiones, proceso de inscripción y disponibilidad de becas para participantes.',
    href: 'https://www.simposiofundacionvacunar.org',
    sociedad: 'Fundación Vacunar',
    image: fundacionVacunarImg,
  },
  {
    id: 2,
    title: 'Master de formación permanente en hipertensión pulmonar',
    content: 'Programa de formación continua especializado en hipertensión pulmonar. Edición Internacional 2023-2025 diseñado para profesionales que buscan profundizar sus conocimientos en esta área.',
    href: masterFormacionPdfUrl,
    sociedad: 'SAN',
    image: masterFormacionImg,
  },
  {
    id: 3,
    title: 'VI Congreso Interamericano de Prevención Cardiovascular 2025',
    content: 'IV Congreso OSEP y SALID, 17 Simposio Cuyano de Enfermedad cardiovascular en la Mujer, VI Cardiometabolismo Tour. Del 02 al 04 de octubre de 2025 en Hotel Hilton Mendoza.',
    href: flyerCardioBigUrl,
    sociedad: 'SAN',
    image: flyerCardioImg,
  },
  {
    id: 4,
    title: 'XXVII Congreso de Oncología Clínica',
    content: 'Importante evento académico que reúne a especialistas en oncología clínica para el intercambio de conocimientos, presentación de casos y actualización en tratamientos oncológicos.',
    href: 'https://congresoaaoc.com.ar/',
    sociedad: 'SAN',
    image: flyerCongresoOncoImg,
  },
]

const NoticiasSociedadesAmigasSection = () => {
  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Sociedades amigas</p>
          <h2 className="text-2xl font-semibold text-slate-900">Noticias de las sociedades amigas</h2>
          <p className="text-sm text-slate-600">
            Mantenete al día con las últimas novedades, publicaciones y eventos de nuestras sociedades amigas.
          </p>
        </div>
        <Link
          to="/noticias/sociedades-amigas"
          className="flex-none text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          Ver todas →
        </Link>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {ultimasNoticiasSociedadesAmigas.map((noticia) => (
          <a
            key={noticia.id}
            href={noticia.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-primary-300 hover:shadow-md"
          >
            {noticia.image && (
              <img
                src={noticia.image}
                alt={noticia.title}
                className="h-32 w-full rounded-lg object-cover"
              />
            )}
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20">
                  {noticia.sociedad}
                </span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 group-hover:text-primary-700">
                {noticia.title}
              </h3>
              <p className="text-sm text-slate-600 line-clamp-2">
                {noticia.content}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

const WhyChoose = () => (
  <section className="mt-8 px-6 py-8 sm:px-10">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Por qué elegirnos</p>
        <h2 className="text-2xl font-semibold text-slate-900">Respaldo y comunidad profesional</h2>
        <p className="text-sm text-slate-600">
          Somos la Sociedad Argentina de Neumonología, miembro de la Asociación Médica Argentina desde 1918.
        </p>
        <p className="text-xs text-slate-600 sm:text-sm">
          Explorá nuestros cursos, conferencias y recursos avalados por la SAN y la AMA.
        </p>
      </div>
    </div>
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {highlights.map((item) => (
        <div
          key={item.title}
          className="flex h-full flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm"
        >
          <p className="text-sm font-semibold text-slate-900">{item.title}</p>
          <p className="text-xs text-slate-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

const About = () => {
  const [visibleItems, setVisibleItems] = useState(() => new Array(timelineItems.length).fill(false))
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index)
            setVisibleItems((prev) => {
              if (prev[idx]) return prev
              const next = [...prev]
              next[idx] = true
              return next
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 }
    )

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="mt-10 rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Historia</p>
        <div className="relative mt-4 space-y-6">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600" aria-hidden="true" />
          {timelineItems.map((item, idx) => (
            <div
              key={item.title}
              data-index={idx}
              ref={(el) => {
                itemRefs.current[idx] = el
              }}
              className={`relative grid grid-cols-[auto,1fr] gap-3 pl-6 transition-all duration-700 ease-out will-change-transform ${
                visibleItems[idx] ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
              }`}
            >
              <span
                className="absolute left-0 top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-primary-600 shadow-sm"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <div className="col-span-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary-700">
                <span>{item.year}</span>
                <span className="h-px w-8 bg-primary-200" aria-hidden="true" />
                <span className="text-slate-800">{item.title}</span>
              </div>
              <div className="col-start-2 text-sm leading-relaxed text-slate-700">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer id="contact" className="mt-10 border-t border-slate-200 bg-white">
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-[1.2fr,1fr]">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Contacto</p>
          <h3 className="text-lg font-semibold text-slate-900">Sociedad Argentina de Neumonología</h3>
          <p className="text-sm text-slate-700">Buenos Aires, Argentina</p>
          <a
            href="mailto:secretaria@neumo-argentina.org"
            className="text-sm font-semibold text-primary-700 underline-offset-4 hover:underline"
          >
            secretaria@neumo-argentina.org
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Enlaces rápidos</p>
          <div className="grid gap-1 text-sm text-slate-700 sm:grid-cols-2">
            <Link to="/">Inicio</Link>
            <Link to="/servicios/sesiones-cientificas">Sesiones científicas</Link>
            <Link to="/servicios/recertificacion">Recertificación</Link>
            <Link to="/servicios/guias-consensos">Guías y consensos</Link>
            <Link to="/servicios/cursos-congresos">Cursos y congresos</Link>
            <Link to="/servicios/articulos-interes">Artículos de interés</Link>
            <Link to="/noticias">Noticias</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/institucion">Institución</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export function AidstoneLayout() {
  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4">
        <Hero />
        <SociedadesAmigasSection />
        <CourseHighlight />
        <Newsletter />
        <NoticiasSociedadesAmigasSection />
        <WhyChoose />
        <About />
      </main>
      <Footer />
      <CourseModal />
    </div>
  )
}

export { Navbar, Footer }

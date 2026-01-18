import { useState } from 'react'
import fundacionVacunarImg from '../assets/cursos_congresos/2025/fundacion_vacunar.png'
import masterFormacionImg from '../assets/cursos_congresos/2024/master_formacion.png'
import flyerCardioImg from '../assets/cursos_congresos/2025/flyer_cardio.jpg'
import flyerCongresoOncoImg from '../assets/cursos_congresos/2025/flyer_congreso_onco.jpg'
import masterFormacionPdfUrl from '../assets/cursos_congresos/2024/master_formacion_hipertension_arterial.pdf?url'
import flyerCardioBigUrl from '../assets/cursos_congresos/2025/flyer_cardio_big.jpg'

// Array de noticias de sociedades amigas
// imageLayout puede ser: 'full' (imagen arriba, texto abajo), 'left' (imagen izquierda), 'right' (imagen derecha), o null (sin imagen)
const noticiasSociedadesAmigas = [
  {
    id: 1,
    title: 'PROGRAMA, FECHA, HORARIOS, INSCRIPCIÓN Y BECAS',
    content: 'Información completa sobre programa académico, fechas del evento, horarios de las sesiones, proceso de inscripción y disponibilidad de becas para participantes.',
    href: 'https://www.simposiofundacionvacunar.org',
    year: '2025',
    month: 'Enero',
    category: 'Publicación',
    type: 'Artículo',
    sociedad: 'Fundación Vacunar',
    imageLayout: 'full', // 'full' | 'left' | 'right' | null
    image: fundacionVacunarImg,
  },
  {
    id: 2,
    title: 'Master de formación permanente en hipertensión pulmonar',
    content: 'Programa de formación continua especializado en hipertensión pulmonar. Edición Internacional 2023-2025 diseñado para profesionales que buscan profundizar sus conocimientos en esta área.',
    href: masterFormacionPdfUrl,
    year: '2024',
    month: 'Marzo',
    category: 'Publicación',
    type: 'Artículo',
    sociedad: 'SAN',
    imageLayout: 'left',
    image: masterFormacionImg,
  },
  {
    id: 3,
    title: 'VI Congreso Interamericano de Prevención Cardiovascular 2025',
    content: 'IV Congreso OSEP y SALID, 17 Simposio Cuyano de Enfermedad cardiovascular en la Mujer, VI Cardiometabolismo Tour. Del 02 al 04 de octubre de 2025 en Hotel Hilton Mendoza.',
    href: flyerCardioBigUrl,
    year: '2025',
    month: 'Octubre',
    category: 'Publicación',
    type: 'Artículo',
    sociedad: 'SAN',
    imageLayout: 'right',
    image: flyerCardioImg,
  },
  {
    id: 4,
    title: 'XXVII Congreso de Oncología Clínica',
    content: 'Importante evento académico que reúne a especialistas en oncología clínica para el intercambio de conocimientos, presentación de casos y actualización en tratamientos oncológicos. Del 17 al 19 de Septiembre en Centro de Convenciones de Buenos Aires.',
    href: 'https://congresoaaoc.com.ar/',
    year: '2025',
    month: 'Septiembre',
    category: 'Noticia',
    type: 'Artículo',
    sociedad: 'SAN',
    imageLayout: 'left',
    image: flyerCongresoOncoImg,
  },
].sort((a, b) => {
  // Ordenar por fecha (más reciente primero)
  if (b.year !== a.year) {
    return parseInt(b.year) - parseInt(a.year)
  }
  return b.month.localeCompare(a.month)
})

const SociedadesAmigas = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSociedad, setSelectedSociedad] = useState('Todas')

  const sociedades = ['Todas', ...Array.from(new Set(noticiasSociedadesAmigas.map(n => n.sociedad)))]
  const categories = ['Todas', ...Array.from(new Set(noticiasSociedadesAmigas.map(n => n.category)))]

  const getCategoryColor = (category) => {
    const colors = {
      'Publicación': 'bg-blue-50 text-blue-700 ring-blue-600/20',
      'Artículo': 'bg-green-50 text-green-700 ring-green-600/20',
      'Estudio': 'bg-purple-50 text-purple-700 ring-purple-600/20',
      'Noticia': 'bg-indigo-50 text-indigo-700 ring-indigo-600/20',
      'Comunicado': 'bg-orange-50 text-orange-700 ring-orange-600/20',
    }
    return colors[category] || 'bg-slate-50 text-slate-700 ring-slate-600/20'
  }

  const getSociedadColor = (sociedad) => {
    const colors = {
      'UATA': 'bg-red-100 text-red-800',
      'AAIBA': 'bg-blue-100 text-blue-800',
      'LALCEC': 'bg-pink-100 text-pink-800',
      'SAMPT': 'bg-indigo-100 text-indigo-800',
      'Fundación Vacunar': 'bg-green-100 text-green-800',
      'Rotary': 'bg-yellow-100 text-yellow-800',
      'Fundación Respirar': 'bg-cyan-100 text-cyan-800',
      'Copenhagen Institute': 'bg-purple-100 text-purple-800',
    }
    return colors[sociedad] || 'bg-slate-100 text-slate-800'
  }

  const filteredNoticias = noticiasSociedadesAmigas.filter((noticia) => {
    const search = searchTerm.toLowerCase()
    const matchesSearch = 
      noticia.title.toLowerCase().includes(search) ||
      noticia.category.toLowerCase().includes(search) ||
      noticia.sociedad.toLowerCase().includes(search) ||
      noticia.year.includes(search)
    
    const matchesSociedad = selectedSociedad === 'Todas' || noticia.sociedad === selectedSociedad
    
    return matchesSearch && matchesSociedad
  })

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary-600">Sociedades amigas</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl lg:text-balance">
            Publicaciones y noticias
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            Mantenete al día con las publicaciones, estudios y noticias de nuestras sociedades amigas: 
            UATA, AAIBA, LALCEC, SAMPT, Fundación Vacunar, Rotary, Fundación Respirar y Copenhagen Institute for Futures Studios.
          </p>
        </div>

        {/* Filtros */}
        {noticiasSociedadesAmigas.length > 0 && (
          <div className="mx-auto mt-10 max-w-2xl lg:max-w-none">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Búsqueda */}
              <div className="relative flex-1 max-w-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="size-5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar publicaciones..."
                  className="block w-full rounded-md border-0 bg-white px-3.5 py-2 pl-10 pr-3.5 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
                />
              </div>

              {/* Filtro por sociedad */}
              <select
                value={selectedSociedad}
                onChange={(e) => setSelectedSociedad(e.target.value)}
                className="rounded-md border-0 bg-white px-3 py-2 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
              >
                {sociedades.map((sociedad) => (
                  <option key={sociedad} value={sociedad}>
                    {sociedad}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className="mx-auto mt-10 max-w-2xl lg:max-w-none">
          {noticiasSociedadesAmigas.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">Aún no hay publicaciones</h3>
              <p className="mt-1 text-sm text-slate-500">
                Las publicaciones y noticias de las sociedades amigas aparecerán aquí cuando estén disponibles.
              </p>
            </div>
          ) : filteredNoticias.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-sm text-slate-500">No se encontraron publicaciones que coincidan con tu búsqueda.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredNoticias.map((noticia) => (
                <article
                  key={noticia.id}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  {/* Layout: imagen arriba, texto abajo */}
                  {noticia.imageLayout === 'full' && (
                    <div className="flex flex-col">
                      {noticia.image && (
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-full object-cover"
                            src={noticia.image}
                            alt={noticia.title}
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-start gap-x-3 mb-2">
                          <h4 className="text-xl font-semibold text-slate-900">{noticia.title}</h4>
                          <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getCategoryColor(noticia.category)}`}>
                            {noticia.category}
                          </p>
                          <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getSociedadColor(noticia.sociedad)}`}>
                            {noticia.sociedad}
                          </p>
                        </div>
                        <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-slate-500 mb-4">
                          <p className="whitespace-nowrap">{noticia.month} {noticia.year}</p>
                          <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                            <circle r={1} cx={1} cy={1} />
                          </svg>
                          <p className="truncate">{noticia.type}</p>
                        </div>
                        {noticia.content && (
                          <p className="text-sm text-slate-600 mb-4 whitespace-pre-line">{noticia.content}</p>
                        )}
                        <div className="mt-auto">
                          <a
                            href={noticia.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition"
                          >
                            Ver publicación
                            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Layout: imagen izquierda, texto derecha */}
                  {noticia.imageLayout === 'left' && (
                    <div className="flex flex-col sm:flex-row">
                      {noticia.image && (
                        <div className="flex-shrink-0 sm:w-64">
                          <img
                            className="h-48 w-full object-cover sm:h-full"
                            src={noticia.image}
                            alt={noticia.title}
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-start gap-x-3 mb-2 flex-wrap">
                          <h4 className="text-xl font-semibold text-slate-900">{noticia.title}</h4>
                          <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getCategoryColor(noticia.category)}`}>
                            {noticia.category}
                          </p>
                          <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getSociedadColor(noticia.sociedad)}`}>
                            {noticia.sociedad}
                          </p>
                        </div>
                        <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-slate-500 mb-4">
                          <p className="whitespace-nowrap">{noticia.month} {noticia.year}</p>
                          <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                            <circle r={1} cx={1} cy={1} />
                          </svg>
                          <p className="truncate">{noticia.type}</p>
                        </div>
                        {noticia.content && (
                          <p className="text-sm text-slate-600 mb-4 whitespace-pre-line">{noticia.content}</p>
                        )}
                        <div className="mt-auto">
                          <a
                            href={noticia.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition"
                          >
                            Ver publicación
                            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Layout: imagen derecha, texto izquierda */}
                  {noticia.imageLayout === 'right' && (
                    <div className="flex flex-col sm:flex-row-reverse">
                      {noticia.image && (
                        <div className="flex-shrink-0 sm:w-64">
                          <img
                            className="h-48 w-full object-cover sm:h-full"
                            src={noticia.image}
                            alt={noticia.title}
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-start gap-x-3 mb-2 flex-wrap">
                          <h4 className="text-xl font-semibold text-slate-900">{noticia.title}</h4>
                          <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getCategoryColor(noticia.category)}`}>
                            {noticia.category}
                          </p>
                          <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getSociedadColor(noticia.sociedad)}`}>
                            {noticia.sociedad}
                          </p>
                        </div>
                        <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-slate-500 mb-4">
                          <p className="whitespace-nowrap">{noticia.month} {noticia.year}</p>
                          <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                            <circle r={1} cx={1} cy={1} />
                          </svg>
                          <p className="truncate">{noticia.type}</p>
                        </div>
                        {noticia.content && (
                          <p className="text-sm text-slate-600 mb-4 whitespace-pre-line">{noticia.content}</p>
                        )}
                        <div className="mt-auto">
                          <a
                            href={noticia.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition"
                          >
                            Ver publicación
                            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Layout: sin imagen */}
                  {!noticia.imageLayout && (
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start gap-x-3 mb-2 flex-wrap">
                        <h4 className="text-xl font-semibold text-slate-900">{noticia.title}</h4>
                        <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getCategoryColor(noticia.category)}`}>
                          {noticia.category}
                        </p>
                        <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getSociedadColor(noticia.sociedad)}`}>
                          {noticia.sociedad}
                        </p>
                      </div>
                      <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-slate-500 mb-4">
                        <p className="whitespace-nowrap">{noticia.month} {noticia.year}</p>
                        <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                          <circle r={1} cx={1} cy={1} />
                        </svg>
                        <p className="truncate">{noticia.type}</p>
                      </div>
                      {noticia.content && (
                        <p className="text-sm text-slate-600 mb-4 whitespace-pre-line">{noticia.content}</p>
                      )}
                      <div className="mt-auto">
                        <a
                          href={noticia.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition"
                        >
                          Ver publicación
                          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
          {filteredNoticias.length > 0 && (
            <p className="mt-4 text-sm text-slate-500 text-center">
              Mostrando {filteredNoticias.length} de {noticiasSociedadesAmigas.length} publicaciones
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SociedadesAmigas

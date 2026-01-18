import { useState } from 'react'
import flyerCardioBigUrl from '../assets/cursos_congresos/2025/flyer_cardio_big.jpg'
import masterFormacionPdfUrl from '../assets/cursos_congresos/2024/master_formacion_hipertension_arterial.pdf?url'
import flyerNeumo2024Url from '../assets/cursos_congresos/2024/flyer_neumo_2024.png'
import programaNeumo2024Url from '../assets/cursos_congresos/2024/programa_curso_neumo_2024.pdf?url'
import enfoqueGrandeUrl from '../assets/cursos_congresos/2024/enfoque_grande.png'
import alergia24Url from '../assets/cursos_congresos/2024/alergia_24.jpg'
import programaNeumo2023Url from '../assets/cursos_congresos/2023/curso_neumo_2023_programa.pdf?url'
import programaNeumo2022Url from '../assets/cursos_congresos/2022/programa_curso_neumo_2022.pdf?url'

// Mapeo de meses
const monthsMap = {
  'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04', 'mayo': '05', 'junio': '06',
  'julio': '07', 'agosto': '08', 'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12',
  'sept': '09', 'sep': '09', 'ago': '08', 'jul': '07', 'jun': '06', 'may': '05', 'abr': '04', 'mar': '03', 'feb': '02', 'ene': '01',
  'nov': '11', 'dic': '12', 'oct': '10'
}

// Función para parsear fechas y ordenar
const parseDate = (dateStr, year) => {
  if (!dateStr) return `${year}-12-31`
  const lowerDate = dateStr.toLowerCase()
  const monthMatch = Object.keys(monthsMap).find(m => lowerDate.includes(m))
  const month = monthMatch ? monthsMap[monthMatch] : '12'
  // Extraer día si está disponible
  const dayMatch = dateStr.match(/(\d{1,2})/)
  const day = dayMatch ? dayMatch[1].padStart(2, '0') : '01'
  return `${year}-${month}-${day}`
}

const eventos = [
  // 2025
  {
    id: 1,
    title: 'XXVII Congreso de Oncología Clínica',
    date: '17 al 19 de Septiembre',
    dateFull: '2025-09-17',
    location: 'Centro de Convenciones Buenos Aires',
    modality: 'Presencial',
    links: [
      { label: 'Más info', href: 'https://congresoaaoc.com.ar/' },
    ],
    year: '2025',
    month: 'Septiembre',
  },
  {
    id: 2,
    title: 'VI Congreso Interamericano de Prevención Cardiovascular 2025',
    date: '02 al 04 de octubre',
    dateFull: '2025-10-02',
    location: 'Hotel Hilton Mendoza',
    modality: 'Presencial',
    links: [
      { label: 'Ver flyer', href: flyerCardioBigUrl },
    ],
    year: '2025',
    month: 'Octubre',
  },
  // 2024
  {
    id: 3,
    title: 'Master de formacion permanente en hipertensión pulmonar Edición Internacional 2023-2025',
    date: 'Marzo 2024',
    dateFull: '2024-03-01',
    location: 'Online',
    modality: 'Online',
    links: [
      { label: 'Más información', href: masterFormacionPdfUrl },
    ],
    year: '2024',
    month: 'Marzo',
  },
  {
    id: 4,
    title: 'VII Congreso Argentino de Fibrosis Quística',
    date: '21 y 22 de marzo',
    dateFull: '2024-03-21',
    location: 'Buenos Aires',
    modality: 'Presencial',
    links: [
      { label: 'Ver programa', href: 'https://congresofibrosisquistica2024.com.ar/programa/' },
      { label: 'Inscripciones', href: 'https://congresofibrosisquistica2024.com.ar/inscripciones/' },
    ],
    year: '2024',
    month: 'Marzo',
  },
  {
    id: 5,
    title: 'CURSO DE NEUMONOLOGIA 2024',
    date: '09 de Mayo - 15 de Agosto',
    dateFull: '2024-05-09',
    location: 'AMA / Online',
    modality: 'Híbrido',
    links: [
      { label: 'Ver Flyer', href: flyerNeumo2024Url },
      { label: 'Ver Programa', href: programaNeumo2024Url },
      { label: 'Inscripciones online', href: 'https://www.ama-med.org.ar/contacto/option/curso' },
    ],
    year: '2024',
    month: 'Mayo',
  },
  {
    id: 6,
    title: 'XIX Enfoque multidisciplinario de cáncer de pulmón',
    date: '9 y 10 de Mayo',
    dateFull: '2024-05-09',
    location: 'Centro de convenciones Sheraton Bs As',
    modality: 'Presencial',
    links: [
      { label: 'Ver Flyer', href: enfoqueGrandeUrl },
      { label: 'Inscripción', href: 'https://enfoquepulmon.com.ar/' },
    ],
    year: '2024',
    month: 'Mayo',
  },
  {
    id: 7,
    title: 'Jornadas de Ambiente, Alergia y Enfermedades Respiratorias',
    date: '5 de Julio',
    dateFull: '2024-07-05',
    location: 'Moreno 909 CABA',
    modality: 'Híbrido',
    links: [
      { label: 'Ver Flyer', href: alergia24Url },
      { label: 'Informes e inscripcion', href: 'https://alergia.org.ar/index.php/jornada-ambiente-2024' },
    ],
    year: '2024',
    month: 'Julio',
  },
  {
    id: 8,
    title: '28 CSO - 28 Congreso de salud Ocupacional',
    date: '18, 19 y 20 de noviembre',
    dateFull: '2024-11-18',
    location: 'Hotel Scala CABA',
    modality: 'Presencial',
    links: [
      { label: 'Más Info', href: 'https://colmed6.org/28-congreso-de-salud-ocupacional/' },
    ],
    year: '2024',
    month: 'Noviembre',
  },
  // 2023
  {
    id: 9,
    title: 'CURSO DE NEUMONOLOGIA 2023',
    date: '30 de Marzo - 6 de Julio',
    dateFull: '2023-03-30',
    location: 'AMA / Online',
    modality: 'Híbrido',
    links: [
      { label: 'Ver programa', href: programaNeumo2023Url },
      { label: 'Inscripción online', href: 'https://www.ama-med.org.ar/contacto/preinscripcionNew2' },
    ],
    year: '2023',
    month: 'Marzo',
  },
  // 2022
  {
    id: 10,
    title: 'CURSO DE NEUMONOLOGIA 2022',
    date: '31 de Marzo - 11 de Agosto',
    dateFull: '2022-03-31',
    location: 'AMA / Online',
    modality: 'Híbrido',
    links: [
      { label: 'Ver programa', href: programaNeumo2022Url },
      { label: 'Inscripción online', href: 'https://www.ama-med.org.ar/especialidades/detalleCurso/588' },
    ],
    year: '2022',
    month: 'Marzo',
  },
  {
    id: 11,
    title: 'XXV CONGRESO STNBA',
    date: '31 de Marzo al 2 de Abril',
    dateFull: '2022-03-31',
    location: 'Buenos Aires',
    modality: 'Híbrido',
    links: [
      { label: 'Inscripción', href: 'https://www.congresostnba2022.com/registro' },
    ],
    year: '2022',
    month: 'Marzo',
  },
  {
    id: 12,
    title: 'XVII Conferencia Enfoque multidisciplinario de cáncer de pulmón',
    date: '5 y 6 de Mayo',
    dateFull: '2022-05-05',
    location: 'Buenos Aires',
    modality: 'Híbrido',
    links: [
      { label: 'Ver Flyer', href: 'https://www.aamr.org.ar/congresos_jornadas/2022/enfoque_pulmon_2022.png' },
    ],
    year: '2022',
    month: 'Mayo',
  },
].sort((a, b) => {
  // Ordenar por fecha completa (más reciente primero)
  return new Date(b.dateFull) - new Date(a.dateFull)
})

// Array de noticias destacadas con estructura flexible
// imageLayout puede ser: 'full' (imagen arriba, texto abajo), 'left' (imagen izquierda), 'right' (imagen derecha), o null (sin imagen)
const noticiasDestacadas = [
  // Ejemplo 1: Noticia con imagen arriba y texto abajo
  // {
  //   id: 1,
  //   title: 'PROGRAMA, FECHAS, HORARIOS, INSCRIPCIÓN Y BECAS',
  //   content: 'Descripción completa del evento con toda la información relevante...',
  //   imageLayout: 'full', // 'full' | 'left' | 'right' | null
  //   image: '../assets/cursos/ejemplo.jpg', // Ruta a la imagen (opcional)
  //   links: [
  //     { label: 'Ver PDF', href: 'https://example.com/programa.pdf', type: 'pdf' },
  //     { label: 'Inscripción', href: 'https://example.com/inscripcion', type: 'web' },
  //   ],
  //   year: '2025',
  //   month: 'Enero',
  //   dateFull: '2025-01-15',
  // },
].sort((a, b) => {
  // Ordenar por fecha completa (más reciente primero)
  return new Date(b.dateFull) - new Date(a.dateFull)
})

const CursosCongresos = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('Todos')

  // Obtener años únicos
  const years = ['Todos', ...Array.from(new Set(eventos.map(e => e.year))).sort((a, b) => b.localeCompare(a))]

  // Filtrar eventos
  const filteredEventos = eventos.filter((evento) => {
    const search = searchTerm.toLowerCase()
    const matchesSearch = 
      evento.title.toLowerCase().includes(search) ||
      evento.location.toLowerCase().includes(search) ||
      evento.modality.toLowerCase().includes(search) ||
      evento.month.toLowerCase().includes(search) ||
      evento.year.includes(search)
    
    const matchesYear = selectedYear === 'Todos' || evento.year === selectedYear
    
    return matchesSearch && matchesYear
  })

  // Agrupar por año
  const eventosByYear = filteredEventos.reduce((acc, evento) => {
    if (!acc[evento.year]) {
      acc[evento.year] = []
    }
    acc[evento.year].push(evento)
    return acc
  }, {})

  const getModalityColor = (modality) => {
    const colors = {
      'Presencial': 'bg-green-50 text-green-700 ring-green-600/20',
      'Híbrido': 'bg-blue-50 text-blue-700 ring-blue-600/20',
      'Online': 'bg-purple-50 text-purple-700 ring-purple-600/20',
    }
    return colors[modality] || 'bg-slate-50 text-slate-700 ring-slate-600/20'
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary-600">Cursos y congresos</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl lg:text-balance">
            Agenda académica y formación continua
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            Cronología de cursos, congresos y eventos académicos organizados y auspiciados por la SAN. 
            Mantenete actualizado con las últimas actividades formativas.
          </p>
        </div>

        {/* Filtros */}
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
                placeholder="Buscar eventos..."
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 pl-10 pr-3.5 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
              />
            </div>
            {/* Filtro por año */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
            >
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Noticias Destacadas */}
        {noticiasDestacadas.length > 0 && (
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Noticias destacadas</h3>
            <div className="space-y-12">
              {noticiasDestacadas.map((noticia) => (
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
                        <h4 className="text-xl font-semibold text-slate-900 mb-2">{noticia.title}</h4>
                        {noticia.month && noticia.year && (
                          <p className="text-sm text-slate-500 mb-4">
                            {noticia.month} {noticia.year}
                          </p>
                        )}
                        {noticia.content && (
                          <p className="text-sm text-slate-600 mb-4 whitespace-pre-line">{noticia.content}</p>
                        )}
                        {noticia.links && noticia.links.length > 0 && (
                          <div className="flex flex-wrap gap-3 mt-auto">
                            {noticia.links.map((link, linkIdx) => (
                              <a
                                key={linkIdx}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition ${
                                  link.type === 'pdf'
                                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                                    : 'bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                {link.label}
                                {link.type === 'web' && (
                                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                  </svg>
                                )}
                                {link.type === 'pdf' && (
                                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                )}
                              </a>
                            ))}
                          </div>
                        )}
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
                        <h4 className="text-xl font-semibold text-slate-900 mb-2">{noticia.title}</h4>
                        {noticia.month && noticia.year && (
                          <p className="text-sm text-slate-500 mb-4">
                            {noticia.month} {noticia.year}
                          </p>
                        )}
                        {noticia.content && (
                          <p className="text-sm text-slate-600 mb-4 whitespace-pre-line">{noticia.content}</p>
                        )}
                        {noticia.links && noticia.links.length > 0 && (
                          <div className="flex flex-wrap gap-3 mt-auto">
                            {noticia.links.map((link, linkIdx) => (
                              <a
                                key={linkIdx}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition ${
                                  link.type === 'pdf'
                                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                                    : 'bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                {link.label}
                                {link.type === 'web' && (
                                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                  </svg>
                                )}
                                {link.type === 'pdf' && (
                                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                )}
                              </a>
                            ))}
                          </div>
                        )}
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
                        <h4 className="text-xl font-semibold text-slate-900 mb-2">{noticia.title}</h4>
                        {noticia.month && noticia.year && (
                          <p className="text-sm text-slate-500 mb-4">
                            {noticia.month} {noticia.year}
                          </p>
                        )}
                        {noticia.content && (
                          <p className="text-sm text-slate-600 mb-4 whitespace-pre-line">{noticia.content}</p>
                        )}
                        {noticia.links && noticia.links.length > 0 && (
                          <div className="flex flex-wrap gap-3 mt-auto">
                            {noticia.links.map((link, linkIdx) => (
                              <a
                                key={linkIdx}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition ${
                                  link.type === 'pdf'
                                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                                    : 'bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                {link.label}
                                {link.type === 'web' && (
                                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                  </svg>
                                )}
                                {link.type === 'pdf' && (
                                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                )}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Layout: sin imagen */}
                  {!noticia.imageLayout && (
                    <div className="flex flex-1 flex-col p-6">
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">{noticia.title}</h4>
                      {noticia.month && noticia.year && (
                        <p className="text-sm text-slate-500 mb-4">
                          {noticia.month} {noticia.year}
                        </p>
                      )}
                      {noticia.content && (
                        <p className="text-sm text-slate-600 mb-4 whitespace-pre-line">{noticia.content}</p>
                      )}
                      {noticia.links && noticia.links.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-auto">
                          {noticia.links.map((link, linkIdx) => (
                            <a
                              key={linkIdx}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition ${
                                link.type === 'pdf'
                                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                                  : 'bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              {link.label}
                              {link.type === 'web' && (
                                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              )}
                              {link.type === 'pdf' && (
                                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              )}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          {Object.keys(eventosByYear).length === 0 ? (
            <div className="text-center py-12">
              <p className="text-sm text-slate-500">No se encontraron eventos que coincidan con tu búsqueda.</p>
            </div>
          ) : (
            <div className="space-y-16">
              {Object.keys(eventosByYear).sort((a, b) => b.localeCompare(a)).map((year) => (
                <div key={year} className="relative">
                  {/* Año */}
                  <div className="sticky top-8 z-10 -ml-4 -mt-2 flex items-baseline gap-x-2 bg-white pb-2 sm:static sm:ml-0 sm:mt-0 sm:pb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{year}</h3>
                    <div className="hidden h-px flex-auto bg-slate-200 sm:block" aria-hidden="true" />
                    <span className="text-sm text-slate-500">{eventosByYear[year].length} eventos</span>
                  </div>

                  {/* Eventos del año */}
                  <div className="relative mt-6 space-y-8 sm:mt-8">
                    <div className="absolute left-3 top-0 hidden h-full w-px bg-slate-200 sm:block" aria-hidden="true" />
                    {eventosByYear[year].map((evento, idx) => (
                      <div key={evento.id} className="relative pl-8 sm:pl-16">
                        <div className="absolute left-0 top-0 hidden h-3 w-3 rounded-full bg-primary-600 ring-4 ring-white sm:block" aria-hidden="true" />
                        
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1">
                            <div className="flex items-start gap-x-3">
                              <p className="text-base/7 font-semibold text-slate-900">{evento.title}</p>
                              <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium ${getModalityColor(evento.modality)}`}>
                                {evento.modality}
                              </p>
                            </div>
                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm/6 text-slate-500">
                              <div className="flex items-center gap-1">
                                <svg className="size-4 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>
                                <span>{evento.month} - {evento.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <svg className="size-4 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <span>{evento.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2 sm:mt-0 sm:flex-nowrap">
                            {evento.links.map((link, linkIdx) => (
                              <a
                                key={linkIdx}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-xs ring-1 ring-slate-300 hover:bg-slate-50"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {filteredEventos.length > 0 && (
            <p className="mt-8 text-sm text-slate-500 text-center">
              Mostrando {filteredEventos.length} de {eventos.length} eventos
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CursosCongresos

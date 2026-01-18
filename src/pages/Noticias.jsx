import { useState } from 'react'
import gacetillaPrensa2023Url from '../assets/noticias/2023/gacetilla_prensa_dic_2023.docx?url'
import separataArApTabquismoUrl from '../assets/articulos_interes/2021_separata_ar_ap_tabquismo.pdf?url'
import separataBasesCesacionUrl from '../assets/articulos_interes/2021_separata_bases_cesacion_tabaquica.pdf?url'
import vacunaAntigripalUrl from '../assets/articulos_interes/vacuna_antigripal_minist_2020.pdf?url'
import estadisticaCancerUrl from '../assets/noticias/2016/estadistica_del_cancer.pdf?url'
import encuestaAsmaUrl from '../assets/articulos_interes/encuesta_asma_arg_2015.pdf?url'
import alertaInfluenzaUrl from '../assets/articulos_interes/alerta_influenza.pdf?url'
import alertaBotulismoUrl from '../assets/articulos_interes/alerta_botulismo_alimentario_argentina.pdf?url'
import tabacoAdolescentesUrl from '../assets/articulos_interes/tabaco_en_adolescentes_argentina_2009.pdf?url'
import encuestaNacionalFactoresRiesgoUrl from '../assets/articulos_interes/encuesta_nacional_de_factores_de_riesgo_2009_revargent_salud_publica.pdf?url'

const noticias = [
  {
    id: 1,
    title: 'Repudio a publicidades de tabaco que violan la Ley 26.687',
    href: gacetillaPrensa2023Url,
    year: '2023',
    month: 'Diciembre',
    category: 'Institucional',
    type: 'Comunicado',
  },
  {
    id: 2,
    title: 'Primera cirugía robótica de tórax por incisión única en Argentina',
    href: 'https://tn.com.ar/salud/noticias/2022/07/21/realizaron-la-primera-cirugia-robotica-de-torax-por-incision-unica-en-la-argentina/',
    year: '2022',
    month: 'Julio',
    category: 'Tecnología',
    type: 'Noticia',
  },
  {
    id: 3,
    title: 'Fumar duplica riesgo de progresión de COVID-19',
    href: 'https://www.agenciacyta.org.ar/2020/05/fumar-se-asociaria-al-doble-de-riesgo-de-sufrir-progresion-de-covid-19/',
    year: '2020',
    month: 'Mayo',
    category: 'Salud pública',
    type: 'Noticia',
  },
  {
    id: 4,
    title: 'ARTRITIS REUMATOIDE/ARTRITIS PSORIÁSICA Y TABAQUISMO - SEPARATA 2021',
    href: separataArApTabquismoUrl,
    year: '2021',
    month: '2021',
    category: 'Tabaquismo',
    type: 'Publicación',
  },
  {
    id: 5,
    title: 'BASES PARA LA CESACIÓN TABÁQUICA - SEPARATA 2021',
    href: separataBasesCesacionUrl,
    year: '2021',
    month: '2021',
    category: 'Tabaquismo',
    type: 'Publicación',
  },
  {
    id: 6,
    title: 'Vacuna antigripal Ministerio de Salud de Argentina 2020',
    href: vacunaAntigripalUrl,
    year: '2020',
    month: '2020',
    category: 'Vacunación',
    type: 'Documento oficial',
  },
  {
    id: 7,
    title: 'Estadísticas del Cáncer en la Argentina - 2016',
    href: estadisticaCancerUrl,
    year: '2016',
    month: '2016',
    category: 'Epidemiología',
    type: 'Informe',
  },
  {
    id: 8,
    title: 'Encuesta ASMA ARG 2015',
    href: encuestaAsmaUrl,
    year: '2015',
    month: '2015',
    category: 'Asma',
    type: 'Estudio',
  },
  {
    id: 9,
    title: 'Alerta Influenza',
    href: alertaInfluenzaUrl,
    year: '2008',
    month: '2008',
    category: 'Vacunación',
    type: 'Alerta',
  },
  {
    id: 10,
    title: 'Alerta Botulismo Alimentario Argentina',
    href: alertaBotulismoUrl,
    year: '2008',
    month: '2008',
    category: 'Salud pública',
    type: 'Alerta',
  },
  {
    id: 11,
    title: 'Tabaco en adolescentes argentina 2009',
    href: tabacoAdolescentesUrl,
    year: '2009',
    month: '2009',
    category: 'Tabaquismo',
    type: 'Estudio',
  },
  {
    id: 12,
    title: 'Encuesta Nacional de Factores de Riesgo 2009',
    href: encuestaNacionalFactoresRiesgoUrl,
    year: '2009',
    month: '2009',
    category: 'Epidemiología',
    type: 'Encuesta',
  },
].sort((a, b) => {
  // Ordenar por año (más reciente primero), luego por mes
  if (b.year !== a.year) {
    return parseInt(b.year) - parseInt(a.year)
  }
  return b.month.localeCompare(a.month)
})

const Noticias = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [selectedType, setSelectedType] = useState('Todos')
  const [selectedYear, setSelectedYear] = useState('Todos')

  const categories = ['Todas', ...Array.from(new Set(noticias.map(n => n.category)))]
  const types = ['Todos', ...Array.from(new Set(noticias.map(n => n.type)))]
  const years = ['Todos', ...Array.from(new Set(noticias.map(n => n.year))).sort((a, b) => b.localeCompare(a))]

  const getCategoryColor = (category) => {
    const colors = {
      'Institucional': 'bg-blue-50 text-blue-700 ring-blue-600/20',
      'Tecnología': 'bg-purple-50 text-purple-700 ring-purple-600/20',
      'Salud pública': 'bg-green-50 text-green-700 ring-green-600/20',
      'Tabaquismo': 'bg-red-50 text-red-700 ring-red-600/20',
      'Vacunación': 'bg-indigo-50 text-indigo-700 ring-indigo-600/20',
      'Epidemiología': 'bg-orange-50 text-orange-700 ring-orange-600/20',
      'Asma': 'bg-cyan-50 text-cyan-700 ring-cyan-600/20',
    }
    return colors[category] || 'bg-slate-50 text-slate-700 ring-slate-600/20'
  }

  const getTypeColor = (type) => {
    const colors = {
      'Comunicado': 'bg-blue-100 text-blue-800',
      'Noticia': 'bg-green-100 text-green-800',
      'Publicación': 'bg-purple-100 text-purple-800',
      'Documento oficial': 'bg-yellow-100 text-yellow-800',
      'Informe': 'bg-orange-100 text-orange-800',
      'Estudio': 'bg-indigo-100 text-indigo-800',
      'Alerta': 'bg-red-100 text-red-800',
      'Encuesta': 'bg-cyan-100 text-cyan-800',
    }
    return colors[type] || 'bg-slate-100 text-slate-800'
  }

  const filteredNoticias = noticias.filter((noticia) => {
    const search = searchTerm.toLowerCase()
    const matchesSearch = 
      noticia.title.toLowerCase().includes(search) ||
      noticia.category.toLowerCase().includes(search) ||
      noticia.type.toLowerCase().includes(search) ||
      noticia.year.includes(search)
    
    const matchesCategory = selectedCategory === 'Todas' || noticia.category === selectedCategory
    const matchesType = selectedType === 'Todos' || noticia.type === selectedType
    const matchesYear = selectedYear === 'Todos' || noticia.year === selectedYear
    
    return matchesSearch && matchesCategory && matchesType && matchesYear
  })

  // Agrupar por año
  const noticiasByYear = filteredNoticias.reduce((acc, noticia) => {
    if (!acc[noticia.year]) {
      acc[noticia.year] = []
    }
    acc[noticia.year].push(noticia)
    return acc
  }, {})

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary-600">Noticias</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl lg:text-balance">
            Novedades y comunicados
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            Mantenete informado sobre las últimas noticias, comunicados institucionales, alertas sanitarias 
            y publicaciones relevantes de la Sociedad Argentina de Neumonología.
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
                placeholder="Buscar noticias..."
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 pl-10 pr-3.5 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
              />
            </div>
            {/* Filtros por categoría, tipo y año */}
            <div className="flex gap-2">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
              >
                {types.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          {Object.keys(noticiasByYear).length === 0 ? (
            <div className="text-center py-12">
              <p className="text-sm text-slate-500">No se encontraron noticias que coincidan con tu búsqueda.</p>
            </div>
          ) : (
            <div className="space-y-16">
              {Object.keys(noticiasByYear).sort((a, b) => b.localeCompare(a)).map((year) => (
                <div key={year} className="relative">
                  {/* Año */}
                  <div className="sticky top-8 z-10 -ml-4 -mt-2 flex items-baseline gap-x-2 bg-white pb-2 sm:static sm:ml-0 sm:mt-0 sm:pb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{year}</h3>
                    <div className="hidden h-px flex-auto bg-slate-200 sm:block" aria-hidden="true" />
                    <span className="text-sm text-slate-500">{noticiasByYear[year].length} noticias</span>
                  </div>

                  {/* Noticias del año */}
                  <div className="relative mt-6 space-y-8 sm:mt-8">
                    <div className="absolute left-3 top-0 hidden h-full w-px bg-slate-200 sm:block" aria-hidden="true" />
                    {noticiasByYear[year].map((noticia) => (
                      <div key={noticia.id} className="relative pl-8 sm:pl-16">
                        <div className="absolute left-0 top-0 hidden h-3 w-3 rounded-full bg-primary-600 ring-4 ring-white sm:block" aria-hidden="true" />
                        
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1">
                            <div className="flex items-start gap-x-3 flex-wrap">
                              <p className="text-base/7 font-semibold text-slate-900">{noticia.title}</p>
                              <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getCategoryColor(noticia.category)}`}>
                                {noticia.category}
                              </p>
                              <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getTypeColor(noticia.type)}`}>
                                {noticia.type}
                              </p>
                            </div>
                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm/6 text-slate-500">
                              <div className="flex items-center gap-1">
                                <svg className="size-4 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>
                                <span>{noticia.month} {noticia.year}</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2 sm:mt-0 sm:flex-nowrap">
                            <a
                              href={noticia.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-xs ring-1 ring-slate-300 hover:bg-slate-50"
                            >
                              Ver noticia
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {filteredNoticias.length > 0 && (
            <p className="mt-8 text-sm text-slate-500 text-center">
              Mostrando {filteredNoticias.length} de {noticias.length} noticias
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Noticias

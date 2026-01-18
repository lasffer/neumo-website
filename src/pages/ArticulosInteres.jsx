import { useState } from 'react'

const articulos = [
  {
    id: 1,
    name: 'ARTRITIS REUMATOIDE/ARTRITIS PSORIÁSICA Y TABAQUISMO - SEPARATA 2021 - C. BOCCIA',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/2021_separata_ar_ap_tabquismo.pdf',
    year: '2021',
    category: 'Tabaquismo',
  },
  {
    id: 2,
    name: 'BASES PARA LA CESACIÓN TABÁQUICA - SEPARATA 2021 - C. BOCCIA',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/2021_separata_bases_cesacion_tabaquica.pdf',
    year: '2021',
    category: 'Tabaquismo',
  },
  {
    id: 3,
    name: 'Vacuna antigripal Ministerio de Salud de Argentina 2020',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/vacuna_antigripal_minist_2020.pdf',
    year: '2020',
    category: 'Vacunación',
  },
  {
    id: 4,
    name: 'Vacunación contra neumococo Estrategia Argentina 2017 - 2018',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/vacunacion_contra_neumococo.pdf',
    year: '2017',
    category: 'Vacunación',
  },
  {
    id: 5,
    name: 'Estadísticas del Cáncer en la Argentina - 2016',
    href: 'https://www.neumo-argentina.org/images/noticias/2016/estadistica_del_cancer.pdf',
    year: '2016',
    category: 'Epidemiología',
  },
  {
    id: 6,
    name: 'Encuesta ASMA ARG 2015',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/encuesta_asma_arg_2015.pdf',
    year: '2015',
    category: 'Asma',
  },
  {
    id: 7,
    name: 'WHO 2015 vac influenza',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/who_2015_vac_influenza.pdf',
    year: '2015',
    category: 'Vacunación',
  },
  {
    id: 8,
    name: 'TB 2014 - Reporte OMS',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/tb_2014_-_reporte_oms.pdf',
    year: '2014',
    category: 'Tuberculosis',
  },
  {
    id: 9,
    name: 'WHO 2013 epidemia tabaco',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/who_2013_epidemia_tabaco.pdf',
    year: '2013',
    category: 'Tabaquismo',
  },
  {
    id: 10,
    name: 'SALA IRA sem 26-2012',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/sala_ira_sem_26-2012.ppt',
    year: '2012',
    category: 'Epidemiología',
  },
  {
    id: 11,
    name: 'Resumen de la situación de enfermedades respiratorias 2011 Semana Epidemiológica 39',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/ministerio_enf.resp.2011.pdf',
    year: '2011',
    category: 'Epidemiología',
  },
  {
    id: 12,
    name: 'Estudio de carga de enfermedad - ARG 2010',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/estudio_de_carga_de_enfermedad_-_arg_2010.pdf',
    year: '2010',
    category: 'Epidemiología',
  },
  {
    id: 13,
    name: 'Tabaco en adolescentes argentina 2009',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/tabaco_en_adolescentes_argentina_2009.pdf',
    year: '2009',
    category: 'Tabaquismo',
  },
  {
    id: 14,
    name: 'Encuesta Nacional de Factores de Riesgo 2009 RevArgent Salud Publica',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/encuesta_nacional_de_factores_de_riesgo_2009_revargent_salud_publica.pdf',
    year: '2009',
    category: 'Epidemiología',
  },
  {
    id: 15,
    name: 'MSN - Vigilancia de infecciones respiratorias agudas',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/msn_vigilancia_de_infecciones_respiratorias_agudas.pdf',
    year: '2009',
    category: 'Epidemiología',
  },
  {
    id: 16,
    name: 'Alerta Botulismo Alimentario Argentina',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/alerta_botulismo_alimentario_argentina.pdf',
    year: '2008',
    category: 'General',
  },
  {
    id: 17,
    name: 'Alerta Influenza',
    href: 'https://www.neumo-argentina.org/images/articulos_interes/alerta_influenza.pdf',
    year: '2008',
    category: 'Vacunación',
  },
]

const ArticulosInteres = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const getCategoryColor = (category) => {
    const colors = {
      'Tabaquismo': 'bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20',
      'Vacunación': 'bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20',
      'Tuberculosis': 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20',
      'Epidemiología': 'bg-purple-50 text-purple-700 ring-purple-600/20 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20',
      'Asma': 'bg-indigo-50 text-indigo-700 ring-indigo-600/20 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/20',
      'General': 'bg-slate-50 text-slate-700 ring-slate-600/20 dark:bg-slate-400/10 dark:text-slate-400 dark:ring-slate-400/20',
    }
    return colors[category] || colors['General']
  }

  const filteredArticulos = articulos.filter((articulo) => {
    const search = searchTerm.toLowerCase()
    return (
      articulo.name.toLowerCase().includes(search) ||
      articulo.category.toLowerCase().includes(search) ||
      articulo.year.includes(search)
    )
  })

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary-600">Artículos de interés</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl lg:text-balance">
            Evidencia y publicaciones recientes
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            Selección curada de artículos, estudios y publicaciones relevantes para la práctica clínica en neumonología. 
            Evidencia actualizada y recursos de referencia.
          </p>
        </div>
        
        {/* Search Section */}
        <div className="mx-auto mt-10 max-w-2xl lg:max-w-none">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="size-5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nombre, categoría o año..."
              className="block w-full rounded-md border-0 bg-white px-3.5 py-2 pl-10 pr-3.5 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:max-w-none">
          {filteredArticulos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-sm text-slate-500">No se encontraron artículos que coincidan con tu búsqueda.</p>
            </div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {filteredArticulos.map((articulo) => (
                <li key={articulo.id} className="flex items-center justify-between gap-x-6 py-5">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-x-3">
                      <p className="text-sm/6 font-semibold text-slate-900">{articulo.name}</p>
                      <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium ${getCategoryColor(articulo.category)}`}>
                        {articulo.category}
                      </p>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-slate-500">
                      <p className="whitespace-nowrap">Año {articulo.year}</p>
                      <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      <p className="truncate">Artículo científico</p>
                    </div>
                  </div>
                  <div className="flex flex-none items-center gap-x-4">
                    <a
                      href={articulo.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-900 shadow-xs ring-1 ring-slate-300 hover:bg-slate-50 sm:block"
                    >
                      Ver artículo<span className="sr-only">, {articulo.name}</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {filteredArticulos.length > 0 && (
            <p className="mt-4 text-sm text-slate-500 text-center">
              Mostrando {filteredArticulos.length} de {articulos.length} artículos
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticulosInteres

import { useState } from 'react'
import gina2024Url from '../assets/articulos_interes/gina-2024-strategy-report-24_05_22_wms.pdf?url'
import asmaNice2024Url from '../assets/articulos_interes/asma_nice_2024.pdf?url'
import gold2021Url from '../assets/guias_consensos/gold_2021.pdf?url'
import gina2020Url from '../assets/guias_consensos/gina-2020.pdf?url'
import gold2020Url from '../assets/guias_consensos/gold-2020.pdf?url'
import tuberculosisOcupacional2019Url from '../assets/guias_consensos/tuberculosis_ocupacional_2019_web.pdf?url'
import gina2019Url from '../assets/guias_consensos/gina2019.pdf?url'
import gold2019Url from '../assets/guias_consensos/gold2019.pdf?url'
import tbTransmission2019Url from '../assets/guias_consensos/tb_transmission_erj_2019.pdf?url'
import diagFpiAts2018Url from '../assets/guias_consensos/diag._fpi_ats_2018.pdf?url'
import whoGlobalTb2018Url from '../assets/guias_consensos/who_global_tuberculosis_report_2018.pdf?url'
import guiaEpoc2015Url from '../assets/guias_consensos/guia_epoc_2015_ministerio.pdf?url'
import guiaDengueUrl from '../assets/guias_consensos/guia_dengue_ministerio.pdf?url'
import guiaTbMuniz2011Url from '../assets/guias_consensos/guia_tuberculosis_del_hospital_muniz_2011.pdf?url'
import guiaAlatEpoc2011Url from '../assets/guias_consensos/guiaalat_epoc_abril2011.pdf?url'

const guias = [
  {
    id: 1,
    name: 'Global Strategy for Asthma 2024 (GINA)',
    href: gina2024Url,
    year: '2024',
    category: 'Asma',
  },
  {
    id: 2,
    name: 'NICE | BTS | SIGN Asthma 2024',
    href: asmaNice2024Url,
    year: '2024',
    category: 'Asma',
  },
  {
    id: 3,
    name: 'GINA 2021',
    href: 'https://ginasthma.org/gina-reports/',
    year: '2021',
    category: 'Asma',
  },
  {
    id: 4,
    name: 'GOLD 2021',
    href: gold2021Url,
    year: '2021',
    category: 'EPOC',
  },
  {
    id: 5,
    name: 'GINA 2020',
    href: gina2020Url,
    year: '2020',
    category: 'Asma',
  },
  {
    id: 6,
    name: 'GOLD 2020',
    href: gold2020Url,
    year: '2020',
    category: 'EPOC',
  },
  {
    id: 7,
    name: 'Tuberculosis ocupacional Argentina 2019',
    href: tuberculosisOcupacional2019Url,
    year: '2019',
    category: 'Tuberculosis',
  },
  {
    id: 8,
    name: 'GINA 2019',
    href: gina2019Url,
    year: '2019',
    category: 'Asma',
  },
  {
    id: 9,
    name: 'GOLD 2019',
    href: gold2019Url,
    year: '2019',
    category: 'EPOC',
  },
  {
    id: 10,
    name: 'Reducing tuberculosis transmission (WHO) 2019',
    href: tbTransmission2019Url,
    year: '2019',
    category: 'Tuberculosis',
  },
  {
    id: 11,
    name: 'Diagnosis of Idiopathic Pulmonary Fibrosis 2018',
    href: diagFpiAts2018Url,
    year: '2018',
    category: 'Fibrosis Pulmonar',
  },
  {
    id: 12,
    name: 'GLOBAL Tuberculosis Report 2018',
    href: whoGlobalTb2018Url,
    year: '2018',
    category: 'Tuberculosis',
  },
  {
    id: 13,
    name: 'GOLD 2017',
    href: 'http://goldcopd.org/wp-content/uploads/2016/12/wms-GOLD-2017-Pocket-Guide.pdf',
    year: '2017',
    category: 'EPOC',
  },
  {
    id: 14,
    name: 'GINA 2016 en español',
    href: 'http://ginasthma.org/wp-content/uploads/2016/10/WMS-Spanish-Pocket-Guide-GINA-2016-v1.1.pdf',
    year: '2016',
    category: 'Asma',
  },
  {
    id: 15,
    name: 'Guía EPOC 2015 Ministerio',
    href: guiaEpoc2015Url,
    year: '2015',
    category: 'EPOC',
  },
  {
    id: 16,
    name: 'Guía DENGUE Ministerio',
    href: guiaDengueUrl,
    year: '2015',
    category: 'General',
  },
  {
    id: 17,
    name: 'Guía de Diagnóstico, tratamiento y prevención de la tuberculosis',
    href: guiaTbMuniz2011Url,
    year: '2011',
    category: 'Tuberculosis',
  },
  {
    id: 18,
    name: 'Recomendaciones para EPOC (ALAT 2011)',
    href: guiaAlatEpoc2011Url,
    year: '2011',
    category: 'EPOC',
  },
]

const GuiasConsensos = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const getCategoryColor = (category) => {
    const colors = {
      'Asma': 'bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20',
      'EPOC': 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/20',
      'Tuberculosis': 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20',
      'Fibrosis Pulmonar': 'bg-purple-50 text-purple-700 ring-purple-600/20 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20',
      'General': 'bg-slate-50 text-slate-700 ring-slate-600/20 dark:bg-slate-400/10 dark:text-slate-400 dark:ring-slate-400/20',
    }
    return colors[category] || colors['General']
  }

  const filteredGuias = guias.filter((guia) => {
    const search = searchTerm.toLowerCase()
    return (
      guia.name.toLowerCase().includes(search) ||
      guia.category.toLowerCase().includes(search) ||
      guia.year.includes(search)
    )
  })

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary-600">Guías y consensos</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl lg:text-balance">
            Protocolos y consensos validados
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            Selección curada de guías clínicas y consensos vigentes validados por la SAN y la AMA. 
            Documentos de referencia para la práctica clínica en neumonología.
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
          {filteredGuias.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-sm text-slate-500">No se encontraron documentos que coincidan con tu búsqueda.</p>
            </div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {filteredGuias.map((guia) => (
              <li key={guia.id} className="flex items-center justify-between gap-x-6 py-5">
                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-x-3">
                    <p className="text-sm/6 font-semibold text-slate-900">{guia.name}</p>
                    <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium ${getCategoryColor(guia.category)}`}>
                      {guia.category}
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-slate-500">
                    <p className="whitespace-nowrap">Año {guia.year}</p>
                    <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <p className="truncate">Guía clínica</p>
                  </div>
                </div>
                <div className="flex flex-none items-center gap-x-4">
                  <a
                    href={guia.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-900 shadow-xs ring-1 ring-slate-300 hover:bg-slate-50 sm:block"
                  >
                    Ver documento<span className="sr-only">, {guia.name}</span>
                  </a>
                </div>
              </li>
              ))}
            </ul>
          )}
          {filteredGuias.length > 0 && (
            <p className="mt-4 text-sm text-slate-500 text-center">
              Mostrando {filteredGuias.length} de {guias.length} documentos
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default GuiasConsensos

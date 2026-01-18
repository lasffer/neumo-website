import { useState } from 'react'
import indiceAsmaSeveroImg from '../assets/articulos_de_interes/propio/indice_de_asma_severo_latam.png'
import indiceAsmaSeveroPdf from '../assets/articulos_de_interes/propio/indice_de_asma_severo_latam.pdf?url'
// Para archivos con espacios en el nombre, usar new URL() con import.meta.url
const beyondSmokeImg = new URL('../assets/articulos_de_interes/propio/beyond smoke and mirrors final.png', import.meta.url).href
const beyondSmokePdf = new URL('../assets/articulos_de_interes/propio/beyond smoke and mirrors final.pdf', import.meta.url).href
import severeAsthmaIndexImg from '../assets/articulos_de_interes/propio/severe_asthma_index_expansion_report.png'
import severeAsthmaIndexPdf from '../assets/articulos_de_interes/propio/severe_asthma_index_expansion_report.pdf?url'

const articulosPropios = [
  {
    id: 1,
    title: 'Índice de Asma Severo Latinoamérica',
    image: indiceAsmaSeveroImg,
    pdf: indiceAsmaSeveroPdf,
    description: 'Estudio y análisis sobre el asma severo en la región latinoamericana.',
  },
  {
    id: 2,
    title: 'Beyond Smoke and Mirrors',
    image: beyondSmokeImg,
    pdf: beyondSmokePdf,
    description: 'Análisis exhaustivo sobre las realidades detrás de los datos clínicos.',
  },
  {
    id: 3,
    title: 'Severe Asthma Index Expansion Report',
    image: severeAsthmaIndexImg,
    pdf: severeAsthmaIndexPdf,
    description: 'Reporte de expansión del índice de asma severo con nuevos datos y conclusiones.',
  },
]

const ArticulosPropios = () => {
  const [selectedArticle, setSelectedArticle] = useState(null)

  const handleDownloadPdf = (pdfUrl, title) => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewPdf = (pdfUrl) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary-600">Artículos de interés</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl lg:text-balance">
            Publicaciones propias de la SAN
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            Artículos y estudios desarrollados por la Sociedad Argentina de Neumonología. 
            Investigaciones, análisis y recursos generados por nuestros especialistas.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid gap-8 lg:grid-cols-3">
            {articulosPropios.map((articulo) => (
              <div
                key={articulo.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={articulo.image}
                    alt={articulo.title}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">{articulo.title}</h3>
                    <p className="mt-3 text-sm text-slate-600">{articulo.description}</p>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => handleViewPdf(articulo.pdf)}
                      className="flex-1 rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                    >
                      Ver PDF
                    </button>
                    <button
                      onClick={() => handleDownloadPdf(articulo.pdf, articulo.title)}
                      className="flex-1 rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                    >
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticulosPropios

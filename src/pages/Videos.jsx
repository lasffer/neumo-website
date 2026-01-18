import { useState } from 'react'

const videos = [
  {
    id: 1,
    title: 'Palabras de Apertura 2013',
    speaker: 'Prof. Dr. Elias Hurtado Hoyo (Presidente de AMA)',
    href: 'http://www.youtube.com/watch?v=_Y3dFm1AW_8',
    year: '2013',
    category: 'Institucional',
  },
  {
    id: 2,
    title: 'Presentación de la Página Web 24 de Mayo de 2012',
    speaker: 'Dr Carlos Boccia',
    href: 'http://www.youtube.com/watch?v=lKZ_27PIsOc',
    year: '2012',
    category: 'Institucional',
  },
  {
    id: 3,
    title: 'Tratamiento Inhalado de las bronquiectasias',
    speaker: 'Dra María Inés Medín',
    href: 'http://www.youtube.com/watch?v=Wl6oQx8tMno&feature=youtu.be',
    year: '2014',
    category: 'Conferencia',
  },
  {
    id: 4,
    title: 'Neumoguardián',
    speaker: 'Lic.Juan Cruz Gorreri',
    href: 'http://www.youtube.com/watch?v=5MpAOcGoE3E&list=UUczXFRsVt706PFLJ5M9bnhQ',
    year: '2014',
    month: 'Noviembre',
    category: 'Conferencia',
  },
  {
    id: 5,
    title: 'Cáncer de Pulmón',
    speaker: 'Dr.Mario Branda',
    href: 'http://www.youtube.com/watch?v=JnJUQZd3yTs&feature=youtu.be',
    year: '2014',
    category: 'Conferencia',
  },
  {
    id: 6,
    title: 'Punciones Torácicas bajo control Tomográfico',
    speaker: 'Dr.Juan Marcos Wainstein',
    href: 'http://www.youtube.com/watch?v=lnY4ibEh5SE',
    year: '2014',
    category: 'Técnica',
  },
  {
    id: 7,
    title: 'Discusión de Caso Clínico Radiológico',
    speaker: 'Dr. Carlos Mario Boccia, Dr. Juan M. Wainstein',
    href: 'http://www.youtube.com/watch?v=KIfKtscKDGg',
    year: '2014',
    category: 'Caso clínico',
  },
  {
    id: 8,
    title: 'Criocirugía Endoscópica',
    speaker: 'Dr. Ricardo Isidoro',
    href: 'http://www.youtube.com/watch?v=Z6nTttLW_r4',
    year: '2014',
    category: 'Técnica',
  },
  {
    id: 9,
    title: 'Tuberculoma (discusión)',
    speaker: 'Panelistas: Prof. Dr. Eduardo Abbate y Prof. Dr. Domingo Palmero. Coordinador: Dr. Carlos Mario Boccia',
    href: 'http://www.youtube.com/watch?v=13ZyELhqOm8',
    year: '2014',
    category: 'Caso clínico',
  },
  {
    id: 10,
    title: 'Trasplante de Pulmón',
    speaker: 'Prof. Dr. Jorge O. Cáneva',
    href: 'http://www.youtube.com/watch?v=NfNc9Mh0cX4',
    year: '2014',
    category: 'Conferencia',
  },
  {
    id: 11,
    title: 'Mesotelioma',
    speaker: 'Prof. Dr. Carlos H. Spector',
    href: 'https://www.youtube.com/watch?v=J7e7439PznI',
    year: '2012',
    month: 'Junio',
    category: 'Conferencia',
  },
  {
    id: 12,
    title: 'Dr. Gustavo Parrilla expone un caso',
    speaker: 'Dr. Gustavo Parrilla',
    href: 'http://www.youtube.com/watch?v=LpX1AtkcQQ0',
    year: '2014',
    category: 'Caso clínico',
  },
  {
    id: 13,
    title: 'Bacteriología de la Tuberculosis',
    speaker: 'Dra. Marisa Gutiérrez y Dra. Juliana Annoni',
    href: 'http://www.youtube.com/watch?v=NnzR_OA53XA',
    year: '2014',
    category: 'Conferencia',
  },
].sort((a, b) => {
  // Ordenar por año (más reciente primero), luego por mes si está disponible
  if (b.year !== a.year) {
    return parseInt(b.year) - parseInt(a.year)
  }
  if (a.month && b.month) {
    return b.month.localeCompare(a.month)
  }
  return 0
})

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')

  const categories = ['Todas', ...Array.from(new Set(videos.map(v => v.category)))]

  const getCategoryColor = (category) => {
    const colors = {
      'Institucional': 'bg-blue-50 text-blue-700 ring-blue-600/20',
      'Conferencia': 'bg-purple-50 text-purple-700 ring-purple-600/20',
      'Técnica': 'bg-green-50 text-green-700 ring-green-600/20',
      'Caso clínico': 'bg-orange-50 text-orange-700 ring-orange-600/20',
    }
    return colors[category] || 'bg-slate-50 text-slate-700 ring-slate-600/20'
  }

  const getVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  const getEmbedUrl = (url) => {
    const videoId = getVideoId(url)
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null
  }

  const filteredVideos = videos.filter((video) => {
    const search = searchTerm.toLowerCase()
    const matchesSearch = 
      video.title.toLowerCase().includes(search) ||
      video.speaker.toLowerCase().includes(search) ||
      video.category.toLowerCase().includes(search) ||
      video.year.includes(search)
    
    const matchesCategory = selectedCategory === 'Todas' || video.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary-600">Videos</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl lg:text-balance">
            Contenido audiovisual
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            Accedé a conferencias, sesiones científicas, cursos y material audiovisual educativo 
            de la Sociedad Argentina de Neumonología.
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
                placeholder="Buscar videos..."
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 pl-10 pr-3.5 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
              />
            </div>
            {/* Filtro por categoría */}
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid de videos */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-sm text-slate-500">No se encontraron videos que coincidan con tu búsqueda.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video) => {
                const embedUrl = getEmbedUrl(video.href)
                return (
                  <article
                    key={video.id}
                    className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-sm transition-shadow"
                  >
                    {embedUrl && (
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                        <iframe
                          src={embedUrl}
                          title={video.title}
                          className="absolute inset-0 h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className={`rounded-md px-1.5 py-0.5 text-xs font-medium ${getCategoryColor(video.category)}`}>
                          {video.category}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold leading-6 text-slate-900 line-clamp-2 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                        {video.speaker}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-4 pt-2 border-t border-slate-100">
                      <time className="text-xs text-slate-500">
                        {video.month ? `${video.month} ` : ''}{video.year}
                      </time>
                      <a
                        href={video.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                      >
                        Ver en YouTube <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
          {filteredVideos.length > 0 && (
            <p className="mt-8 text-sm text-slate-500 text-center">
              Mostrando {filteredVideos.length} de {videos.length} videos
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Videos

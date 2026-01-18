// Iconos SVG simples
const DocumentIcon = () => (
  <svg className="size-5 flex-none text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

const InformationIcon = () => (
  <svg className="size-5 flex-none text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
)

const AcademicCapIcon = () => (
  <svg className="size-5 flex-none text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15" />
  </svg>
)

const features = [
  {
    name: '¿Qué es el CRAMA?',
    description:
      'El Comité de Recertificación de la AMA (CRAMA) se creó en 1994 para organizar la recertificación de médicos especialistas. Es un proceso voluntario y periódico que evalúa la capacitación médica continua.',
    href: 'https://www.ama-med.org.ar/recertificacion',
    icon: InformationIcon,
  },
  {
    name: 'Requisitos y formularios',
    description:
      'Accedé a toda la documentación necesaria para iniciar tu proceso de recertificación. Encontrá los requisitos, formularios de inscripción y toda la información sobre el trámite.',
    href: 'http://www.ama-med.org.ar/page/Recertificacion-Requisitos_y_Formularios',
    icon: DocumentIcon,
  },
  {
    name: 'Especialidades reconocidas',
    description:
      'Consultá el listado completo de especialidades reconocidas por el Ministerio de Salud de la Nación que son evaluadas por el comité CRAMA. La recertificación está disponible para todas las especialidades médicas.',
    href: 'https://www.ama-med.org.ar/recertificacion',
    icon: AcademicCapIcon,
  },
]

const Recertificacion = () => (
  <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-primary-600">Recertificación y avales</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl lg:text-balance">
          Todo lo que necesitás saber sobre recertificación
        </p>
        <p className="mt-6 text-lg/8 text-slate-600">
          La recertificación médica es un proceso de evaluación de la capacitación médica continua, 
          destinado a asegurar a los usuarios de los distintos sistemas de salud la calidad de las prestaciones. 
          Es un acto voluntario y periódico donde tus pares evalúan tu trabajo y cualidades ético-morales.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-slate-900">
                <feature.icon aria-hidden="true" />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base/7 text-slate-600">
                <p className="flex-auto">{feature.description}</p>
                <p className="mt-6">
                  <a
                    href={feature.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm/6 font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Más información <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
)

export default Recertificacion

import sesionesImage from '../assets/secciones/servicios_sesiones_cientificas.png'
import cursoImage from '../assets/cursos/2026_Curso_Neumo.jpg'

const features = [
  {
    name: 'Curso virtual',
    description: 'Modalidad online para que puedas acceder desde cualquier lugar. Inscripción únicamente online.',
  },
  {
    name: 'Ciclo completo',
    description: 'Semanal del 5 de marzo al 4 de junio de 2026. Sesiones regulares para un aprendizaje continuo.',
  },
  {
    name: 'Docentes destacados',
    description: 'Dictado por reconocidos profesores y especialistas de la Sociedad Argentina de Neumonología.',
  },
  {
    name: 'Del especialista a la atención primaria',
    description: 'Enfoque integral que abarca desde la atención especializada hasta la práctica en atención primaria.',
  },
]

const SesionesCientificas = () => {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt="Sesiones científicas de Neumonología"
          src={sesionesImage}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-300 to-primary-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-slate-600 ring-1 ring-slate-900/10 hover:ring-slate-900/20">
                Ciclo anual 2026
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-slate-900 sm:text-7xl">
                Sesiones científicas
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-slate-600 sm:text-xl/8">
                Ciclo anual de ateneos y presentaciones clínicas para especialistas en neumonología. 
                Compartimos conocimientos, casos clínicos y avances en el campo de la salud respiratoria.
              </p>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-300 to-primary-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Course Features Section */}
      <section aria-labelledby="course-heading" className="relative mt-16 sm:mt-24">
        <img
          alt="Curso Intensivo de Neumonología 2026"
          src={cursoImage}
          className="aspect-3/2 w-full object-cover sm:aspect-5/2 lg:absolute lg:aspect-auto lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16"
        />
        <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <h2 id="course-heading" className="font-medium text-primary-600">
              Curso Intensivo de Neumonología 2026
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Formación continua especializada</p>
            <p className="mt-4 text-slate-600">
              Programa diseñado para profesionales que buscan profundizar sus conocimientos en neumonología, 
              con un enfoque integral desde la atención especializada hasta la práctica clínica.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-semibold text-slate-900">{feature.name}</dt>
                  <dd className="mt-2 text-slate-600">{feature.description}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <a 
                href="https://www.ama-med.org.ar/especialidades/detalleCurso/588" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Inscribirse
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SesionesCientificas

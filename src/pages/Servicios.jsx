import { Link } from 'react-router-dom'

const links = [
  { href: '/servicios/sesiones-cientificas', label: 'Sesiones científicas' },
  { href: '/servicios/recertificacion', label: 'Recertificación' },
  { href: '/servicios/guias-consensos', label: 'Guías y consensos' },
  { href: '/servicios/articulos-interes', label: 'Artículos de interés' },
  { href: '/servicios/cursos-congresos', label: 'Cursos y congresos' },
]

const Servicios = () => (
  <div className="space-y-6">
    <header className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Servicios</p>
      <h1 className="text-3xl font-semibold text-slate-900">Conectamos la comunidad SAN</h1>
      <p className="text-sm text-slate-700">
        Punto de acceso a las secciones de servicios: sesiones científicas, recertificación, guías, artículos y agenda académica.
      </p>
    </header>

    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white/80 p-4 text-primary-800 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md"
        >
          <p className="text-base font-semibold text-slate-900">{item.label}</p>
          <span className="text-sm">Ir a la sección</span>
        </Link>
      ))}
    </div>
  </div>
)

export default Servicios

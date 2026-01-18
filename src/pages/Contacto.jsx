const enlaces = [
  { label: 'Asociación Médica Argentina (AMA)', href: 'http://www.ama-med.org.ar' },
  { label: 'UATA — Unión Antitabáquica Argentina', href: 'http://www.uata.org.ar' },
  { label: 'ALAT — Asociación Latinoamericana del Tórax', href: 'http://www.alatorax.org/' },
  { label: 'The Union', href: 'http://www.theunion.org/' },
]

const Contacto = () => (
  <div className="space-y-8">
    <header className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Contacto</p>
      <h1 className="text-3xl font-semibold text-slate-900">Canales oficiales</h1>
      <p className="text-sm text-slate-700">Escríbenos para convenios, actividades o consultas institucionales.</p>
    </header>

    <section className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Datos de contacto</h2>
        <p className="mt-2 text-sm text-slate-700">Sociedad Argentina de Neumonología</p>
        <p className="text-sm text-slate-700">Buenos Aires, Argentina</p>
        <a
          href="mailto:secretaria@neumo-argentina.org"
          className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-primary-700"
        >
          secretaria@neumo-argentina.org
        </a>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Enlaces útiles</h2>
        <ul className="mt-3 space-y-2 text-sm text-primary-800">
          {enlaces.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer" className="font-semibold underline-offset-4 hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
)

export default Contacto

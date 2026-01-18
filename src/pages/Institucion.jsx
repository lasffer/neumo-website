const timeline = [
  { year: '1891', title: 'Nace la AMA', desc: 'Se crea la Sociedad Médica Argentina; base institucional de la SAN.' },
  { year: '1918', title: 'Edificio y expansión', desc: 'Se inaugura la sede de Av. Santa Fe y crecen las actividades científicas.' },
  { year: '1925', title: 'Ingreso a la AMA', desc: 'La Sociedad de Tisiología pasa a ser Sociedad Argentina de Tisiología dentro de la AMA.' },
  { year: '1953', title: 'Patología torácica', desc: 'Nuevo nombre: Sociedad Argentina de Tisiología y Patología Torácica.' },
  { year: '1993', title: 'Sociedad Argentina de Neumonología', desc: 'La denominación actual acompaña el avance tecnológico y las subespecialidades.' },
  { year: '1994', title: 'CRAMA', desc: 'La AMA lanza la recertificación voluntaria cada 5 años con Juntas de Evaluación.' },
  { year: 'Homenajes', title: 'Cetrángolo y Bracco', desc: 'Conferencia anual Cetrángolo y premios clínico-quirúrgicos e infecciosos.' },
  { year: 'Presente', title: 'Gestión ampliada', desc: 'Comisión Directiva con mandatos de dos años para profundizar proyectos.' },
]

const Institucion = () => (
  <div className="space-y-8">
    <header className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Institución</p>
      <h1 className="text-3xl font-semibold text-slate-900">Sociedad Argentina de Neumonología</h1>
      <p className="text-sm text-slate-700">
        Entidad científica sin fines de lucro, miembro de la Asociación Médica Argentina. Desde 1918 trabajamos
        para la formación continua, los consensos clínicos y la articulación federal con sociedades amigas.
      </p>
    </header>

    <section className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Historia</h2>
      <div className="mt-4 space-y-4">
        {timeline.map((item, idx) => (
          <div key={item.title} className="grid grid-cols-[80px,1fr] gap-3">
            <div className="text-xs font-semibold text-primary-700">{item.year}</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Misión y enfoque</h2>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        <li>• Formar y acompañar a profesionales en neumonología con programas federales.</li>
        <li>• Avalar consensos y guías clínicas junto a la comunidad científica.</li>
        <li>• Articular con sociedades amigas y redes internacionales de neumología.</li>
      </ul>
    </section>
  </div>
)

export default Institucion

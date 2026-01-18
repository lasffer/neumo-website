import presidenteImage from '../assets/autoridades/boccia_23.jpg'
import secretarioImage from '../assets/autoridades/secretario_23.jpg'

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

    <section className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Autoridades</h2>
      <div className="mt-4 space-y-8">
        {/* Período 2023-2026 */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-2">
            <h3 className="text-base font-semibold text-slate-900">Período 2023-2026</h3>
          </div>
          
          <div className="space-y-4 pl-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ EJECUTIVO</h4>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex flex-col items-center">
                    <img
                      src={presidenteImage}
                      alt="Dr. Carlos Mario Boccia - Presidente"
                      className="h-48 w-auto rounded-lg object-cover shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-slate-700">
                      <span className="font-semibold text-primary-700">PRESIDENTE:</span><br />
                      Dr. Carlos Mario Boccia
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-col items-center">
                    <img
                      src={secretarioImage}
                      alt="Dr. Emiliano Bastidas Zubiaga - Secretario General"
                      className="h-48 w-auto rounded-lg object-cover shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-slate-700">
                      <span className="font-semibold text-primary-700">SECRETARIO GENERAL:</span><br />
                      Dr. Emiliano Bastidas Zubiaga
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-1 text-sm text-slate-700">
                <p className="mt-2 font-semibold">VOCALES:</p>
                <div className="ml-4 space-y-1 text-slate-600">
                  <p>Dr. Mariano Díaz</p>
                  <p>Dr. Nicolás Casco</p>
                  <p>Dr. César Salomone</p>
                  <p>Dr. Mariano Mazzei</p>
                  <p>Dr. Santiago Abad</p>
                  <p>Dr. Miguel Zappia</p>
                  <p>Dra. Mariana Rivera</p>
                  <p>Dr. Guillermo Kneeteman</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ CIENTÍFICO</h4>
              <div className="ml-4 space-y-1 text-sm text-slate-600">
                <p>Prof. Dr. Pablo González Montaner</p>
                <p>Prof. Dr. Roberto Duré</p>
                <p>Dr. Antonio Sancineto</p>
                <p>Prof. Dra. María Cristina De Salvo</p>
                <p>Prof. Dr. Carlos Mosca</p>
                <p>Dr. Marcelo Guerra</p>
                <p>Dr. Gustavo Bondulich</p>
                <p>Dr. Ricardo Isidoro</p>
                <p>Dr. Marcelo Debais</p>
                <p>Prof. Dr. José San Román</p>
                <p>Dr. Gustavo Parrilla</p>
                <p>Dr. César Sáenz</p>
                <p>Dr. Alexis Doresky</p>
                <p>Dr. Rodrigo Gasteneguy</p>
                <p>Prof. Dr. Domingo Palmero</p>
                <p>Prof. Dr. Jorge Osvaldo Cáneva</p>
              </div>
            </div>
          </div>
        </div>

        {/* Período 2020-2021 */}
        <div className="space-y-4 border-t border-slate-200 pt-6">
          <div className="border-b border-slate-200 pb-2">
            <h3 className="text-base font-semibold text-slate-900">Período 2020-2021</h3>
          </div>
          
          <div className="space-y-4 pl-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ EJECUTIVO</h4>
              <div className="space-y-1 text-sm text-slate-700">
                <p><span className="font-semibold">PRESIDENTE:</span> Dr. Abel Esteban Bordón</p>
                <p><span className="font-semibold">SECRETARIO:</span> Dr. Alberto J. Levi</p>
                <p><span className="font-semibold">SECRETARIO DE ACTAS:</span> Dr. Emiliano Bastidas</p>
                <p><span className="font-semibold">RELACIONES INSTITUCIONALES:</span> Prof. Dr. Vicente Donato</p>
                <p className="mt-2 font-semibold">VOCALES:</p>
                <div className="ml-4 space-y-1 text-slate-600">
                  <p>Dra. Mariana Rivera</p>
                  <p>Dr. Pablo Alexis Doreski</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ CIENTÍFICO</h4>
              <div className="space-y-1 text-sm text-slate-700">
                <p><span className="font-semibold">Presidente:</span> Prof. Dr. Carlos Mario Boccia</p>
              </div>
              <div className="ml-4 mt-2 space-y-1 text-sm text-slate-600">
                <p>Prof. Dra. María Cristina De Salvo</p>
                <p>Prof. Dr. Domingo Palmero</p>
                <p>Dr. José María Leston</p>
                <p>Dr. Marcelo Oscar Guerra</p>
                <p>Dr. Gustavo Bondulich</p>
                <p>Dr. César Sáenz</p>
                <p>Dr. Gustavo Parrilla</p>
                <p>Dr. Antonio Sancineto</p>
                <p>Prof. Dr. Carlos Mosca</p>
                <p>Dr. Ricardo Isidoro</p>
                <p>Dr. Marcelo Debais</p>
                <p>Dra. Claudia Bagnes</p>
                <p>Dr. Pablo González Montaner</p>
                <p>Dr. Rodrigo Gasteneguy</p>
                <p>Dr. Mariano Díaz</p>
              </div>
            </div>
          </div>
        </div>

        {/* Período 2018-2019 */}
        <div className="space-y-4 border-t border-slate-200 pt-6">
          <div className="border-b border-slate-200 pb-2">
            <h3 className="text-base font-semibold text-slate-900">Período 2018-2019</h3>
          </div>
          
          <div className="space-y-4 pl-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ EJECUTIVO</h4>
              <div className="space-y-1 text-sm text-slate-700">
                <p><span className="font-semibold">PRESIDENTE:</span> Dr. Omar Aidar</p>
                <p><span className="font-semibold">SECRETARIO:</span> Dr. Abel Bordón</p>
                <p><span className="font-semibold">TESORERO:</span> Dr. Gustavo Parrilla</p>
                <p><span className="font-semibold">SECRETARIO DE ACTAS:</span> Dr. Alberto Levi</p>
                <p><span className="font-semibold">RELACIONES INSTITUCIONALES:</span> Prof. Dr. Vicente Donato</p>
                <p className="mt-2 font-semibold">VOCALES:</p>
                <div className="ml-4 space-y-1 text-slate-600">
                  <p>Dra. Mariana Rivera Quiñones</p>
                  <p>Dra. Marisa Gutiérrez</p>
                  <p>Dr. Pablo Alexis Doreski</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ CIENTÍFICO</h4>
              <div className="ml-4 space-y-1 text-sm text-slate-600">
                <p>Prof. Dra. María Cristina De Salvo</p>
                <p>Dr. Carlos Mario Boccia</p>
                <p>Prof. Dr. Domingo Palmero</p>
                <p>Dr. José María Leston</p>
                <p>Dr. Marcelo Oscar Guerra</p>
                <p>Dr. Gustavo Bondulich</p>
                <p>Dr. César Sáenz</p>
                <p>Dr. Antonio Sancineto</p>
                <p>Prof. Dr. Carlos Mosca</p>
                <p>Dr. Ricardo Isidoro</p>
                <p>Dr. Marcelo Debais</p>
                <p>Prof. Dr. Juan Manuel Campana</p>
                <p>Dra. Claudia Bagnes</p>
                <p>Dr. Pablo González Montaner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Período 2016-2017 */}
        <div className="space-y-4 border-t border-slate-200 pt-6">
          <div className="border-b border-slate-200 pb-2">
            <h3 className="text-base font-semibold text-slate-900">Período 2016-2017</h3>
          </div>
          
          <div className="space-y-4 pl-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ EJECUTIVO</h4>
              <div className="space-y-1 text-sm text-slate-700">
                <p><span className="font-semibold">PRESIDENTE:</span> Dr. Carlos Mario Boccia</p>
                <p><span className="font-semibold">VICEPRESIDENTE:</span> Dr. Omar Aidar</p>
                <p><span className="font-semibold">SECRETARIO:</span> Dr. Abel Bordón</p>
                <p><span className="font-semibold">TESORERO:</span> Dr. Pablo Alexis Doreski</p>
                <p><span className="font-semibold">SECRETARIO DE ACTAS:</span> Dr. Alberto Levi</p>
                <p><span className="font-semibold">RELACIONES INSTITUCIONALES:</span> Prof. Dr. Vicente Donato</p>
                <p className="mt-2 font-semibold">VOCALES:</p>
                <div className="ml-4 space-y-1 text-slate-600">
                  <p>Dra. Mariana Rivera Quiñones</p>
                  <p>Dra. Marisa Gutiérrez</p>
                  <p>Dr. Gustavo Parrilla</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ CIENTÍFICO</h4>
              <div className="ml-4 space-y-1 text-sm text-slate-600">
                <p>Prof. Dra. María Cristina De Salvo</p>
                <p>Prof. Dr. Emilio Santabaya</p>
                <p>Prof. Dr. Domingo Palmero</p>
                <p>Dr. José María Leston</p>
                <p>Dr. Marcelo Oscar Guerra</p>
                <p>Dr. Gustavo Bondulich</p>
                <p>Dr. César Sáenz</p>
                <p>Dr. Antonio Sancineto</p>
                <p>Prof. Dr. Carlos Mosca</p>
                <p>Dr. Ricardo Isidoro</p>
                <p>Dr. Marcelo Debais</p>
                <p>Prof. Dr. Juan Manuel Campana</p>
                <p>Dra. Claudia Bagnes</p>
                <p>Dr. Pablo González Montaner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Período 2014-2015 */}
        <div className="space-y-4 border-t border-slate-200 pt-6">
          <div className="border-b border-slate-200 pb-2">
            <h3 className="text-base font-semibold text-slate-900">Período 2014-2015</h3>
          </div>
          
          <div className="space-y-4 pl-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ EJECUTIVO</h4>
              <div className="space-y-1 text-sm text-slate-700">
                <p><span className="font-semibold">PRESIDENTE:</span> Dr. Carlos Mario Boccia</p>
                <p><span className="font-semibold">SECRETARIA:</span> Dra. Marisa Gutiérrez</p>
                <p><span className="font-semibold">TESORERO:</span> Dr. Pablo Alexis Doreski</p>
                <p><span className="font-semibold">SECRETARIA DE ACTAS:</span> Dra. Mariana Rivera Quiñones</p>
                <p><span className="font-semibold">RELACIONES INSTITUCIONALES:</span> Prof. Dr. Vicente Donato</p>
                <p className="mt-2 font-semibold">VOCALES:</p>
                <div className="ml-4 space-y-1 text-slate-600">
                  <p>Dr. Carlos Arturo Mansilla</p>
                  <p>Dr. Angel Gorreri</p>
                  <p>Dr. Abel Bordón</p>
                  <p>Dr. José Luis Reggiani</p>
                  <p>Dr. Jorge Poliak</p>
                  <p>Dra. Ana Gamberale</p>
                </div>
                <p className="mt-2 font-semibold">VOCALES SUPLENTES:</p>
                <div className="ml-4 space-y-1 text-slate-600">
                  <p>Dra. Analía Casuso</p>
                  <p>Dr. Fabián Klapouszko</p>
                  <p>Dr. Gustavo Parrilla</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ CIENTÍFICO</h4>
              <div className="ml-4 space-y-1 text-sm text-slate-600">
                <p>Prof. Dra. María Cristina De Salvo</p>
                <p>Prof. Dr. Emilio Santabaya</p>
                <p>Dr. José María Leston</p>
                <p>Prof. Dr. Isidoro Hasper</p>
                <p>Dr. Marcelo Oscar Guerra</p>
                <p>Dr. Gustavo Bondulich</p>
                <p>Dr. Miguel Feola</p>
                <p>Dr. César Sáenz</p>
                <p>Prof. Dr. Domingo Palmero</p>
                <p>Dr. Antonio Sancineto</p>
                <p>Dr. Carlos Mosca</p>
                <p>Dr. Ricardo Isidoro</p>
                <p>Dr. Marcelo Debais</p>
                <p>Prof. Dr. Juan Manuel Campana</p>
                <p>Dra. Claudia Bagnes</p>
                <p>Dr. Pablo González Montaner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Período 2012-2013 */}
        <div className="space-y-4 border-t border-slate-200 pt-6">
          <div className="border-b border-slate-200 pb-2">
            <h3 className="text-base font-semibold text-slate-900">Período 2012-2013</h3>
          </div>
          
          <div className="space-y-4 pl-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ EJECUTIVO</h4>
              <div className="space-y-1 text-sm text-slate-700">
                <p><span className="font-semibold">PRESIDENTE:</span> Dr. Carlos Mario Boccia</p>
                <p><span className="font-semibold">VICEPRESIDENTE:</span> Dr. Miguel Feola</p>
                <p><span className="font-semibold">SECRETARIA:</span> Dra. Marisa Gutiérrez</p>
                <p><span className="font-semibold">TESORERO:</span> Dr. José María Leston</p>
                <p><span className="font-semibold">PROTESORERO:</span> Dr. Pablo Alexis Doreski</p>
                <p><span className="font-semibold">SECRETARIA DE ACTAS:</span> Dra. Mariana Rivera Quiñones</p>
                <p className="mt-2 font-semibold">VOCALES:</p>
                <div className="ml-4 space-y-1 text-slate-600">
                  <p>Dra. Ana María Gamberale</p>
                  <p>Dra. Analía Casuso</p>
                  <p>Dr. Angel Gorreri</p>
                  <p>Dr. Carlos Arturo Mansilla</p>
                  <p>Dr. Ramiro Rojas</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="mb-2 text-sm font-semibold text-primary-700">COMITÉ CIENTÍFICO</h4>
              <div className="ml-4 space-y-1 text-sm text-slate-600">
                <p>Prof. Dra. María Cristina De Salvo</p>
                <p>Prof. Dr. Domingo Palmero</p>
                <p>Prof. Dr. Emilio Santabaya</p>
                <p>Prof. Dr. Vicente Donato</p>
                <p>Prof. Dr. Isidoro Hasper</p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="mb-2 text-sm font-semibold text-primary-700">Conferencia Prof. Dr. Antonio Cetrángolo</h4>
              <div className="space-y-1 text-sm text-slate-700">
                <p><span className="font-semibold">Secretario:</span> Prof. Dr. Juan Manuel Campana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Institucion

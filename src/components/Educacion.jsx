const formacion = [
  {
    titulo: 'Licenciatura en Psicología',
    institucion: 'Universidad de la República del Uruguay (UDELAR)',
    descripcion:
      'Este documento corresponde a mi trabajo final de grado en la Licenciatura en Psicología (UDELAR), presentado en formato monográfico. En él se aborda la relevancia de las formaciones subjetivas en el siglo XXI, explorando cómo las disrupciones tecnológicas han transformado el acceso, la circulación y la gestión de la información en la vida cotidiana. A través de una revisión crítica del fenómeno del big data y sus implicancias en la comunicación humana, se reflexiona sobre los mecanismos de consentimiento digital, los algoritmos que modelan el comportamiento y las renuncias implícitas que acompañan el uso de plataformas contemporáneas. Esta tesis invita al lector a pensar el vínculo entre subjetividad, vigilancia y mercado en el contexto de la digitalización global.',
    periodo: '2015 – 2022',
    tesisUrl: 'https://hdl.handle.net/20.500.12008/36257',
    logo: '/Logo_UDELAR.jpg',
  },
  {
    titulo: 'Analísta en técnologías de la Información - En curso',
    institucion: 'Universidad ORT - Facultad de Ingeñeria',
    descripcion:
  'Formación en curso en la Facultad de Ingeniería de la Universidad ORT, enfocada en el desarrollo de soluciones digitales modernas. El programa combina fundamentos sólidos en programación, arquitectura de sistemas y gestión de proyectos.',
    periodo: '2021 – Actualdiad',
    logo: '/logo_ort.png',
  },
  {
    titulo: 'Desarrollador Full Stack',
    institucion: 'Coderhouse - Argentina  ',
    descripcion:
      'Desarrollo con FullStack en arquitectura MERM. Backend con sólida Autentificación y testing. Aplicacion a MongoDb desde Moongose ',
    periodo: '2022 – 2025',
    logo: '/logo_Coderhouse.png',
  },
    {
    titulo: 'Jóvenes a Programar',
    institucion: 'CEIBAL ',
    descripcion:
      'He cursado los dos años especiacizandome en testing de software',
    periodo: '2023 – 2024',
    logo: '/logoJap.png',
  }
]

const Educacion = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-zinc-100 via-neutral-100 to-zinc-100 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto px-6 xl:px-12">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-800 dark:text-white">
          Formación académica
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {formacion.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 border border-slate-300 dark:border-slate-700"
            >
              {item.logo && (
                <img
                  src={item.logo}
                  alt={`Logo de ${item.institucion}`}
className="w-28 h-28 rounded-full mx-auto mb-6 object-contain animate-fadeInUp"                />
              )}

              <h3 className="text-xl font-semibold mb-2 text-primary dark:text-yellow-300">
                {item.titulo}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                <strong>{item.institucion}</strong>
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {item.descripcion}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                {item.periodo}
              </p>

              {item.tesisUrl && (
                <a
                  href={item.tesisUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200"
                >
                  Ver tesis →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Educacion
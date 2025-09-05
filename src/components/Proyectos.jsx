const proyectos = [
  {
    titulo: 'JS Vanilla',
    descripcion: 'Proyecto correspociende al obligatorio de P1 en la Unviersidad ORT Uruguay. Prradigma de orientación a objetos, En esta versión he añadido dependencias para uso resposivo .',
    tecnologias: ['JS Vanilla', 'Vite', 'Tailwind'],
    enlace: 'https://tuportfolio.com/landing-react',
  },
  {
    titulo: 'Ecommerce ',
    descripcion: 'Proyecto final desarrollo front end. Coderhouse - Argentina. Proyecto en React JS con backend en firebase',
    tecnologias: ['React JS','GitHub Actions', 'Firebase Hosting'],
    enlace: 'https://tuportfolio.com/workflow-ci',
  },
  {
    titulo: 'Sistema de documentación',
    descripcion: 'Plantilla escalable para requisitos técnicos en Markdown y Notion.',
    tecnologias: ['Markdown', 'Notion API'],
    enlace: 'https://tuportfolio.com/docs-system',
  },
]

const Proyectos = () => {
  return (
    <section className="w-full px-6 py-12 bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Proyectos destacados</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 border border-slate-300 dark:border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-2">{proyecto.titulo}</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">{proyecto.descripcion}</p>
              <ul className="flex flex-wrap gap-2 text-sm mb-4">
                {proyecto.tecnologias.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-yellow-200 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={proyecto.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-blue-600 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition"
              >
                Ver proyecto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
const stack = [
  { nombre: 'React', icono: <FaReact /> },
  { nombre: 'Vite', icono: '⚡' },
  { nombre: 'Tailwind CSS', icono: <RiTailwindCssFill /> },
  { nombre: 'Firebase', icono: '🔥' },
  { nombre: 'JS', icono: <FaJs /> },
  { nombre: 'MongoDB', icono: <SiMongodb /> },
  { nombre: 'Vite', icono: <SiVite /> },
  { nombre: 'GitHub', icono: <FaGithubSquare /> },
  { nombre: 'Node', icono: <FaNode /> },
  { nombre: 'SQL', icono: <SiMysql />},
]

const Stack = () => {
  return (
    <section className="w-full px-6 py-12 bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center">🧩 Stack tecnológico</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {stack.map(({ nombre, icono }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300 border border-slate-300 dark:border-slate-700 hover:border-yellow-300"
            >
              <div className="text-4xl mb-2" aria-label={nombre} role="img">
                {icono}
              </div>
              <span className="text-lg font-medium text-yellow-700 dark:text-yellow-300">
                {nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
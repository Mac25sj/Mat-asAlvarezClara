import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaHome,
  FaTools,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMoon,
  FaSun,
} from 'react-icons/fa'
import useTheme from '../ThemeContext/useTheme.js'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navLinks = [
    { label: 'Inicio', path: '/', icon: <FaHome /> },
    { label: 'Proyectos', path: '/proyectos', icon: <FaTools /> },
    { label: 'Contacto', path: '/contacto', icon: <FaEnvelope /> },
  ]

  return (
    <nav className="bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-white px-6 py-4 border-b border-slate-300 dark:border-yellow-300 transition-colors duration-500">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        <Link to="/" className="flex items-center gap-3 hover:text-yellow-500 dark:hover:text-yellow-300 transition">
          <img
            src="/logo.png"
            alt="Logo Matías"
            className="w-10 h-10 object-contain rounded-lg shadow-md"
          />
          <span className="text-2xl font-bold">Lic. Matías Álvarez Clara</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 items-center">
            {navLinks.map(({ label, path, icon }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="flex items-center gap-2 px-3 py-1 rounded hover:bg-yellow-300 hover:text-black transition"
                >
                  <span className="text-lg">{icon}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/Mac25sj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 dark:hover:text-yellow-300 transition"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mat%C3%ADas%C3%A1lvarezclara/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 dark:hover:text-yellow-300 transition"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://wa.me/598098695029"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 dark:hover:text-yellow-300 transition"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>

          <div className="pl-4">
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="text-xl hover:text-yellow-500 dark:hover:text-yellow-300 transition"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>

        <button
          aria-label="Abrir menú"
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, path }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="px-3 py-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-yellow-300 hover:text-black transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 items-center justify-center mt-2">
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 dark:hover:text-yellow-300 transition"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 dark:hover:text-yellow-300 transition"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://wa.me/598098695029"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 dark:hover:text-yellow-300 transition"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>

          <div className="flex justify-center mt-2">
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="text-xl hover:text-yellow-500 dark:hover:text-yellow-300 transition"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
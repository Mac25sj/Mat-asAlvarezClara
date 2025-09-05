import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white py-10 mt-auto transition-colors duration-500">
      <div className="mx-auto w-full max-w-screen-2xl px-6 xl:px-0 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        {/* Enlaces sociales */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="https://github.com/Mac25sj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="mailto:mac25sj@gmail.com"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200"
          >
            <MdEmail className="text-lg" />
            Correo
          </a>

          <a
            href="https://www.linkedin.com/in/mat%C3%ADas%C3%A1lvarezclara/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs opacity-80">
          &copy; {new Date().getFullYear()} Lic. Matías Álvarez Clara.
          <p className='flex justify-center'>Uruguay</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
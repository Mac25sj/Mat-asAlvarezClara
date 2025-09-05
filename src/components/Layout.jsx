import Navbar from '../components/navbar.jsx'
import Footer from '../components/Footer.jsx'
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Layout = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />

      <a
        href="https://wa.me/598098695029"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Ir arriba"
          className="fixed bottom-[88px] right-6 z-50 bg-slate-700 text-white p-4 rounded-full shadow-lg hover:bg-slate-800 transition transform hover:scale-105"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}


      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default Layout
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Stack from './components/Stack.jsx'
import Proyectos from './components/Proyectos.jsx'
import Layout from './components/Layout.jsx'
import { Footer } from 'flowbite-react'
import Contacto from './components/Contacto.jsx'
import Educacion from './components/Educacion.jsx'
function Home() {
  return (
    <>
      <Hero />
      <Educacion />
      <Stack />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/proyectos" element={<Layout><Proyectos /></Layout>} />
        <Route path="/contacto" element={<Layout><Contacto /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
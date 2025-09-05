import MyCarousel from '../components/Carousel.jsx'

const Hero = () => {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-gray-800 dark:to-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-500">
      <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row items-center gap-16">
        
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/img5.jpg"
            alt="Matías"
            className="w-52 h-52 rounded-full object-cover shadow-2xl border-4 border-slate-300 dark:border-white/10 mb-6 transition-all duration-500"
          />

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-snug animate-fadeInUp">
            Encantado de conocerte...
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg">
            Psicólogo clínico y desarrollador web especializado en React/Vite.
            Fusiono análisis humano con arquitectura digital para crear
            experiencias memorables.
          </p>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 italic">
            San José, Uruguay
          </p>
        </div>

        <div className="w-full md:w-[65%] xl:w-[70%] 2xl:w-[75%] flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-center md:text-left text-slate-700 dark:text-slate-100">
              Tecnologías usadas
            </h2>
          </div>

          <div className="w-full">
            <MyCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
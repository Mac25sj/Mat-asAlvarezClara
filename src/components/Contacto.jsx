import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_n29j6zl',
        'template_54xefa1',
        e.target,
        'KydjeftRrLkJuinin'
      )
      .then(() => {
        toast.success('Mensaje enviado correctamente ✉️')
        e.target.reset()
      })
      .catch(() => {
        toast.error('Hubo un error al enviar el mensaje 😓')
      })
  }

  return (
    <section className="w-full px-6 py-16 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
      <div className="mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-10">
          ¿Tenés una idea, proyecto o simplemente querés saludar? Completá el formulario y te responderé lo antes posible.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre" className="block mb-2 text-sm font-medium">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block mb-2 text-sm font-medium">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacto
import { useEffect, useState } from 'react'

export default function OrderModal({ open, onClose }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      setVisible(true)
      return undefined
    }

    const timer = setTimeout(() => setVisible(false), 500)
    return () => clearTimeout(timer)
  }, [open])

  if (!open && !visible) return null

  const handleClose = () => {
    onClose()
  }

  return (
    <section
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 transition-opacity duration-500 ${
        open ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        type="button"
        className="fixed top-0 left-0 w-full h-full bg-theOneBlack opacity-50"
        onClick={handleClose}
        aria-label="Cerrar"
      />
      <div className="relative flex flex-col max-w-[90%] md:w-[850px] border-2 border-theOneBlack bg-theOneWhite z-20">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 md:right-8 md:top-8 group"
          aria-label="Cerrar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              className="fill-theOneBlack group-hover:fill-theOneRed"
              d="M5.6 20L4 18.4L10.4 12L4 5.6L5.6 4L12 10.4L18.4 4L20 5.6L13.6 12L20 18.4L18.4 20L12 13.6L5.6 20Z"
            />
          </svg>
        </button>
        <div className="flex flex-col p-4 md:p-8">
          <p className="text-2xl md:text-4xl font-bold mb-6">
            ¿Ganas de <span className="text-theOneRed">TheOne.</span>?
          </p>
          <div className="text-lg md:text-2xl flex flex-col gap-4 font-kunst-regular text-theOneGray">
            <p>
              De momento no se ha lanzado el producto, este es un prototipo que hemos preparado desde la
              agencia{' '}
              <a
                target="_blank"
                href="https://www.byfugu.com/"
                rel="noreferrer"
                className="underline hover:text-theOneRed duration-300 text-theOneBlack"
              >
                byfugu.com
              </a>{' '}
              para nuestro cliente.
            </p>
            <p>
              Con él, estamos comprobando gradualmente si todo funciona como esperamos.{' '}
              <a
                target="_blank"
                href="https://www.byfugu.com/work/theoneburger"
                rel="noreferrer"
                className="underline hover:text-theOneRed duration-300 text-theOneBlack"
              >
                Visita nuestra web
              </a>{' '}
              para ver el resto del proyecto
            </p>
            <p>
              Cuando salga TheOne. definitivamente, avisaremos de su ubicación y web a través de nuestro{' '}
              <a
                target="_blank"
                href="https://www.instagram.com/wearefugu/"
                rel="noreferrer"
                className="underline hover:text-theOneRed duration-300 text-theOneBlack"
              >
                Instagram
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex border-t-2 border-theOneBlack text-xl md:text-3xl font-medium md:h-20 h-11">
          <button
            type="button"
            className="flex w-1/2 py-1 pr-1 md:py-3 md:pr-3 md:pl-12 pl-3 justify-end items-end hover:bg-theOneRed hover:text-theOneWhite duration-300 border-r border-theOneBlack"
            onClick={handleClose}
          >
            Entendido!
          </button>
          <a
            target="_blank"
            href="https://www.byfugu.com/"
            rel="noreferrer"
            className="flex w-1/2 py-1 pr-1 md:py-3 md:pr-3 md:pl-12 pl-3 justify-end items-end bg-theOneBlack text-theOneWhite duration-300 hover:text-theOneRed border-l border-theOneBlack whitespace-nowrap"
          >
            byfugu.com
          </a>
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { AcademicCapIcon, XMarkIcon } from '@heroicons/react/24/outline'
import cursoImage from '../assets/cursos/2026_Curso_Neumo.jpg'

const CourseModal = () => {
  const [open, setOpen] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    // Verificar si el usuario marcó "No mostrar más" y si han pasado 7 días
    const dontShowUntil = localStorage.getItem('cursoModalDontShowUntil')
    
    if (dontShowUntil) {
      const dontShowDate = new Date(dontShowUntil)
      const now = new Date()
      
      // Si aún no han pasado 7 días, no mostrar el modal
      if (now < dontShowDate) {
        return
      } else {
        // Si ya pasaron 7 días, limpiar el localStorage para volver a mostrar
        localStorage.removeItem('cursoModalDontShowUntil')
      }
    }
    
    // Mostrar el modal después de un pequeño delay
    const timer = setTimeout(() => {
      setOpen(true)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setOpen(false)
    
    // Si el usuario marcó "No mostrar más", guardar la fecha (7 días desde ahora)
    if (dontShowAgain) {
      const dontShowDate = new Date()
      dontShowDate.setDate(dontShowDate.getDate() + 7)
      localStorage.setItem('cursoModalDontShowUntil', dontShowDate.toISOString())
    }
  }

  const handleInscribirse = () => {
    // Abrir el link de inscripción en una nueva pestaña
    window.open('https://www.ama-med.org.ar/especialidades/detalleCurso/588', '_blank', 'noopener,noreferrer')
    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-900/50"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="absolute right-0 top-0 pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="sr-only">Cerrar</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10">
                <AcademicCapIcon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                  Curso Intensivo de Neumonología 2026
                </DialogTitle>
                <div className="mt-4">
                  <img
                    src={cursoImage}
                    alt="Curso Intensivo de Neumonología 2026"
                    className="w-full rounded-lg object-cover"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-900">Formación continua especializada</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    Programa diseñado para profesionales que buscan profundizar sus conocimientos en neumonología, 
                    con un enfoque integral desde la atención especializada hasta la práctica clínica.
                  </p>
                  <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                    <div>
                      <p className="font-semibold text-gray-900">Modalidad:</p>
                      <p className="text-gray-600">Curso virtual online</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Duración:</p>
                      <p className="text-gray-600">5 de marzo al 4 de junio de 2026</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Frecuencia:</p>
                      <p className="text-gray-600">Sesiones semanales</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Docentes:</p>
                      <p className="text-gray-600">Especialistas de la SAN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <div className="mb-4 flex items-center">
                <input
                  id="dont-show-again"
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor="dont-show-again" className="ml-2 text-sm text-gray-600">
                  No mostrar más durante 7 días
                </label>
              </div>
              <div className="sm:flex sm:flex-row-reverse sm:gap-3">
                <button
                  type="button"
                  onClick={handleInscribirse}
                  className="inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:w-auto"
                >
                  Inscribirse ahora
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Más tarde
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default CourseModal

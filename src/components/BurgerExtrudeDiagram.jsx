import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useDevice from '../hooks/useDevice'

gsap.registerPlugin(ScrollTrigger)

export default function BurgerExtrudeDiagram() {
  const { isMobile, isTablet } = useDevice()
  const videoRef = useRef(null)
  const resizeTimerRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    const trigger = ScrollTrigger.create({
      trigger: video.parentElement,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => {
        video.currentTime = 0
        video.play()
      },
      onEnterBack: () => {
        video.currentTime = 0
        video.play()
      },
    })

    const onResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current)
      video.pause()
      resizeTimerRef.current = setTimeout(() => trigger.refresh(), 200)
    }

    window.addEventListener('resize', onResize)

    return () => {
      trigger.kill()
      window.removeEventListener('resize', onResize)
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.src =
      isMobile || isTablet
        ? '/videos/TheOne_Web_SeparatedBurger_MOVIL_v02.mp4'
        : '/videos/TheOne_Web_SeparatedBurger_v03.mp4'
    video.currentTime = 0
    video.load()
  }, [isMobile, isTablet])

  return (
    <section className="w-screen max-w-full flex flex-col justify-center border-2 border-theOneBlack mb-36 md:mb-40">
      <div className="w-full flex justify-end border-b-2 border-theOneBlack overflow-hidden">
        <div className="w-full flex px-4 md:px-14 py-5 items-end justify-end min-h-[120px] sm:min-h-[160px] md:min-h-[180px] overflow-hidden">
          <h2 className="inline-block w-max max-w-full text-left font-kunst-medium pt-2 leading-none text-[clamp(48px,6vw,180px)]">
            SENCILLA, DIRECTA, COMO TIENE QUE SER.
          </h2>
        </div>
      </div>
      <div className="w-full h-full justify-center flex overflow-hidden">
        <video
          ref={videoRef}
          className="object-cover filter brightness-[0.995] w-full"
          playsInline
          preload="auto"
          disableRemotePlayback
          muted
        />
      </div>
    </section>
  )
}

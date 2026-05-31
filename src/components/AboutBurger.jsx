import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useDevice, { getRunningTextScrollConfig } from '../hooks/useDevice'

gsap.registerPlugin(ScrollTrigger)

function TicketAnimationMobile() {
  return (
    <section className="overflow-hidden">
      <div className="w-full h-full">
        <video
          className="w-full object-cover filter brightness-[0.995]"
          playsInline
          preload="auto"
          loop
          autoPlay
          muted
          disableRemotePlayback
        >
          <source src="/videos/TheOne_Web_Etiqueta_MOVIL60fps_002.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

function TicketAnimationDesktop({ scrollReady }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !scrollReady) return undefined

    let trigger

    const attach = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return

      trigger?.kill()
      video.pause()
      video.currentTime = 0

      trigger = ScrollTrigger.create({
        trigger: video,
        start: 'center bottom',
        end: '+=500',
        scrub: true,
        onUpdate: (self) => {
          const time = self.progress * video.duration
          if (Number.isFinite(time)) video.currentTime = time
        },
      })

      ScrollTrigger.refresh()
    }

    if (video.readyState >= 1) {
      attach()
    } else {
      video.addEventListener('loadedmetadata', attach, { once: true })
    }

    return () => {
      video.removeEventListener('loadedmetadata', attach)
      trigger?.kill()
    }
  }, [scrollReady])

  return (
    <section className="overflow-hidden">
      <div className="w-full h-fit">
        <video
          ref={videoRef}
          className="w-full h-full object-cover filter brightness-[0.995]"
          playsInline
          preload="auto"
          muted
          disableRemotePlayback
        >
          <source
            src="/videos/TheOne_Web_Etiqueta_Desktop_002_Converted.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  )
}

function RunningText() {
  const headingRef = useRef(null)

  useEffect(() => {
    const heading = headingRef.current
    if (!heading) return undefined

    const applyConfig = () => getRunningTextScrollConfig(window.innerWidth)
    let { start, x } = applyConfig()

    const tween = gsap.to(heading, {
      scrollTrigger: {
        trigger: heading,
        start,
        end: '80%',
        scrub: true,
      },
      x,
    })

    const onResize = () => {
      const cfg = applyConfig()
      start = cfg.start
      x = cfg.x
      tween.scrollTrigger.start = start
      tween.vars.x = x
      tween.scrollTrigger.refresh()
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <section id="aboutBurger">
      <div className="p-4 full whitespace-nowrap overflow-hidden">
        <h2
          ref={headingRef}
          className="text-4xl md:text-7xl 2xl:text-8xl font-kunst-medium translate-x-[100%]"
        >
          HAY UNA THE ONE PARA TOOO0000OO0ODO EL MUNDO.
        </h2>
      </div>
    </section>
  )
}

export default function AboutBurger({ scrollReady = true }) {
  const { isMobile, isTablet } = useDevice()

  return (
    <>
      {isMobile || isTablet ? (
        <TicketAnimationMobile />
      ) : (
        <TicketAnimationDesktop scrollReady={scrollReady} />
      )}
      <RunningText />
    </>
  )
}

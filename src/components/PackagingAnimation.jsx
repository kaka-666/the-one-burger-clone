import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useDevice from '../hooks/useDevice'

gsap.registerPlugin(ScrollTrigger)

function getHeaderOffset() {
  return window.innerWidth >= 768 ? 80 : 44
}

function PackagingAnimationMobile() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return undefined

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top center',
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

    const onResize = () => trigger.refresh()
    window.addEventListener('resize', onResize)

    return () => {
      trigger.kill()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section ref={sectionRef} className="overflow-hidden bg-theOneWhite">
      <div className="pt-4 md:pt-14" aria-hidden="true" />
      <div className="w-full max-h-[45vh] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover filter brightness-[0.995]"
          playsInline
          preload="auto"
          muted
          disableRemotePlayback
        >
          <source src="/videos/TheOne_Web_Caja_MOVIL60_004.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

function PackagingAnimationDesktop() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) return undefined

    let trigger

    const attach = () => {
      trigger?.kill()

      trigger = ScrollTrigger.create({
        trigger: container,
        start: () => `top top+=${getHeaderOffset()}`,
        end: '+=3000',
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (Number.isFinite(video.duration) && video.duration > 0) {
            video.currentTime = self.progress * video.duration
          }
        },
      })
    }

    if (video.readyState >= 1) {
      attach()
    } else {
      video.addEventListener('loadedmetadata', attach, { once: true })
    }

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', onResize)

    return () => {
      video.removeEventListener('loadedmetadata', attach)
      trigger?.kill()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="overflow-hidden bg-theOneWhite">
      <div className="pt-4 md:pt-14" aria-hidden="true" />
      <div ref={containerRef} className="relative w-full h-screen">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.995]"
          playsInline
          preload="auto"
          muted
          disableRemotePlayback
        >
          <source src="/videos/TheOne_Web_Caja_DESKTOP_006_Converted.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default function PackagingAnimation() {
  const { isMobile, isTablet } = useDevice()

  return isMobile || isTablet ? <PackagingAnimationMobile /> : <PackagingAnimationDesktop />
}

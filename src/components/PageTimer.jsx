import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useDevice from '../hooks/useDevice'

gsap.registerPlugin(ScrollTrigger)

function formatTimer({ minutes, seconds }) {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function TimerIcon({ iconRef }) {
  return (
    <svg
      ref={iconRef}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="28"
      viewBox="-2 -2 36 28"
      fill="none"
      stroke="#EFEFEF"
      strokeWidth="2"
      className="shrink-0 self-end"
    >
      <path
        d="M32 16.0632C32 18.9616 31.2175 21.6433 29.8955 24H2.10455C0.782458 21.6433 0 18.9616 0 16.0632C0 7.20542 7.15006 0 16 0C24.8499 0 32 7.17833 32 16.0632Z"
        fill="#EF3206"
      />
    </svg>
  )
}

export default function PageTimer() {
  const { isMobile, isTablet } = useDevice()
  const isCompactLayout = isMobile || isTablet

  const wrapperRef = useRef(null)
  const containerRef = useRef(null)
  const iconRef = useRef(null)
  const paragraphRef = useRef(null)

  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 })
  const [hovered, setHovered] = useState(false)
  const [inFooter, setInFooter] = useState(false)

  const formatted = formatTimer(timer)
  const preparedCount = Math.round(1 + timer.minutes * 0.6)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        const nextSeconds = prev.seconds + 1
        if (nextSeconds === 60) {
          return { minutes: prev.minutes + 1, seconds: 0 }
        }
        return { ...prev, seconds: nextSeconds }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const icon = iconRef.current
    if (!icon) return undefined

    const rotate = () => {
      const current = gsap.getProperty(icon, 'rotation') || 0
      const next = Number.isInteger(current / 180) ? current + 180 : Math.ceil(current / 180) * 180 + 180
      gsap.to(icon, { rotation: next, duration: 0.5, ease: 'power1.inOut' })
    }

    rotate()
    const interval = setInterval(rotate, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const paragraph = paragraphRef.current
    if (!paragraph || isCompactLayout) return undefined

    gsap.fromTo(
      paragraph,
      { height: 0, opacity: 0 },
      { height: 'auto', opacity: 1, duration: hovered ? 0.25 : 1, ease: 'power2.out' },
    )
  }, [hovered, inFooter, isCompactLayout])

  useEffect(() => {
    const container = containerRef.current
    const wrapper = wrapperRef.current
    if (!container || !wrapper || isCompactLayout) return undefined

    gsap.set(container, {
      position: 'fixed',
      bottom: 0,
      right: '1%',
      zIndex: 20,
      x: 0,
    })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'bottom bottom',
        end: 'top center',
        scrub: true,
        onEnter: () => setInFooter(true),
        onLeaveBack: () => setInFooter(false),
      },
    })

    timeline.fromTo(
      container,
      { position: 'fixed', bottom: 0, right: '1%', zIndex: 20, x: 0 },
      { position: 'absolute', bottom: 0, right: '1%', zIndex: 0, x: -50 },
    )

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      timeline.scrollTrigger?.kill()
      timeline.kill()
    }
  }, [isCompactLayout])

  if (isCompactLayout) {
    return (
      <div ref={wrapperRef} className="relative flex h-36 items-end justify-end">
        <p className="bg-theOneWhite p-4 text-right font-kunst-regular text-theOneBlack">
          <span className="text-3xl leading-none">
            You&apos;ve been here for{' '}
            <span className="text-theOneRed">{formatted}min</span>.
          </span>
          <br />
          <span className="text-xl leading-none">
            In that time, we&apos;ve made {preparedCount} The One burgers. What are you waiting for?
            Order yours.
          </span>
        </p>
      </div>
    )
  }

  return (
    <div
      ref={wrapperRef}
      className={`relative flex items-end justify-end ${
        inFooter ? 'min-h-52 pt-16 pb-4 md:min-h-60 md:pt-20' : 'h-36 align-baseline'
      }`}
    >
      <div
        ref={containerRef}
        className={`flex items-end justify-end gap-2 rounded-md p-4 text-theOneBlack ${
          inFooter
            ? 'relative z-0 w-full'
            : 'absolute bottom-0 right-[1%] z-20 min-w-40 text-xl'
        }`}
        onMouseEnter={() => !inFooter && setHovered(true)}
        onMouseLeave={() => !inFooter && setHovered(false)}
      >
        {inFooter ? (
          <p
            ref={paragraphRef}
            className="animated-paragraph w-full bg-theOneWhite p-4 pl-12 pr-4 pt-12 text-right leading-none md:pt-16 font-kunst-regular"
          >
            <span className="text-6xl">
              You&apos;ve been here for <span className="text-theOneRed">{formatted}min</span>.
            </span>
            <br />
            <span className="text-4xl">
              In that time, we&apos;ve made {preparedCount} The One burgers. What are you waiting
              for? Order yours.
            </span>
          </p>
        ) : hovered ? (
          <p
            ref={paragraphRef}
            className="animated-paragraph overflow-hidden border-2 border-theOneBlack bg-theOneWhite p-4 text-right font-kunst-regular"
          >
            You&apos;ve been here for {formatted}min.
            <br />
            In that time, we&apos;ve made {preparedCount} The One burgers.
            <br />
            What are you waiting for? Order yours.
          </p>
        ) : (
          <p
            ref={paragraphRef}
            className="animated-paragraph min-w-20 overflow-hidden text-right leading-none font-kunst-regular"
          >
            {formatted}min
          </p>
        )}
        <TimerIcon iconRef={iconRef} />
      </div>
    </div>
  )
}

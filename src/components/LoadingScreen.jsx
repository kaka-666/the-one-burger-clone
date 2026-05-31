import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { LOADING_TEXTS } from '../data/content'

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true)
  const textRef = useRef(null)
  const svgRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('loading')

    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false)
        document.body.classList.remove('loading')
        onComplete?.()
      },
    })

    tl.to(svgRef.current, {
      rotation: 360 * 3,
      duration: 2.5,
      ease: 'none',
    })

    LOADING_TEXTS.forEach((text, index) => {
      tl.call(() => {
        if (textRef.current) textRef.current.textContent = text
      })
      tl.to({}, { duration: 1.2 })
      if (index < LOADING_TEXTS.length - 1) {
        tl.to(textRef.current, { opacity: 0, duration: 0.3 })
        tl.set(textRef.current, { opacity: 1 })
      }
    })

    tl.to(
      '.loading-screen',
      { y: '-150%', duration: 1.5, ease: 'power2.inOut' },
      '+=0.3',
    )

    return () => {
      tl.kill()
      document.body.classList.remove('loading')
    }
  }, [onComplete])

  if (!visible) return null

  return (
    <section className="loading-screen fixed top-0 left-0 w-full h-full z-50 bg-theOneWhite transition-all duration-[1500ms] flex items-center justify-center translate-y-0">
      <div className="loading-screen-inner flex gap-6 p-4 md:p-16 items-end justify-end min-w-full min-h-full">
        <p ref={textRef} className="loading-screen-text">
          {LOADING_TEXTS[0]}
        </p>
        <svg
          ref={svgRef}
          className="loading-screen-icon self-end shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 -2 36 28"
          fill="none"
          stroke="#EFEFEF"
          strokeWidth="2"
        >
          <path
            d="M32 16.0632C32 18.9616 31.2175 21.6433 29.8955 24H2.10455C0.782458 21.6433 0 18.9616 0 16.0632C0 7.20542 7.15006 0 16 0C24.8499 0 32 7.17833 32 16.0632Z"
            fill="#EF3206"
          />
        </svg>
      </div>
    </section>
  )
}

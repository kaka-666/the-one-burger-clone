import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { SCROLL_TEXT } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollText() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const [firstLine, secondLine] = SCROLL_TEXT.split('\n')

  useEffect(() => {
    const textEl = textRef.current
    if (!textEl) return undefined

    const split = new SplitType(textEl, { types: 'words' })

    const ctx = gsap.context(() => {
      gsap.from(split.words, {
        scrollTrigger: {
          trigger: textEl,
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
      })
    }, containerRef)

    return () => {
      ctx.revert()
      split.revert()
    }
  }, [])

  return (
    <section
      id="scroll-text"
      ref={containerRef}
      className="flex items-center justify-center w-full p-4 py-16 mt-8"
    >
      <div className="w-full md:w-5/6 2xl:w-4/6">
        <p
          ref={textRef}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight text-theOneGray break-words font-kunst-regular"
        >
          {firstLine}
          <br />
          {secondLine}
        </p>
      </div>
    </section>
  )
}

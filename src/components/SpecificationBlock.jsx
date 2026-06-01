import { useEffect, useRef } from 'react'

export default function SpecificationBlock({ title, items, forceScrollTitle = false }) {
  const titleRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const checkOverflow = () => {
      if (titleRef.current) {
        const parent = titleRef.current.parentElement
        if (forceScrollTitle || parent.scrollWidth > parent.clientWidth) {
          titleRef.current.classList.add('auto-scroll')
        } else {
          titleRef.current.classList.remove('auto-scroll')
        }
      }

      itemRefs.current.forEach((el, index) => {
        if (!el) return
        const parent = el.parentElement
        const forceScroll = items[index]?.forceScroll === true
        if (forceScroll || parent.scrollWidth > parent.clientWidth) {
          el.classList.add('auto-scroll')
        } else {
          el.classList.remove('auto-scroll')
        }
      })
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [title, items, forceScrollTitle])

  return (
    <div className="flex flex-col w-full lg:text-lg">
      <div className="py-2 font-kunst-medium overflow-hidden w-[95%]">
        <p ref={titleRef} className="whitespace-nowrap">
          {title}
        </p>
      </div>
      {items.map((item, index) => (
        <div key={`${item.name}-${index}`} className="py-2 border-t border-theOneBlack">
          <div className="flex gap-2 justify-between">
            <div className="w-3/4 overflow-hidden">
              <span
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className="whitespace-nowrap inline-block"
              >
                {item.name}
              </span>
            </div>
            <span className="whitespace-nowrap shrink-0">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

import { useEffect, useState } from 'react'

function getVisualViewportWidth() {
  return window.visualViewport?.width ?? window.innerWidth
}

function readDevice(width) {
  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width <= 1024,
    isLargeDesktop: width >= 1536,
  }
}

export default function useDevice() {
  const [device, setDevice] = useState(() => readDevice(window.innerWidth))

  useEffect(() => {
    const onResize = () => setDevice(readDevice(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return device
}

/** Layout width that stays stable under browser zoom (unlike innerWidth / vw). */
export function useVisualViewportWidth() {
  const [width, setWidth] = useState(getVisualViewportWidth)

  useEffect(() => {
    const update = () => setWidth(getVisualViewportWidth())
    const visualViewport = window.visualViewport

    visualViewport?.addEventListener('resize', update)
    visualViewport?.addEventListener('scroll', update)
    window.addEventListener('resize', update)

    return () => {
      visualViewport?.removeEventListener('resize', update)
      visualViewport?.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return width
}

/** Hero title size in rem: text-4xl below 768px, text-7xl above 1024px, smooth between. */
export function getHeroTitleFontSize(width) {
  const min = 2.25
  const max = 4.5

  if (width <= 768) return min
  if (width >= 1024) return max

  return min + ((width - 768) / (1024 - 768)) * (max - min)
}

export function getRunningTextScrollConfig(width = window.innerWidth) {
  const start = width < 768 ? 'top 70%' : width <= 1024 ? 'top 80%' : 'top bottom'
  const x =
    width < 768 ? -700 : width <= 1024 ? -1300 : width >= 1536 ? Math.round(width * -0.55) : -1000

  return { start, x }
}

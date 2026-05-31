import { useEffect, useState } from 'react'

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

export function getRunningTextScrollConfig(width = window.innerWidth) {
  const start = width < 768 ? 'top 70%' : width <= 1024 ? 'top 80%' : 'top bottom'
  const x =
    width < 768 ? -700 : width <= 1024 ? -1300 : width >= 1536 ? Math.round(width * -0.55) : -1000

  return { start, x }
}

import { useCallback, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)
import LoadingScreen from '../components/LoadingScreen'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ScrollText from '../components/ScrollText'
import AboutBurger from '../components/AboutBurger'
import BurgersViewer from '../components/BurgersViewer'
import BurgerExtrudeDiagram from '../components/BurgerExtrudeDiagram'
import SpecsSection from '../components/SpecsSection'
import PackagingAnimation from '../components/PackagingAnimation'
import PriceSection from '../components/PriceSection'
import FAQ from '../components/FAQ'
import ImagesSection from '../components/ImagesSection'
import Footer from '../components/Footer'
import PageTimer from '../components/PageTimer'
import OrderModal from '../components/OrderModal'

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [orderOpen, setOrderOpen] = useState(false)

  const scrollTo = useCallback((id, { offset = 0, duration = 1.5 } = {}) => {
    const el = document.getElementById(id)
    if (!el) return
    // Match react-scroll: destination = elementTop + offset (negative offset scrolls less)
    const y = Math.max(0, el.getBoundingClientRect().top + window.scrollY + offset)
    gsap.to(window, {
      duration,
      scrollTo: y,
      ease: 'none',
      autoKill: true,
    })
  }, [])

  const handleLoadingComplete = useCallback(() => {
    setLoading(false)
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [])

  return (
    <div className="max-w-full bg-theOneWhite overflow-x-hidden relative">
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Header
        onOrderClick={() => scrollTo('orderIt', { offset: -240, duration: 1.5 })}
        onBurgerClick={() => scrollTo('aboutBurger', { offset: -80, duration: 3 })}
        onHomeClick={() => scrollTo('theOne', { duration: 1.5 })}
      />
      <HeroSection onOrderClick={() => setOrderOpen(true)} />
      <ScrollText />
      <AboutBurger scrollReady={!loading} />
      <BurgersViewer />
      <BurgerExtrudeDiagram />
      <SpecsSection />
      <PackagingAnimation />
      <PriceSection />
      <FAQ />
      <PageTimer />
      <ImagesSection />
      <Footer onLinkClick={() => setOrderOpen(true)} />
      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </div>
  )
}

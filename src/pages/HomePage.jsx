import { useCallback, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleLoadingComplete = useCallback(() => {
    setLoading(false)
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [])

  return (
    <div className="max-w-full bg-theOneWhite overflow-x-hidden relative">
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Header
        onOrderClick={() => setOrderOpen(true)}
        onBurgerClick={() => scrollTo('aboutBurger')}
        onHomeClick={() => scrollTo('theOne')}
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

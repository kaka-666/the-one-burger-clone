import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import LottieReact from 'lottie-react'
import ReactSlick from 'react-slick'
import gsap from 'gsap'
import { BURGERS } from '../data/content'
import useDevice from '../hooks/useDevice'
import meatAnimation from '../data/lottie/meat.json'
import chickenAnimation from '../data/lottie/chicken.json'
import veggieAnimation from '../data/lottie/veggie.json'

const Lottie = LottieReact.default ?? LottieReact
const Slider = ReactSlick.default ?? ReactSlick

const LOTTIE_BY_TYPE = {
  meat: meatAnimation,
  chicken: chickenAnimation,
  veggie: veggieAnimation,
}

function Burger({ image, alt, label, extraStyles = '', onHoverChange, burgerType }) {
  const [selfHovered, setSelfHovered] = useState(false)

  const handleEnter = () => {
    setSelfHovered(true)
    onHoverChange(burgerType, true)
  }

  const handleLeave = () => {
    setSelfHovered(false)
    onHoverChange(burgerType, false)
  }

  return (
    <div
      className={`relative aspect-square flex items-center justify-center overflow-hidden ${extraStyles}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="absolute w-full h-full flex items-end justify-end text-right py-5 pr-5 p-10 lg:py-10 lg:pr-10 lg:p-20">
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl z-10 select-none leading-none">
          {label}.
        </p>
      </div>
      <img
        src={image}
        className={`w-full h-full object-cover ${
          selfHovered
            ? 'scale-125 transition-transform ease-in-out duration-300'
            : 'scale-100 transition-transform ease-in-out duration-300'
        }`}
        alt={alt}
      />
    </div>
  )
}

function BurgerDescription({ description, extraStyles = '' }) {
  useEffect(() => {
    gsap.fromTo(
      '.burger-description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.5, ease: 'power3.out' },
    )
  }, [description])

  return (
    <div
      className={`flex aspect-square w-full items-end justify-end overflow-hidden text-right py-5 pr-5 p-10 lg:py-10 lg:pr-10 lg:p-20 ${extraStyles}`}
    >
      <p className="burger-description w-full text-base md:text-base lg:text-2xl xl:text-4xl 2xl:text-5xl leading-none">
        {description}
      </p>
    </div>
  )
}

function BurgerSlidingText({ burgerType, extraStyles = '' }) {
  const animationData = LOTTIE_BY_TYPE[burgerType]
  const lottieRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      '.burger-sliding-text',
      { opacity: 0, y: 0 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: 'power3.out' },
    )
  }, [burgerType])

  useEffect(() => {
    lottieRef.current?.setSpeed(0.5)
  }, [burgerType])

  return (
    <div
      className={`flex aspect-square items-center justify-center overflow-hidden ${extraStyles}`}
    >
      <Lottie
        lottieRef={lottieRef}
        className="burger-sliding-text"
        animationData={animationData}
        loop
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  )
}

function BurgersViewerDesktop() {
  const [meatHovered, setMeatHovered] = useState(false)
  const [chickenHovered, setChickenHovered] = useState(false)
  const [veggieHovered, setVeggieHovered] = useState(false)

  const noneHovered = !meatHovered && !chickenHovered && !veggieHovered

  const handleHoverChange = useCallback((type, hovered) => {
    setMeatHovered(type === 'meat' && hovered)
    setChickenHovered(type === 'chicken' && hovered)
    setVeggieHovered(type === 'veggie' && hovered)
  }, [])

  const [meat, chicken, veggie] = BURGERS

  const meatBurger = useMemo(
    () => (
      <Burger
        image={meat.image}
        alt={meat.alt}
        label={meat.label}
        burgerType="meat"
        onHoverChange={handleHoverChange}
      />
    ),
    [handleHoverChange, meat],
  )

  const chickenBurger = useMemo(
    () => (
      <Burger
        image={chicken.image}
        alt={chicken.alt}
        label={chicken.label}
        extraStyles="border-x-2 border-theOneBlack"
        burgerType="chicken"
        onHoverChange={handleHoverChange}
      />
    ),
    [chicken, handleHoverChange],
  )

  const veggieBurger = useMemo(
    () => (
      <Burger
        image={veggie.image}
        alt={veggie.alt}
        label={veggie.label}
        extraStyles={veggieHovered ? 'border-l-2 border-theOneBlack' : ''}
        burgerType="veggie"
        onHoverChange={handleHoverChange}
      />
    ),
    [handleHoverChange, veggie, veggieHovered],
  )

  const meatDescription = useMemo(
    () => (
      <BurgerDescription
        description={meat.description}
        extraStyles="border-x-2 border-theOneBlack"
      />
    ),
    [meat.description],
  )

  const chickenDescription = useMemo(
    () => <BurgerDescription description={chicken.description} />,
    [chicken.description],
  )

  const veggieDescription = useMemo(
    () => (
      <BurgerDescription
        description={veggie.description}
        extraStyles="border-r-2 border-theOneBlack"
      />
    ),
    [veggie.description],
  )

  const meatSlidingText = useMemo(() => <BurgerSlidingText burgerType="meat" />, [])
  const chickenSlidingText = useMemo(
    () => (
      <BurgerSlidingText burgerType="chicken" extraStyles="border-r-2 border-theOneBlack" />
    ),
    [],
  )
  const veggieSlidingText = useMemo(() => <BurgerSlidingText burgerType="veggie" />, [])

  const col1 =
    meatHovered || noneHovered
      ? meatBurger
      : chickenHovered
        ? chickenSlidingText
        : veggieHovered
          ? veggieDescription
          : null

  const col2 =
    chickenHovered || noneHovered
      ? chickenBurger
      : meatHovered
        ? meatDescription
        : veggieHovered
          ? veggieSlidingText
          : null

  const col3 =
    veggieHovered || noneHovered
      ? veggieBurger
      : meatHovered
        ? meatSlidingText
        : chickenHovered
          ? chickenDescription
          : null

  return (
    <section className="mb-20 grid grid-cols-3 border-2 border-theOneBlack">
      {col1}
      {col2}
      {col3}
    </section>
  )
}

function BurgerSlide({ imageUrl, alt, index, isSelected, onClick }) {
  return (
    <div
      className="aspect-square border-r-2 border-theOneBlack overflow-hidden bg-theOneWhite"
      onClick={() => onClick(index)}
    >
      <img
        src={imageUrl}
        className={`w-full h-full object-cover ${
          isSelected
            ? 'scale-125 transition-transform ease-in-out duration-300'
            : 'scale-100 transition-transform ease-in-out duration-300 opacity-25 grayscale-[50%]'
        }`}
        alt={alt}
      />
    </div>
  )
}

function MobileAnimation({ selectedSlide }) {
  const animationData = LOTTIE_BY_TYPE[BURGERS[selectedSlide].type]

  useEffect(() => {
    gsap.fromTo(
      '.burger-sliding-text',
      { opacity: 0, y: 0 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power2.out' },
    )
  }, [selectedSlide])

  return (
    <Lottie
      key={selectedSlide}
      className="burger-sliding-text w-full"
      animationData={animationData}
      loop
    />
  )
}

function MobileDescription({ selectedSlide }) {
  const description = BURGERS[selectedSlide].description

  useEffect(() => {
    gsap.fromTo(
      '.burger-description',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power2.out' },
    )
  }, [selectedSlide])

  return (
    <div className="h-56 p-4 pr-6 flex items-end text-right overflow-hidden bg-theOneWhite">
      <p className="burger-description text-2xl md:text-3xl lg:text-4xl font-kunst-medium leading-none">
        {description}
      </p>
    </div>
  )
}

function BurgersViewerMobile() {
  const [selectedSlide, setSelectedSlide] = useState(0)
  const [sliderHeight, setSliderHeight] = useState(0)
  const sliderRef = useRef(null)

  const goToSlide = (index) => {
    sliderRef.current?.slickGoTo(index)
  }

  useEffect(() => {
    const measure = () => {
      const list = document.querySelector('.burgers-mobile-slider .slick-list')
      if (list) setSliderHeight(list.clientHeight)
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '25%',
    beforeChange: (_current, next) => setSelectedSlide(next),
  }

  return (
    <section className="mb-20">
      <Slider
        {...settings}
        ref={sliderRef}
        className="burgers-mobile-slider border-2 border-theOneBlack"
      >
        {BURGERS.map((burger, index) => (
          <BurgerSlide
            key={burger.type}
            imageUrl={burger.image}
            alt={burger.alt}
            index={index}
            isSelected={selectedSlide === index}
            onClick={goToSlide}
          />
        ))}
      </Slider>
      <div
        style={{ height: sliderHeight ? `${sliderHeight}px` : undefined }}
        className="overflow-hidden bg-theOneRed"
      >
        <MobileAnimation selectedSlide={selectedSlide} />
      </div>
      <MobileDescription selectedSlide={selectedSlide} />
    </section>
  )
}

export default function BurgersViewer() {
  const { isMobile, isTablet } = useDevice()

  if (isMobile || isTablet) {
    return <BurgersViewerMobile />
  }

  return <BurgersViewerDesktop />
}

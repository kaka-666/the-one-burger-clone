import { useState } from 'react'
import useDevice from '../hooks/useDevice'

function TheOneLogo({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 121 15"
      fill="none"
      className={className}
    >
      <path
        d="M17.6985 3.14593H11.0867V13.8733H7.58636V3.14593H0.974609V0.195404H17.6985V3.14593Z"
        className="group-hover:fill-theOneRed fill-theOneWhite"
      />
      <path
        d="M37.7081 0.195404V13.8733H34.2078V8.51939H23.1234V13.8733H19.623V0.195404H23.1234V5.54933H34.2078V0.195404H37.7081Z"
        className="group-hover:fill-theOneRed fill-theOneWhite"
      />
      <path
        d="M43.5433 2.98961V5.76427H54.4333V8.30445H43.5433V11.0791H54.4333V13.8733H40.043V0.195404H54.4333V2.98961H43.5433Z"
        className="group-hover:fill-theOneRed fill-theOneWhite"
      />
      <path
        d="M62.3281 7.01482C62.3281 2.48156 64.895 0 70.8845 0C76.874 0 79.4409 2.5011 79.4409 7.01482C79.4409 11.5285 76.8545 14.0687 70.8845 14.0687C64.9145 14.0687 62.3281 11.5676 62.3281 7.01482ZM75.9406 7.01482C75.9406 4.24015 74.5404 2.95052 70.8845 2.95052C67.2286 2.95052 65.8285 4.22061 65.8285 7.01482C65.8285 9.80902 67.248 11.1182 70.8845 11.1182C74.521 11.1182 75.9406 9.80902 75.9406 7.01482Z"
        className="group-hover:fill-theOneRed fill-theOneWhite"
      />
      <path
        d="M99.023 0.195404V13.8733H94.2587L84.9828 3.61488V13.8733H81.4824V0.195404H86.2273L95.5227 10.4734V0.195404H99.023Z"
        className="group-hover:fill-theOneRed fill-theOneWhite"
      />
      <path
        d="M104.856 2.98961V5.76427H115.746V8.30445H104.856V11.0791H115.746V13.8733H101.355V0.195404H115.746V2.98961H104.856Z"
        className="group-hover:fill-theOneRed fill-theOneWhite"
      />
      <path
        d="M120.742 12.9191C120.742 13.2676 120.648 13.59 120.49 13.8733H117.151C116.992 13.59 116.898 13.2676 116.898 12.9191C116.898 11.8542 117.757 10.9879 118.82 10.9879C119.883 10.9879 120.742 11.8509 120.742 12.9191Z"
        className="group-hover:fill-theOneRed fill-theOneWhite"
      />
    </svg>
  )
}

function TheOneLogoLarge() {
  return (
    <svg
      className="block h-[30%] max-h-full w-auto"
      viewBox="0 0 554 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M77.2925 15.0172H46.735V64.649H30.5575V15.0172H0V1.36621H77.2925V15.0172Z" fill="#EF3206" />
      <path d="M169.773 1.36621V64.649H153.596V39.8783H102.367V64.649H86.1895V1.36621H102.367V26.1369H153.596V1.36621H169.773Z" fill="#EF3206" />
      <path d="M196.736 14.294V27.1314H247.066V38.8839H196.736V51.7212H247.066V64.649H180.559V1.36621H247.066V14.294H196.736Z" fill="#EF3206" />
      <path d="M283.557 32.9172C283.557 11.9435 295.42 0.462158 323.102 0.462158C350.783 0.462158 362.647 12.0339 362.647 32.9172C362.647 53.8005 350.693 65.553 323.102 65.553C295.51 65.553 283.557 53.9813 283.557 32.9172ZM346.469 32.9172C346.469 20.0798 339.998 14.1132 323.102 14.1132C306.205 14.1132 299.734 19.9894 299.734 32.9172C299.734 45.845 306.295 51.902 323.102 51.902C339.908 51.902 346.469 45.845 346.469 32.9172Z" fill="#EF3206" />
      <path d="M453.149 1.36621V64.649H431.13L388.26 17.1869V64.649H372.082V1.36621H394.012L436.972 48.9187V1.36621H453.149Z" fill="#EF3206" />
      <path d="M480.113 14.294V27.1314H530.443V38.8839H480.113V51.7212H530.443V64.649H463.936V1.36621H530.443V14.294H480.113Z" fill="#EF3206" />
      <path d="M553.525 60.2342C553.525 61.8464 553.091 63.3381 552.357 64.649H536.928C536.194 63.3381 535.76 61.8464 535.76 60.2342C535.76 55.3072 539.729 51.2993 544.642 51.2993C549.556 51.2993 553.525 55.2922 553.525 60.2342Z" fill="#EF3206" />
    </svg>
  )
}

export { TheOneLogo, TheOneLogoLarge }

export default function Header({ onOrderClick, onBurgerClick, onHomeClick }) {
  const { isMobile } = useDevice()
  const [burgerHovered, setBurgerHovered] = useState(false)
  const [orderHovered, setOrderHovered] = useState(false)

  return (
    <header className="fixed h-11 md:h-20 w-screen border-2 border-theOneBlack bg-theOneWhite flex z-40 max-w-full">
      <button
        type="button"
        className="flex flex-grow cursor-pointer group"
        onClick={onOrderClick}
        onMouseEnter={() => setOrderHovered(true)}
        onMouseLeave={() => setOrderHovered(false)}
      >
        <section className="text-base md:text-3xl md:leading-none leading-none w-full flex-grow pt-3 pr-3 pb-3 md:pl-12 pl-7 flex justify-end items-end">
          <p className="text-theOneBlack font-bold">PÍDELA.</p>
          <p
            className={`text-theOneRed font-semibold transition-all duration-300 ${
              orderHovered ? 'max-w-8 opacity-100' : 'max-w-0 opacity-0'
            }`}
          >
            ↓
          </p>
        </section>
      </button>
      <div className="flex">
        <button
          type="button"
          className="flex cursor-pointer group"
          onClick={onBurgerClick}
          onMouseEnter={() => setBurgerHovered(true)}
          onMouseLeave={() => setBurgerHovered(false)}
        >
          <section className="text-base md:text-3xl md:leading-none leading-none border-x-2 border-theOneBlack bg-theOneGray pt-3 pr-3 pb-3 md:pl-12 pl-7 flex justify-end items-end">
            <p className="text-theOneWhite font-bold whitespace-nowrap">
              {isMobile ? 'LA BURGER.' : 'SOBRE LA BURGER.'}
            </p>
            <p
              className={`text-theOneRed font-semibold transition-all duration-300 ${
                burgerHovered ? 'max-w-8 opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              ↓
            </p>
          </section>
        </button>
        <button type="button" className="flex shrink-0 cursor-pointer" onClick={onHomeClick}>
          <section className="group pt-3 pr-3 pb-3 md:pb-[14px] md:pl-12 pl-7 bg-theOneRed flex items-end justify-end cursor-pointer transition duration-300 hover:text-theOneRed hover:bg-theOneBlack">
            <TheOneLogo className="max-w-[135px] max-h-[17px] md:max-w-[200px] md:max-h-[25px] w-full h-full block" />
          </section>
        </button>
      </div>
    </header>
  )
}

import { TheOneLogoLarge } from './Header'
import { BagIcon, GlovoIcon, JustEatIcon, UberIcon } from './DeliveryIcons'

export default function HeroSection({ onOrderClick }) {
  return (
    <section id="theOne" className="h-screen flex flex-col">
      <div className="min-h-11 w-full shrink-0 md:min-h-20" aria-hidden="true" />
      <div className="flex-grow flex flex-col max-h-full">
        <div className="flex flex-col items-center justify-center h-4/5">
          <section className="flex h-4/6 lg:h-5/6 min-h-0 items-end justify-center pt-1 md:pt-1 lg:pt-2">
            <video
              className="h-full w-full max-h-full max-w-full object-contain object-bottom md:object-cover md:object-[center_88%] lg:self-end"
              playsInline
              preload="auto"
              loop
              autoPlay
              muted
              disableRemotePlayback
            >
              <source src="/videos/TheOne_Web_Hero_006.mp4" type="video/mp4" />
            </video>
          </section>
          <section className="flex h-2/6 lg:h-1/6 min-h-0 items-center justify-center">
            <h1 className="text-4xl lg:text-7xl font-bold text-theOneGray self-center">
              PARA NO PENSAR.
            </h1>
          </section>
        </div>
        <section
          id="orderIt"
          className="h-1/5 flex flex-wrap md:flex-nowrap border-2 border-theOneBlack text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl min-w-0"
        >
          <button
            type="button"
            className="w-[50%] md:w-[28%] min-w-0 shrink flex items-center justify-center border-r-2 md:border-r-0 border-theOneBlack text-theOneBlack cursor-pointer hover:text-theOneWhite hover:bg-theOneRed transition duration-300 md:gap-2 lg:gap-4 group"
            onClick={onOrderClick}
          >
            <p className="mr-2 shrink-0">Recógela.</p>
            <span className="w-9 md:w-11 lg:w-14 shrink-0">
              <BagIcon />
            </span>
          </button>
          <div
            role="button"
            tabIndex={0}
            className="w-[50%] md:w-[28%] min-w-0 shrink flex items-center justify-center md:border-x-2 border-theOneBlack text-theOneBlack cursor-pointer hover:text-theOneWhite hover:bg-theOneRed transition duration-300 md:gap-1 lg:gap-4 group"
            onClick={onOrderClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onOrderClick()
            }}
          >
            <p className="mr-2 shrink-0">Pídela.</p>
            <span className="w-6 md:w-7 lg:w-9 shrink-0">
              <UberIcon />
            </span>
            <span className="w-6 md:w-7 lg:w-9 shrink-0">
              <JustEatIcon />
            </span>
            <span className="w-6 md:w-7 lg:w-9 shrink-0">
              <GlovoIcon />
            </span>
          </div>
          <div className="w-full min-w-[44%] md:min-w-0 md:flex-1 shrink flex h-full items-center justify-center px-4 lg:px-8 text-theOneBlack border-t-2 md:border-t-0 border-theOneBlack z-30 bg-theOneWhite">
            <TheOneLogoLarge />
          </div>
        </section>
      </div>
    </section>
  )
}

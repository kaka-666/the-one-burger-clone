export default function Footer({ onLinkClick }) {
  const handleLinkClick = () => {
    onLinkClick?.()
  }

  return (
    <footer className="w-screen max-w-full h-[700px] lg:h-[960px] bg-theOneRed flex flex-col justify-between p-4 py-8 lg:p-14">
      <section className="flex flex-col text-3xl md:text-4xl lg:text-7xl font-kunst-regular text-theOneBlack">
        <p>Carrer de Pau Claris, 155.</p>
        <p>612 345 678</p>
        <p>@theone.burger</p>
      </section>
      <section className="flex flex-col lg:flex-row gap-16 lg:gap-0 justify-between">
        <div className="flex flex-col lg:flex-row gap-5 text-xl text-theOneWhite items-end leading-none">
          <p
            className="hover-underline-animation"
            onClick={handleLinkClick}
            onKeyDown={(e) => e.key === 'Enter' && handleLinkClick()}
            role="button"
            tabIndex={0}
          >
            Contact
          </p>
          <p
            className="hover-underline-animation"
            onClick={handleLinkClick}
            onKeyDown={(e) => e.key === 'Enter' && handleLinkClick()}
            role="button"
            tabIndex={0}
          >
            Legal
          </p>
          <p
            className="hover-underline-animation"
            onClick={handleLinkClick}
            onKeyDown={(e) => e.key === 'Enter' && handleLinkClick()}
            role="button"
            tabIndex={0}
          >
            Privacy Policy
          </p>
          <p
            className="hover-underline-animation"
            onClick={handleLinkClick}
            onKeyDown={(e) => e.key === 'Enter' && handleLinkClick()}
            role="button"
            tabIndex={0}
          >
            Cookies
          </p>
        </div>
        <div className="self-end lg:self-auto">
          <img src="/images/Logo_TheOne_Footer.svg" alt="The One Logo" />
        </div>
      </section>
    </footer>
  )
}

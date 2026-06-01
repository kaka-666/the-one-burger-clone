export default function ImagesSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row w-screen max-h-[700px] max-w-full overflow-hidden">
      <div className="md:w-7/12 h-[250px] md:h-auto">
        <img
          src="/images/TheOne_LuminosoLED_v01.jpg"
          alt="The One illuminated poster"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-5/12 h-[250px] md:h-auto">
        <img
          src="/images/Clothing_TheOne.Crafter_v10_2.png"
          alt="The One polo shirt"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

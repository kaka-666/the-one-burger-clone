import { SPEC_BLOCKS } from '../data/content'
import SpecificationBlock from './SpecificationBlock'

export default function SpecsSection() {
  return (
    <section className="w-screen max-w-full flex flex-col justify-center border-2 border-theOneBlack bg-theOneWhite">
      <div className="w-full flex justify-end border-b-2 border-theOneBlack overflow-hidden">
        <div className="w-full flex px-4 md:px-14 py-5 items-end justify-end min-h-[120px] sm:min-h-[160px] md:min-h-[180px] overflow-hidden">
          <h2 className="inline-block w-max max-w-full text-left font-kunst-medium pt-2 leading-none text-[clamp(48px,6vw,180px)]">
            LAS ESPECIFICACIONES TÉCNICAS.
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="p-4 md:p-14 w-full grid gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 md:justify-center items-center">
          {SPEC_BLOCKS.map((block, index) => (
            <SpecificationBlock key={`${block.title}-${index}`} {...block} />
          ))}
        </div>
      </div>
    </section>
  )
}

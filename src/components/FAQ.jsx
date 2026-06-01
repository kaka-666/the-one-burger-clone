import { Fragment, useState } from 'react'
import { FAQS } from '../data/content'

function FaqAnswer({ answer, answerBreak = 'double' }) {
  if (!Array.isArray(answer)) {
    return answer
  }

  return answer.map((paragraph, index) => (
    <Fragment key={index}>
      {index > 0 && (answerBreak === 'double' ? <><br /><br /></> : <br />)}
      {paragraph}
    </Fragment>
  ))
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full bg-theOneWhite">
      <div className="faqs mb-16 p-4 md:p-14">
        <p className="faq-title font-kunst-bold text-theOneBlack">
          Any questions? Check our FAQ&apos;s
        </p>
        {FAQS.map((faq, index) => (
          <div
            key={faq.question}
            className={`faq ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggle(index)}
            onKeyDown={(e) => e.key === 'Enter' && toggle(index)}
            role="button"
            tabIndex={0}
          >
            <div className="faq-question font-kunst-regular text-theOneBlack">{faq.question}</div>
            <div className="faq-answer font-kunst-regular text-theOneGray">
              <FaqAnswer answer={faq.answer} answerBreak={faq.answerBreak} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

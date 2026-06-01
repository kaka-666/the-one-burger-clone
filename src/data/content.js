export const LOADING_TEXTS = [
  'Seasoning the beef...',
  'Cutting the fries...',
]

export const SCROLL_TEXT = `We love making your day easier by cutting down the decisions you have to make, so you can focus on what really matters. At The One., we believe less is more — so we built a menu for less. One menu for everyone. We strip out the noise so you can focus on the flavour. The One. is easy to recommend: our regulars get a «triple B» meal for just €9.99 — burger, fries, sauces, and a drink. Who does it better?
The One. is perfect when you don't want to think.`

export const BURGERS = [
  {
    type: 'meat',
    name: 'Beef.',
    label: 'Beef',
    image: '/images/The_Burgers_EFWhiteBG__Ternera_1.png',
    alt: 'The One Beef Burger',
    description:
      '120g Angus beef patty, cheddar cheese, pickle. Served with the one and only The Salsa.',
  },
  {
    type: 'chicken',
    name: 'Chicken.',
    label: 'Chicken',
    image: '/images/The_Burgers_EFWhiteBG__Pollo_1.png',
    alt: 'The One Chicken Burger',
    description:
      'Juicy free-range chicken breast, breaded, with cheddar, pickle, and onion. Served with the one and only The Salsa.',
  },
  {
    type: 'veggie',
    name: 'Veggie.',
    label: 'Veggie',
    image: '/images/The_Burgers_EFWhiteBG__Veggie_1.png',
    alt: 'The One Veggie Burger',
    description:
      'Our vegan bun with a beetroot patty, vegan cheese, pickle, rocket, and the one and only The Salsa. Cooked separately, of course.',
  },
]

export const SPEC_BLOCKS = [
  {
    title: 'Approx. weight (±5g)',
    items: [
      { name: 'Burger', value: '285g.' },
      { name: 'Fries', value: '150g.' },
      { name: 'Drink', value: '330ml.' },
    ],
  },
  {
    title: 'Total calories burger + fries (±20kcal)',
    items: [
      { name: 'Beef version', value: '903 kcal.' },
      { name: 'Chicken version', value: '945 kcal.' },
      { name: 'Veggie version', value: '820 kcal.' },
    ],
  },
  {
    title: 'Average time',
    items: [
      { name: 'Full meal', value: '16–22min.' },
      { name: 'Full The One. prep (from order)', value: '5–8min.' },
      { name: 'Order accepted', value: '15–40 sec.' },
    ],
  },
  {
    title: 'Peak quality guaranteed',
    items: [
      { name: 'From prep, we recommend eating within:', value: '<30min' },
      { name: 'In-store', value: 'Immediately' },
      { name: 'Delivery in thermal bag', value: '<50min' },
    ],
  },
]

export const FAQS = [
  {
    question: 'What is The One.?',
    answer:
      'The One is the hamburger you were looking for. We have also been at the dilemma of having to choose what we eat today, whether at home or during work breaks. For those who seek simplicity, the choice is simply The One.',
  },
  {
    question: 'How can I order The One.?',
    answer: [
      'You can order it on our ordering website to pick up at our store, or request it through one of our partner services*, which will deliver it wherever you want.',
      '*As you know, delivery companies apply certain fees that we are not responsible for and have no control over; The One home delivery may cost approximately the PVP of 9.99€. We strive to constantly review these prices so that our customers receive fair pricing.',
    ],
    answerBreak: 'double',
  },
  {
    question: 'How much does The One cost?',
    answer:
      "9.99€ With potatoes, sauces and drink. 9.99€ Even if you don't want the potatoes, sauce or drink.",
  },
  {
    question: 'What happens if I want to modify The One.?',
    answer:
      'You can choose between The One: Beef, Chicken, and Veggie. Among these three varieties, we allow you to remove ingredients, but you cannot exclude either potatoes or the drink.',
  },
  {
    question: "And if I still don't want the potatoes and/or drink?",
    answer:
      'Share it with your work partner, give it to someone, or save it for later. The One is a unique menu: hamburger, fries, sauces and drink.',
  },
  {
    question: 'Why in The One. can I only change the meat?',
    answer:
      "We believe in the perfect product and work constantly to offer it to you. Therefore, we try to simplify everything possible on our menu to give you what's essential.",
  },
  {
    question: 'What drinks can I choose?',
    answer: 'We have a variety of soft drinks, water, beer, and cold tea.',
  },
  {
    question: "But look, what happens if I still don't want the potatoes and/or drink?",
    answer: 'The One comes with hamburger, potatoes and drink.',
  },
  {
    question: 'When will The One. arrive in my city?',
    answer: [
      "We hope it's soon, but we have a high standard of quality that we need to meet in order to feel comfortable offering you The One. near you.",
      'If you want, contact us on social media to tell us where we should open our next The One.',
    ],
    answerBreak: 'single',
  },
  {
    question: 'Do I have a question, concern or suggestion?',
    answer:
      'You can contact us through hola@byfugu.com, or on social media @wearefugu or at +34 612 345 678.',
  },
]

export const ORDER_LINKS = {
  pickup: 'https://www.theoneburgerbcn.com/',
  uber: 'https://www.ubereats.com/',
  justEat: 'https://www.just-eat.es/',
  glovo: 'https://glovoapp.com/',
}

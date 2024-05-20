function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div')
  widgets.forEach(widget => {
    widget.classList.add('widget')
  })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
const randomIdx = Math.floor(Math.random() * quotes.length)
const randomQuote = quotes[randomIdx]
const quote = document.createElement('div')
const quoteText = randomQuote.quote
quote.textContent = quoteText
const widget1 = document.querySelector('.quoteoftheday')
widget1.appendChild(quote)

const authorDate = document.createElement('div')
const { author, date } = randomQuote
authorDate.textContent = `${author} in ${date || "an unknown date"}`
widget1.appendChild(authorDate)


  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)]

const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)]
const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)]

const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)]
const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)]

const beepBop = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
const paragraph = document.createElement('p')
paragraph.textContent = beepBop
document.querySelector('.corporatespeak').appendChild(paragraph)

// 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()

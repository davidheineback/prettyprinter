import Document from './parser/Document.js'

const document = new Document()
document.parse('Hej på dig. Hallooo ! Hej       hej. Frågor på det?')
let sentences = document.getAllRegularSentences()

sentences.forEach(sentence => {
  console.log('\x1b[36m\x1b[1m%s\x1b[0m', sentence.getSenteceAsObject())
})

sentences.forEach(sentence => {
  console.log('\x1b[36m\x1b[1m%s\x1b[0m', sentence.getSentenceAsString())
})

sentences = document.getAllExclamationSentences()

sentences.forEach(sentence => {
  console.log('\x1b[33m\x1b[1m\x1b[4m%s\x1b[0m', sentence.getSentenceAsString())
})

sentences = document.getAllQuestionSentences()

sentences.forEach(sentence => {
  console.log('\x1b[35m\x1b[7m%s\x1b[0m', sentence.getSentenceAsString())
})


// Reverse = "\x1b[7m" switch background and foreground
// Bright = "\x1b[1m" sets bold and bright color
// Underscore = "\x1b[4m"

//Foreground colors:
// FgYellow = "\x1b[33m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"

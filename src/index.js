import Document from './parser/Document.js'

const document = new Document()
document.parse('Hej på dig. Hallooo ! Hej       hej. Frågor på det?')
console.log(document.getAllRegularSentences())
document.getAllExclamationSentences()
document.getAllQuestionSentences()


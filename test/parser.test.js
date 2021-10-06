import Document from '../src/parser/Document.js'
import RegularSentence from '../src/parser/sentence/RegularSentence.js'
import ExclamationSentence from '../src/parser/sentence/ExclamationSentence.js'
import QuestionSentence from '../src/parser/sentence/QuestionSentence.js'

describe('Tests Document class.', () => {

  it('TC1 - running method getAllSentences should return an array with all sentences', () => {
    const stringToTest = 'Hello World. Hello again! Hello?'
    const document = new Document()
    document.parse('Hello World. Hello again! Hello?')
    expect(document.getAllSentences().length).toEqual(3)
  })

  it('TC2 - running method getAllRegularSentences should return an array only containing all regular sentences', () => {
    const document = new Document()
    document.parse('Hello World. Hello again! Hello? Hello Again.')
    expect(document.getAllRegularSentences().forEach(sentence => {
      sentence instanceof RegularSentence
    }))
    expect(document.getAllRegularSentences().length).toEqual(2)
  })

  it('TC3 - running method getAllExclamationSentences should return an array with all exclamation sentences', () => {
    const document = new Document()
    document.parse('Hello World. Hello again! Hello? Hello Again.')
    expect(document.getAllExclamationSentences().forEach(sentence => {
      sentence instanceof ExclamationSentence
    }))
    expect(document.getAllExclamationSentences().length).toEqual(1)
  })

  it('TC4 - running method getAllExclamationSentences should return an array with all exclamation sentences', () => {
    const document = new Document()
    document.parse('Hello World. Hello again! Hello? Hello Again.')
    expect(document.getAllQuestionSentences().forEach(sentence => {
      sentence instanceof QuestionSentence
    }))
    expect(document.getAllQuestionSentences().length).toEqual(1)
  })
})

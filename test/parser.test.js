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

  it('TC2.1 - running method getAllRegularSentences should return an array only containing all regular sentences', () => {
    const document = new Document()
    document.parse('Hello World. Hello again! Hello? Hello Again.')
    document.getAllRegularSentences().forEach(sentence => {
      expect(sentence instanceof RegularSentence).toEqual(true)
    })
  })

  it('TC2.2 - running method getAllRegularSentences on Hello World. Hello again! Hello? Hello Again. should have length 2', () => {
    const document = new Document()
    document.parse('Hello World. Hello again! Hello? Hello Again.')
    expect(document.getAllRegularSentences().length).toEqual(2)
  })

  it('TC3 - running method getAllExclamationSentences should return an array only containing all regular sentences', () => {
    const document = new Document()
    document.parse('Hello World. Hello again! Hello? Hello Again.')
    document.getAllExclamationSentences().forEach(sentence => {
      expect(sentence instanceof ExclamationSentence).toEqual(true)
    })
    expect(document.getAllExclamationSentences().length).toEqual(1)
  })

  it('TC4 - running method getAllQuestionSentences should return an array only containing all regular sentences', () => {
    const document = new Document()
    document.parse('Hello World. Hello again! Hello? Hello Again.')
    document.getAllQuestionSentences().forEach(sentence => {
      expect(sentence instanceof QuestionSentence).toEqual(true)
    })
    expect(document.getAllQuestionSentences().length).toEqual(1)
  })

  it('TC5 - running method getSentenceAsObject on a RegularSentence should return type "REGULAR" ', () => {
    const document = new Document()
    document.parse('Hello World. Hello again! Hello? Hello Again.')
    document.getAllRegularSentences().forEach(sentence => {
      expect(sentence.getSenteceAsObject().type).toEqual('REGULAR')
    })
  })

  it('TC6 - running method getSentenceAsObject on a RegularSentence should return type "REGULAR" ', () => {
    const document = new Document()
    document.parse('Hello World. Hello again! Hello? Hello Again.')
    expect(document.getAllRegularSentences()[0].getSentenceAsString()).toEqual('Hello World.')
  })
})

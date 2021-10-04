import Parser from "../src/parser/Parser.js"

describe('Tests Document class.', () => {

  it('TC1 - running method getAllSentences should return an array with all sentences', () => {
    const stringToTest = 'Hello World. Hello again! Hello?'
    const document = new Parser('stringToTest')
    expect(document.getAllSentences().length()).toEqual(3)
  })

  it('TC2 - running method getAllRegularSentences should return an array with all regular sentences', () => {
    const document = new Parser()
    const stringToTest = 'Hello World. Hello again! Hello?'
    expect(document.getType()).toEqual('REGULAR')
    expect(document.getAllRegularSentences().length()).toEqual(1)
  })

  it('TC3 - running method getAllExclamationSentences should return an array with all exclamation sentences', () => {
    const document = new Parser()
    const stringToTest = 'Hello World. Hello again! Hello?'
    expect(document.parse().getType()).toEqual('EXCLAMATION')
    expect(document.parse().getAllExclamationSentences().length()).toEqual(1)
  })

  it('TC4 - running method getAllExclamationSentences should return an array with all exclamation sentences', () => {
    const document = new Parser()
    const stringToTest = 'Hello World. Hello again! Hello?'
    expect(document.parse().getType()).toEqual('QUESTION')
    expect(document.parse().getAllQuestionSentences().length()).toEqual(1)
  })
})

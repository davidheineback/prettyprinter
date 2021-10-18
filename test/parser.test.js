import Document from '../src/parser/Document.js'
import RegularSentence from '../src/parser/sentence/RegularSentence.js'
import ExclamationSentence from '../src/parser/sentence/ExclamationSentence.js'
import QuestionSentence from '../src/parser/sentence/QuestionSentence.js'
import Sentence from '../src/parser/sentence/Sentence.js'

describe('TC1 Tests Document class with string "Hello World. Hello again! Hello! Hello? Anyone?"', () => {
  const document = new Document()
  document.parse('Hello World. Hello again! Hello! Hello? Anyone?')

  it('TC1.1 - running method getAllSentences should return an array with sentence objects', () => {
    document.getAllSentences().forEach(sentence => {
      expect(sentence instanceof Sentence).toEqual(true)
    })
  })

  it('TC1.2 - running method getAllRegularSentences should return an array only containing sentences of type RegularSentence', () => {
    document.getAllRegularSentences().forEach(sentence => {
      expect(sentence instanceof RegularSentence).toEqual(true)
    })
  })

  it('TC1.3 - running method getSentenceAsObject on a RegularSentence should return type "REGULAR" ', () => {
    document.getAllRegularSentences().forEach(sentence => {
      expect(sentence.getSentenceAsObject().type).toEqual('REGULAR')
    })
  })

  it('TC1.4 - running method getSentenceAsString on the first RegularSentence should return string "Hello World." ', () => {
    expect(document.getAllRegularSentences()[0].getSentenceAsString()).toEqual('Hello World.')
  })

  it('TC1.5 - running method getAllExclamationSentences should return an array only containing sentences of type ExclamationSentence', () => {
    document.getAllExclamationSentences().forEach(sentence => {
      expect(sentence instanceof ExclamationSentence).toEqual(true)
    })
  })

  it('TC1.6 - running method getSentenceAsObject on a ExclamationSentence should return type "EXCLAMATION" ', () => {
    document.getAllExclamationSentences().forEach(sentence => {
      expect(sentence.getSentenceAsObject().type).toEqual('EXCLAMATION')
    })
  })

  it('TC1.7 - running method getSentenceAsString on the second ExclamationSentence should return string "Hello!" ', () => {
    expect(document.getAllExclamationSentences()[1].getSentenceAsString()).toEqual('Hello!')
  })

  it('TC1.8 - running method getAllQuestionSentences should return an array only containing sentences of type QuestionSentence', () => {
    document.getAllQuestionSentences().forEach(sentence => {
      expect(sentence instanceof QuestionSentence).toEqual(true)
    })
  })

  it('TC1.9 - running method getSentenceAsObject on a QuestionSentence should return type "QUESTION" ', () => {
    document.getAllQuestionSentences().forEach(sentence => {
      expect(sentence.getSentenceAsObject().type).toEqual('QUESTION')
    })
  })

  it('TC1.10 - running method getSentenceAsString on the second QuestionSentence should return string "Anyone?" ', () => {
    expect(document.getAllQuestionSentences()[1].getSentenceAsString()).toEqual('Anyone?')
  })
})

describe('TC2 Test that length is as expected with string "Hello World. Hello again! Hello! Hello? Anyone?"', () => {
  const document = new Document()
  document.parse('Hello World. Hello again! Hello! Hello? Anyone?')

  it('TC2.1 - running method getAllSentences should return an array with length 5', () => {
    expect(document.getAllSentences().length).toEqual(5)
  })

  it('TC2.2 - running method getAllRegularSentences should have length 1', () => {
    expect(document.getAllRegularSentences().length).toEqual(1)
  })

  it('TC2.3 - running method getAllExclamationSentences should have length 2', () => {
    expect(document.getAllExclamationSentences().length).toEqual(2)
  })

  it('TC2.4 - running method getAllQuestionSentences should have length 2', () => {
    expect(document.getAllQuestionSentences().length).toEqual(2)
  })
})

describe('TC3 Test Error handling', () => {
  const document = new Document()

  it('TC3.1 - Parsing a sentence without correct ending throws error', () => {
    expect(() => {
      document.parse('Hello World')
    }).toThrow('Syntax error: \"Hello World\" doesn\'t have a valid end character')
  })

  it('TC3.2 - Parsing a sentence without containing incorrect sentence build throws error', () => {
    expect(() => {
      document.parse('Hello World..')
    }).toThrow('Syntax error: \".\" is not a valid syntax for a sentence')
  })
})

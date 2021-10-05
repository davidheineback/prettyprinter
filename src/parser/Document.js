import tokenizer from '@david-heineback/tokenizer'
import SentenceGrammar from '../grammars/SentenceGrammar.js'
import Sentences from './Sentences.js'


const { Tokenizer } = tokenizer

export default class Document {
  #grammar = new SentenceGrammar()
  #sentences = []
  #currentSentence = []
  #stringToParse
  #tokenContainer

  constructor() {
  }

  parse(stringToParse) {
    this.#stringToParse = stringToParse
    this.#tokenContainer = new Tokenizer(this.#grammar, this.#stringToParse)
    this.#currentSentence = []
    while (this.#tokenContainer.getActiveToken().tokenValue !== 'END') {
      const token = this.#tokenContainer.getActiveToken()
      this.#currentSentence.push(token.tokenValue)
      switch(token.tokenType) {
        case 'WORD':
          break
        case 'DOT':
          this.#sentences.push({'type': 'DOT', 'sentence': this.#currentSentence})
          this.#currentSentence = []
          break
        case 'EXCLAMATION':
          this.#sentences.push({'type': 'EXCLAMATION', 'sentence': this.#currentSentence})
          this.#currentSentence = []
          break
        case 'QUESTION':
          this.#sentences.push({'type': 'QUESTION', 'sentence': this.#currentSentence})
          this.#currentSentence = []
          break
        default:
          break
      }
        this.#tokenContainer.setActiveTokenToNext()
    }
  }

  getAllSentences() {

  }

  getAllRegularSentences() {
    const regularSentences = this.#sentences.filter(sentence => sentence.type === 'DOT')
    // console.log(regularSentences)
    regularSentences.forEach(sentence => {
      let fullSentence = ''
      sentence.sentence.forEach(component => {
        fullSentence += `${component} `
      })
      sentence.sentence = fullSentence.replace(/.{0,3}$/, '.')
    })
    return regularSentences
  }

  getAllExclamationSentences() {
    console.log(this.#sentences.filter(sentence => sentence.type === 'EXCLAMATION'))
  }

  getAllQuestionSentences() {
    console.log(this.#sentences.filter(sentence => sentence.type === 'QUESTION'))
  }

  // setNewStringToParse(stringToParse) {
  //   this.#stringToParse = stringToParse
  //   this.parse()
  // }

}
import tokenizer from '@david-heineback/tokenizer'
import SentenceGrammar from '../grammars/SentenceGrammar.js'
import Sentences from './Sentences.js'
import RegularSentence from './sentence/RegularSentence.js'
import ExclamationSentence from './sentence/ExclamationSentence.js'
import QuestionSentence from './sentence/QuestionSentence.js'


const { Tokenizer } = tokenizer

export default class Document {
  #grammar = new SentenceGrammar()
  #sentences = new Sentences()
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
      if (token.tokenType !== 'WORD') {
        this.#sentences.add({'type': `${token.tokenType}`, 'sentence': this.#currentSentence})
      }
        this.#tokenContainer.setActiveTokenToNext()
    }
    return 
  }

  getAllSentences() {

  }

  getAllRegularSentences() {
    return this.#sentences.getSentences().filter(sentence => sentence instanceof RegularSentence)
  }

  getAllExclamationSentences() {
    return this.#sentences.getSentences().filter(sentence => sentence instanceof ExclamationSentence)
  }

  getAllQuestionSentences() {
    return this.#sentences.getSentences().filter(sentence => sentence instanceof QuestionSentence)
  }
}
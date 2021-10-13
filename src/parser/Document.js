import tokenizer from '@david-heineback/tokenizer'
import SentenceGrammar from '../grammars/SentenceGrammar.js'
import Sentences from './Sentences.js'
import Validator from './Validator.js'


const { Tokenizer } = tokenizer

export default class Document {
  #grammar = new SentenceGrammar()
  #sentences = new Sentences()
  #validator = new Validator()
  #currentSentence = []
  #stringToParse
  #tokenContainer

  constructor() {

  }

  parse(stringToParse) {
    this.#stringToParse = stringToParse
    this.#tokenContainer = new Tokenizer(this.#grammar, this.#stringToParse)
    while (this.#tokenContainer.getActiveToken().tokenValue !== 'END') {
      const token = this.#tokenContainer.getActiveToken()
      this.#currentSentence.push(token.tokenValue)
      if (this.#validator.isValidEndToken(token.tokenType) && this.#currentSentence.length > 1) {
        this.#sentences.add({'type': `${token.tokenType}`, 'sentence': this.#currentSentence})
        this.#currentSentence = []
      }
        this.#tokenContainer.setActiveTokenToNext()
        if (this.#validator.isInValidEndOfSentence(this.#tokenContainer.getActiveToken().tokenType, token.tokenType)) {
          this.#sentences.add({'type': 'SYNTAX ERROR', 'sentence': this.#currentSentence})
          const syntaxErrorSentence = this.#sentences[this.#sentences.length - 1].getSentenceAsString()
          throw new Error (`Whoops, incorrect ending of sentence: ${syntaxErrorSentence}`)
        }
        
    }
  }

  getAllSentences() {
    return this.#sentences
  }
}
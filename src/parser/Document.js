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
  #tokenContainer

  constructor() {

  }

  parse(stringToParse) {
    this.#tokenContainer = new Tokenizer(this.#grammar, stringToParse)
    while (this.#tokenContainer.getActiveToken().tokenValue !== 'END') {
      const token = this.#tokenContainer.getActiveToken()
      this.#currentSentence.push(token)
      if (this.hasValidEnd()) {
        if (this.#validator.isValidSentenceLength(this.#currentSentence.length)) {
          this.#sentences.add({ 'type': `${token.tokenType}`, 'sentence': this.#currentSentence })
          this.#currentSentence = []
        } else {
          throw new Error(`Syntax error: "${this.#errorSentence()}" is not a valid syntax for a sentence`)
        }
      }
      this.#tokenContainer.setActiveTokenToNext()
      this.#checkSyntaxError(token)
    }
  }

  #checkSyntaxError(token) {
    if (this.#validator.isInValidEndOfSentence(this.#tokenContainer.getActiveToken().tokenType, token.tokenType)) {
      throw new Error(`Syntax error: "${this.#errorSentence()}" doesn't have a valid end character`)
    }
  }

  #errorSentence() {
    this.#sentences.add({ 'type': 'SYNTAX ERROR', 'sentence': this.#currentSentence })
    return this.#sentences.slice(-1)[0].getSentenceAsString()
  }

  hasValidEnd() {
    const currentToken = this.#currentSentence.slice(-1)[0]
    return this.#validator.isValidEndToken(currentToken.tokenType)
  }

  getAllSentences() {
    return this.#sentences
  }
}
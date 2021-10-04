import tokenizer from '@david-heineback/tokenizer'
import SentenceGrammar from '../grammars/SentenceGrammar.js'


const { Tokenizer } = tokenizer

export default class Document {
  #grammar = new SentenceGrammar()
  
  constructor(stringToParse) {
    this.#stringToParse = stringToParse
    this.#tokenContainer = new Tokenizer(this.#grammar, stringToParse)
  }

  parse() {
    // create sentences
  }

  getAllSentences() {

  }

  getAllRegularSentences() {

  }

  getAllExclamationSentences() {
    
  }

  getAllQuestionSentences() {

  }

  setNewStringToTokenize(stringToParse) {
    this.#stringToParse = stringToParse
    this.parse()
  }

}
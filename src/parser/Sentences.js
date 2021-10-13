import RegularSentence from "./sentence/RegularSentence.js"
import ExclamationSentence from "./sentence/ExclamationSentence.js"
import QuestionSentence from "./sentence/QuestionSentence.js"
import Sentence from "./sentence/Sentence.js"

export default class Sentences extends Array {
  constructor() {
    super()
  }
    add(sentence) {
    this.push(this.#createSenteceByTypeOf(sentence))
  }

  #createSenteceByTypeOf(sentence) {
    switch(sentence.type) {
      case 'DOT':
        return new RegularSentence(sentence)
      case 'EXCLAMATION':
        return new ExclamationSentence(sentence)
      case 'QUESTION':
        return new QuestionSentence(sentence)
      default:
        return new Sentence(sentence)
    }
  }

  getAllRegularSentences() {
    return this.filter(sentence => sentence instanceof RegularSentence)
  }

  getAllExclamationSentences() {
    return this.filter(sentence => sentence instanceof ExclamationSentence)
  }

  getAllQuestionSentences() {
    return this.filter(sentence => sentence instanceof QuestionSentence)
  }
}

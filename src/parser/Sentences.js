import RegularSentence from "./sentence/RegularSentence.js"
import ExclamationSentence from "./sentence/ExclamationSentence.js"
import QuestionSentence from "./sentence/QuestionSentence.js"

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
        break
    }
  }
}

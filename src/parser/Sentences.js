import RegularSentence from "./sentence/RegularSentence.js"
import ExclamationSentence from "./sentence/ExclamationSentence.js"
import QuestionSentence from "./sentence/QuestionSentence.js"
import SentenceFactory from "./sentence/SentenceFactory.js"

export default class Sentences extends Array {

  constructor() {
    super()
  }

  createSentence(sentenceObject) {
    const sentenceFactory = new SentenceFactory()
    return sentenceFactory.createSentence(sentenceObject)
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

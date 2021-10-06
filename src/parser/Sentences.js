import RegularSentence from "./sentence/RegularSentence.js"
import ExclamationSentence from "./sentence/ExclamationSentence.js"
import QuestionSentence from "./sentence/QuestionSentence.js"

export default class Sentences {
  constructor() {
    this.sentences = []
  }

  /**
   *
   * @param {*} sentence
   * @memberof Sentences
   */
  add(sentence) {
    switch(sentence.type) {
      case 'DOT':
        this.sentences.push(new RegularSentence(sentence))
        break
      case 'EXCLAMATION':
        this.sentences.push(new ExclamationSentence(sentence))
        break
      case 'QUESTION':
        this.sentences.push(new QuestionSentence(sentence))
        break
      default:
        break
    }

    // this.sentences.forEach(sentence => {
    //   console.log(sentence.getSenteceAsObject())
    //   console.log(sentence.getSentenceAsString())
    // })
  }

  getSentences() {
    return this.sentences
  }

}

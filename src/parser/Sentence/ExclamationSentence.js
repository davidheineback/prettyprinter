import Sentence from "./Sentence.js";

export default class ExclamationSentence extends Sentence {
  constructor(sentenceObject) {
    super(sentenceObject)
    this.endCharacter = '!'
  }
}
import Sentence from "./Sentence.js";

export default class ExclamationSentence extends Sentence {
  #endCharacter
  
  constructor(sentenceObject) {
    super(sentenceObject)
    this.#endCharacter = '!'
  }
}
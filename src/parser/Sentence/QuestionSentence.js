import Sentence from "./Sentence.js";

export default class QuestionSentence extends Sentence {
  #endCharacter
  
  constructor(sentenceObject) {
    super(sentenceObject)
    this.#endCharacter = '?'
  }
  
}
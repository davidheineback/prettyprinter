import Sentence from "./Sentence.js";

export default class QuestionSentence extends Sentence {
  constructor(sentenceObject) {
    super(sentenceObject)
    this.endCharacter = '?'
  }
  
}
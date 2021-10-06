import Sentence from "./Sentence.js";

export default class RegularSentence extends Sentence {
  #endCharacter
  
  constructor(sentenceObject) {
    super({'type': 'REGULAR', 'sentence': sentenceObject.sentence})
    this.#endCharacter = '.'
  }
}
import Sentence from "./Sentence.js";

export default class RegularSentence extends Sentence {
  constructor(sentenceObject) {
    super({'type': 'REGULAR', 'sentence': sentenceObject.sentence})
  }
}
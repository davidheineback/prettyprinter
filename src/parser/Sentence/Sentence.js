export default class Sentence {
  #sentenceObject

  constructor(sentenceObject) {
    this.#sentenceObject = sentenceObject
    this.endCharacter 
  }

  getSentenceAsObject() {
    return this.#sentenceObject
  }

  getSentenceAsString() {
    let fullSentence = ''
    this.#sentenceObject.sentence.forEach(word => {
        fullSentence += `${word} `
    })
    return fullSentence.replace(/.{0,3}$/, `${this.endCharacter}`)
    
  }

  // sentenceContainsAtLeastOneWord() {
  //   //check if string qualify as sentenece
  // }

  // getNextWord() {
  //   // Klasserna för “en vanlig mening”, uttrop och frågor skall alla ha funktionalitet för att:
  //   // stega igenom WORD-objekt som meningen består av.
  // }

  // getPreviousWord() {
  //   // Klasserna för “en vanlig mening”, uttrop och frågor skall alla ha funktionalitet för att:
  //   // stega igenom WORD-objekt som meningen består av.

  // }

}
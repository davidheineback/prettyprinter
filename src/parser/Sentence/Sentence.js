export default class Sentence {
  #sentenceObject
  #endCharacter

  constructor(sentenceObject) {
    this.#sentenceObject = sentenceObject
    this.#endCharacter 
  }

  getSenteceAsObject() {
    return this.#sentenceObject
  }

  getSentenceAsString() {
    let fullSentence = ''
    this.#sentenceObject.sentence.forEach(word => {
        fullSentence += `${word} `
    })
    return fullSentence.replace(/.{0,3}$/, `${this.#endCharacter}`)
  }

  sentenceContainsAtLeastOneWord() {
    //check if string qualify as sentenece
  }

  reParseSentence() {
    // de enskilda orden separeras med ett enda mellanslag oavsett vilka whitespace som användes i orginaltexten. 
  }

  getNextWord() {
    // Klasserna för “en vanlig mening”, uttrop och frågor skall alla ha funktionalitet för att:
    // stega igenom WORD-objekt som meningen består av.
  }

  getPreviousWord() {
    // Klasserna för “en vanlig mening”, uttrop och frågor skall alla ha funktionalitet för att:
    // stega igenom WORD-objekt som meningen består av.

  }



}
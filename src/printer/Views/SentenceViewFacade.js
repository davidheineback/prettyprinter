export default class SentenceViewFacade {
  constructor() {
    this.style
  }

  print(sentenceAsString, index) {
    console.log(`Index ${index}:`)
    console.log(this.style, sentenceAsString)
    console.log('')
  }
}
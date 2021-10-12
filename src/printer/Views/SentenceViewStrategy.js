export default class SentenceViewStrategy {
  constructor() {
    this.style
  }

  print(sentenceAsString, index) {
    console.log(`Index ${index}:`)
    console.log(this.style, sentenceAsString)
    console.log('')
  }
}
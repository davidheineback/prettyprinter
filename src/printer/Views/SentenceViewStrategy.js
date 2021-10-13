export default class SentenceViewStrategy {
  constructor() {
    this.style
  }

  print(sentenceAsString, index) {
    console.log(`Index ${index}:`)
    console.log(this.style, sentenceAsString)
    console.log('')
  }
  
  printDescriptionOfStyles() {
    console.log('')
    console.log('\x1b[36m\x1b[1m%s\x1b[0m', 'Regular sentence')
    console.log('\x1b[33m\x1b[1m\x1b[4m%s\x1b[0m', 'Exclamation')
    console.log('\x1b[35m\x1b[7m%s\x1b[0m', 'Question')
    console.log('\x1b[31m\x1b[1m%s\x1b[0m', 'Error')
    console.log('')
  }
}
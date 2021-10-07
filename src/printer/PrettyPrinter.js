import Document from '../parser/Document.js'
import readline from 'readline'

export default class PrettyPrinter {
  #readCommandLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  print() {
    console.log('\x1b[36m\x1b[1m%s\x1b[0m', 'Regular sentence')
    console.log('\x1b[33m\x1b[1m\x1b[4m%s\x1b[0m', 'Exclamation')
    console.log('\x1b[35m\x1b[7m%s\x1b[0m', 'Question')
    console.log('\x1b[31m\x1b[1m%s\x1b[0m', 'Error')

    this.#readCommandLine.question('Write a sentence as a string:', (string) => {
      try {
        const document = new Document()
        document.parse(string)
        
        let sentences = document.getAllSentences()
        
        sentences = document.getAllRegularSentences()
      
        sentences.forEach(sentence => {
          console.log('\x1b[36m\x1b[1m%s\x1b[0m', sentence.getSentenceAsObject().sentence)
        })
      
        
        sentences.forEach(sentence => {
            console.log('\x1b[36m\x1b[1m%s\x1b[0m', sentence.getSentenceAsString())
          })
      
        sentences = document.getAllExclamationSentences()
      
        sentences.forEach(sentence => {
          console.log('\x1b[33m\x1b[1m\x1b[4m%s\x1b[0m', sentence.getSentenceAsString())
        })
      
        sentences = document.getAllQuestionSentences()
      
        sentences.forEach(sentence => {
          console.log('\x1b[35m\x1b[7m%s\x1b[0m', sentence.getSentenceAsString())
        })
      
      } catch (error) {
        console.error('\x1b[31m\x1b[1m%s\x1b[0m',error.message)
      }
      
      this.#readCommandLine.close()

    })
    this.#readCommandLine.on("close", () => process.exit(0))
  }
}


// Reverse = "\x1b[7m" switch background and foreground
// Bright = "\x1b[1m" sets bold and bright color
// Underscore = "\x1b[4m"
//Foreground colors:
// Yellow = "\x1b[33m"
// Magenta = "\x1b[35m"
// Cyan = "\x1b[36m"
// Red = "\x1b[31m"


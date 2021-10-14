import PrettyPrinter from '../printer/PrettyPrinter.js'
import SentenceViewFactory from '../printer/views/SentenceViewFactory.js'
import Readline from '../parser/ReadLine.js'
import Document from '../parser/Document.js'

export default class Parser {
  #printer = new PrettyPrinter()

  constructor() {
    this.#main()
  }

  async #main() {
    try {
      const reader = new Readline()
      const document = new Document()
      document.parse(await reader.getDocument())
      this.#printer.print(document.getAllSentences())
    } catch (error) {
      const sentenceViewFactory = new SentenceViewFactory()
      sentenceViewFactory.createSentenceView(error).print(error.message)
      this.#main()
    }
  }
}
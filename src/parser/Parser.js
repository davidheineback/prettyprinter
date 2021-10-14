import PrettyPrinter from '../printer/PrettyPrinter.js'
import SentenceViewFactory from '../printer/views/SentenceViewFactory.js'
import Readline from './ReadLine.js'

export default class Parser {
  #printer = new PrettyPrinter()

  constructor() {
    this.#main()
  }

  async #main() {
    try {
      const reader = new Readline()
      this.#printer.print(await reader.getDocument())
    } catch (error) {
      const sentenceViewFactory = new SentenceViewFactory()
      sentenceViewFactory.createSentenceView(error).print(error.message)
      this.#main()
    }
  }
}

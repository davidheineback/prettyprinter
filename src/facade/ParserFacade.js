import parser from '@david-heineback/parser/src/index.js'
import PrettyPrinter from '../printer/PrettyPrinter.js'


const { Document, Readline } = parser

export default class ParserFacade {
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
      this.#printer.printError(error)
      this.#main()
    }
  }
}

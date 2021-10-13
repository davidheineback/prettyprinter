import PrettyPrinter from '../printer/PrettyPrinter.js'
import Readline from './ReadLine.js'

export default class Parser {
  #printer = new PrettyPrinter()
  #reader = new Readline()

  constructor() {
    this.#main()
  }

  async #main() {
    this.#printer.print(await this.#reader.getDocument())
  }
}

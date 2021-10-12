import SentenceViewStrategy from "./SentenceViewStrategy.js"

export default class ErrorView extends SentenceViewStrategy {
  
  constructor () {
    super()
    this.style = '\x1b[31m\x1b[1m%s\x1b[0m'
  }
}
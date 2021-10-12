import SentenceViewStrategy from "./SentenceViewStrategy.js"

export default class RegularSentenceView extends SentenceViewStrategy {
  
  constructor () {
    super()
    this.style = '\x1b[36m\x1b[1m%s\x1b[0m'
  }
}
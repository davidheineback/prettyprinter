import SentenceViewStrategy from "./SentenceViewStrategy.js"

export default class QuestionSentenceView extends SentenceViewStrategy {
  
  constructor () {
    super()
    this.style = '\x1b[35m\x1b[7m%s\x1b[0m'
  }
}
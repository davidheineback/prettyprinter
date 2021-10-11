import SentenceViewFacade from "./SentenceViewFacade.js"

export default class QuestionSentenceView extends SentenceViewFacade {
  
  constructor () {
    super()
    this.style = '\x1b[35m\x1b[7m%s\x1b[0m'
  }
}
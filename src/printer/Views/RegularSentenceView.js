import SentenceViewFacade from "./SentenceViewFacade.js"

export default class RegularSentenceView extends SentenceViewFacade {
  
  constructor () {
    super()
    this.style = '\x1b[36m\x1b[1m%s\x1b[0m'
  }
}
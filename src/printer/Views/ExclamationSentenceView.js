import SentenceViewFacade from "./SentenceViewFacade.js"


export default class ExclamationSentenceView extends SentenceViewFacade {
  constructor () {
    super()
    this.style = '\x1b[33m\x1b[1m\x1b[4m%s\x1b[0m'
  }
}
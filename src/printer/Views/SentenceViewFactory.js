import RegularSentence from '../../parser/sentence/RegularSentence.js'
import ExclamationSentence from '../../parser/sentence/ExclamationSentence.js'
import QuestionSentence from '../../parser/sentence/QuestionSentence.js'
import RegularSentenceView from './RegularSentenceView.js'
import ExclamationSentenceView from './ExclamationSentenceView.js'
import QuestionSentenceView from './QuestionSentenceView.js'
import SentenceViewStrategy from './SentenceViewStrategy.js'
import ErrorView from './ErrorView.js'

export default class SentenceViewFactory {
  
  constructor () {
  }

  createSentenceView(sentence) {
    switch(true) {
      case sentence instanceof RegularSentence:
        return new RegularSentenceView
      case sentence instanceof ExclamationSentence:
        return new ExclamationSentenceView
      case sentence instanceof QuestionSentence:
        return new QuestionSentenceView
      case sentence instanceof Error:
        return new ErrorView
      default:
        return new SentenceViewStrategy
    }
  }

  printDescriptionOfStyles() {
    console.log('')
    console.log('\x1b[36m\x1b[1m%s\x1b[0m', 'Regular sentence')
    console.log('\x1b[33m\x1b[1m\x1b[4m%s\x1b[0m', 'Exclamation')
    console.log('\x1b[35m\x1b[7m%s\x1b[0m', 'Question')
    console.log('\x1b[31m\x1b[1m%s\x1b[0m', 'Error')
    console.log('')
  }



}
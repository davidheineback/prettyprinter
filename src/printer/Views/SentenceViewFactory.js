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
}
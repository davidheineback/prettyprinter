import parser from '@david-heineback/parser/src/index.js'
import RegularSentenceView from './RegularSentenceView.js'
import ExclamationSentenceView from './ExclamationSentenceView.js'
import QuestionSentenceView from './QuestionSentenceView.js'
import SentenceViewStrategy from './SentenceViewStrategy.js'
import ErrorView from './ErrorView.js'

const { SentenceTypes } = parser

export default class SentenceViewFactory {

  constructor() {
  }

  createSentenceView(sentence) {
    switch (true) {
      case sentence instanceof SentenceTypes.RegularSentence:
        return new RegularSentenceView
      case sentence instanceof SentenceTypes.ExclamationSentence:
        return new ExclamationSentenceView
      case sentence instanceof SentenceTypes.QuestionSentence:
        return new QuestionSentenceView
      case sentence instanceof Error:
        return new ErrorView
      default:
        return new SentenceViewStrategy
    }
  }
}
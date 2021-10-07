import RegularSentence from '../../parser/sentence/RegularSentence.js'
import ExclamationSentence from '../../parser/sentence/ExclamationSentence.js'
import QuestionSentence from '../../parser/sentence/QuestionSentence.js'

export default class Styles {
  static printDescriptionOfStyles() {
    console.log('')
    console.log('\x1b[36m\x1b[1m%s\x1b[0m', 'Regular sentence')
    console.log('\x1b[33m\x1b[1m\x1b[4m%s\x1b[0m', 'Exclamation')
    console.log('\x1b[35m\x1b[7m%s\x1b[0m', 'Question')
    console.log('\x1b[31m\x1b[1m%s\x1b[0m', 'Error')
    console.log('')
  }

  static getStyleForTypeOf(sentence) {
    switch(true) {
      case sentence instanceof RegularSentence:
        return '\x1b[36m\x1b[1m%s\x1b[0m'
      case sentence instanceof ExclamationSentence:
        return '\x1b[33m\x1b[1m\x1b[4m%s\x1b[0m'
      case sentence instanceof QuestionSentence:
        return '\x1b[35m\x1b[7m%s\x1b[0m'
      default:
        return '\x1b[31m\x1b[1m%s\x1b[0m'
    }
  }

// Reverse = "\x1b[7m" switch background and foreground
// Bright = "\x1b[1m" sets bold and bright color
// Underscore = "\x1b[4m"
//Foreground colors:
// Yellow = "\x1b[33m"
// Magenta = "\x1b[35m"
// Cyan = "\x1b[36m"
// Red = "\x1b[31m"
}
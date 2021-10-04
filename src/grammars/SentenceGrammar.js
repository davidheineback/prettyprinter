import tokenizer from '@david-heineback/tokenizer'

const { Grammar } = tokenizer

export default class SentenceGrammar extends Grammar.Grammar {
  #regexWithTypes

  constructor () {
    super()
    this.#regexWithTypes = [
      {
        tokenType: 'WORD',
        regex: /^[\w|åäöÅÄÖ]+/g
      },
      {
        tokenType: 'DOT',
        regex: /^\./g
      },
      {
        tokenType: 'EXCLAMATION',
        regex: /^\!/g
      },
      {
        tokenType: 'QUESTION',
        regex: /^\?/g
      }
    ]
    this.setRegexExpressionsWithTypes(this.#regexWithTypes)
  }
}
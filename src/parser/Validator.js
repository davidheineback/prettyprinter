export default class Validator {
  constructor() {
    this.validTypes = ['DOT', 'EXCLAMATION', 'QUESTION']
  }

  sentenceContainsAtLeastOneWord() {
    //check if string qualify as sentenece
  }

  isValidEndToken(type) {
    return this.validTypes.includes(type)
  }

  isInValidEndOfSentence(newTokenType, previousTokenType) {
    return newTokenType === 'END' && !this.isValidEndToken(previousTokenType)
  }
}
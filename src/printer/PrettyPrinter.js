import SentenceViewFactory from './views/SentenceViewFactory.js'

export default class PrettyPrinter {
  #sentenceViewFactory = new SentenceViewFactory()

  print(sentences) {
    this.#sentenceViewFactory.createSentenceView().printDescriptionOfStyles()
    sentences.forEach((sentence, index) => {
      const sentenceView = this.#sentenceViewFactory.createSentenceView(sentence)
      sentenceView.print(sentence.getSentenceAsString(), index)
    })
  }

  printError(error) {
      this.#sentenceViewFactory.createSentenceView(error).print(error.message)
  }
}

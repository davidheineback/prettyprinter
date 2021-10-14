import SentenceViewFactory from './views/SentenceViewFactory.js'


export default class PrettyPrinter {
  print(sentences) {
    const sentenceViewFactory = new SentenceViewFactory()
    sentenceViewFactory.createSentenceView().printDescriptionOfStyles()
    sentences.forEach((sentence, index) => {
      const sentenceView = sentenceViewFactory.createSentenceView(sentence)
      sentenceView.print(sentence.getSentenceAsString(), index)
    })
  }
}

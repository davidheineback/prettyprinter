import Document from '../parser/Document.js'
import SentenceViewFactory from './views/SentenceViewFactory.js'


export default class PrettyPrinter {

  print(string) {
        const document = new Document()
        document.parse(string)
        const sentenceViewFactory = new SentenceViewFactory()
        sentenceViewFactory.createSentenceView().printDescriptionOfStyles()
        
        const sentences = document.getAllSentences()
        sentences.forEach((sentence, index) => {
          const sentenceView = sentenceViewFactory.createSentenceView(sentence)
          sentenceView.print(sentence.getSentenceAsString(), index)
        })
  }
}

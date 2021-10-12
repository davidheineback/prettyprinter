import Document from '../parser/Document.js'
import SentenceViewFactory from './Views/SentenceViewFactory.js'


export default class PrettyPrinter {

  print(string) {
      try {
        const document = new Document()
        document.parse(string)
        const sentenceViewFactory = new SentenceViewFactory()
        sentenceViewFactory.printDescriptionOfStyles()
        
        let sentences = document.getAllSentences()
        sentences.forEach((sentence, index) => {
          const sentenceView = sentenceViewFactory.createSentenceView(sentence)
          sentenceView.print(sentence.getSentenceAsString(), index)
        })
      
      } catch (error) {
        const sentenceViewFactory = new SentenceViewFactory()
        sentenceViewFactory.createSentenceView(error).print(error.message)
      }
  }
}

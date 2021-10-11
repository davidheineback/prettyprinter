import Document from '../parser/Document.js'
import Styles from './styles/Styles.js'
import SentenceViewFactory from './Views/SentenceViewFactory.js'


export default class PrettyPrinter {

  print(string) {
    Styles.printDescriptionOfStyles()
    
      try {
        const document = new Document()
        document.parse(string)
        
        let sentences = document.getAllSentences()
        sentences.forEach((sentence, index) => {
          const sentenceView = new SentenceViewFactory().createSentenceView(sentence)
          sentenceView.print(sentence.getSentenceAsString(), index)
        })
      
      } catch (error) {
        console.error(Styles.getStyleForTypeOf(error),error.message)
      }
  }
}

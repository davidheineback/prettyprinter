import Document from '../parser/Document.js'
import Styles from './styles/Styles.js'


export default class PrettyPrinter {

  print(string) {
    Styles.printDescriptionOfStyles()
    
      try {
        const document = new Document()
        document.parse(string)
        
        let sentences = document.getAllSentences()

        /// If getAllSentences returns array instead of object. remove .getSentences here.
        sentences.forEach((sentence, index) => {
          console.log(`Index ${index}:`)
          console.log(Styles.getStyleForTypeOf(sentence), sentence.getSentenceAsString())
          console.log('')
        })
      
      } catch (error) {
        console.error(Styles.getStyleForTypeOf(error),error.message)
      }
  }
}

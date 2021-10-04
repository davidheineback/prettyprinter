import tokenizer from '@david-heineback/tokenizer'
import SentenceGrammar from './grammars/SentenceGrammar.js'

const { Tokenizer } = tokenizer


const grammar = new SentenceGrammar()
const tokenize = new Tokenizer(grammar, 'H.!?') 

console.log(tokenize.getActiveToken())
tokenize.setActiveTokenToNext()
console.log(tokenize.getActiveToken())
tokenize.setActiveTokenToNext()
console.log(tokenize.getActiveToken())
tokenize.setActiveTokenToNext()
console.log(tokenize.getActiveToken())
tokenize.setActiveTokenToNext()
console.log(tokenize.getActiveToken())
tokenize.setActiveTokenToNext()
console.log(tokenize.getActiveToken())


import Parser from "../src/parser/Parser.js"

describe('Tests Parser', () => {


  it('TC1 - First Parser test', () => {
    const document = new Parser()
    const stringToTest = 'Hello World.'
    expect(document.parse().getType()).toEqual('Regular')
    expect(document.parse().getAll().length()).toEqual(1)
  })
})

// Klassen Document skall kunna
// Vi kan be om samtliga meningar oavsett typ. Vi får dem i samma följd som dokumentet 
  //TODO: create getAll()
// Vi kan be om alla vanliga meningar (som avslutas med punkt).
  //TODO: create getAllRegularSentences()
// Vi kan be om alla frågor (som avslutas med frågetecken).
  //TODO: create getAllQuestionSentences()
// Vi kan be om alla utrop (som avslutas med utropstecken).
  //TODO: create getAllExclamationSentences()


// Klasserna för “en vanlig mening”, uttrop och frågor skall alla ha funktionalitet för att:
    // stega igenom WORD-objekt som meningen består av.
    // Få hela meningen som en enda sträng med “rätt” avslutande tecken(.?!) 
    // de enskilda orden separeras med ett enda mellanslag oavsett vilka whitespace som användes i orginaltexten.

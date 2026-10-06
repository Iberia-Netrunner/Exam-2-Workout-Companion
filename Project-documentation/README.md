# Reflektion

## Kodförståelse och data flöde props

2026-10-04
Mitt mål är att uppfulla högsta betyg, där ska jag bland annad ha förutom huvudkomponenten app(), två fristående komponenter som tar emot data genom props. 
Då detta är en större och mer komplex kod upplever jag svårighet med att förstå data flödet, jag vet sedan tidigare att huvudkomponenten skickar data till barnkomponenten (skickar data nedåt) genom props, men det tar inte slut där då kommunikation går åt båda hållen.
Första steget innan jag påbörjar, är att repetera just detta och få en djupare förståelse. Jag förstår varför då det är bättre att använda Dynamisk kod än hårdkodad kod.
Det ger dig mer flexibilitet genom att göra komponenten återanvåndbar vs låst. 

2026-10-06
i min funktion WorkoutForm som tar emot data genom props, så sker det en kommunikationsvåg
tillbaka till föräldrern App. Detta sker bland annat när användaren skriver någonting i inputfältet, e.target.value spårar det och sedan skickar den tillbaka det värdet vilket gör att 
setText kör en state-uppdatering även såkallat omrendering. Och då blir text det nuvarande värder i input fältet.När man pratar om kommunication från barnet till föräldrern så är detta ett exempel.

State-uppdatering sker inte i knappen, knappen anropar funktionen men själva omrendering sker när state variabeln kör sin set-uppdatering.
Så själva setText är uppdatering som talar om för react att det har skett en förändring och omrendering behöver göras.

Jag avnände både AI och Youtube som källor för att få detta förklarat och få en helhetsbild.


## Date.now

2026-10-05
Functionen addExercise.
Vad ger en ny item i listan ett id? vad är Date.now?

Svar: Date.now, är en inbyggt funktion som gör att en ID är baserat på millisekunder, tex 1785933129000.
den är tidsbaserat och gör att ID alltid blir unikt.
     


## Kodgranskning/Feedback på AI-kod

2026-10-05
1. Koden försöker att lägga till en item/element
   men den använder push vilket gör att
   koden blir mutabel då man ändrar i arrayen direkt.
   Detta gör att react inte vet om att det har skett en förändring
   och då kör den ingen omrendering vilket resulterar i att inget händer.
   
Hur jag hade gjort detta:
const [todos, setTodos] = useState([
    "HTML",
    "CSS",
    "JS",
  ]);
//Skapa en kopia med hjälp av spread-operator och sedan lägg till ny item (detta fall text)
function addTodo(text) {
  setTodos ([...todos, text]);
  
}
Feedback: [todos.push (muterar)]->[setTodos([...todos, text]) (Kopierar och lägger till)]
   

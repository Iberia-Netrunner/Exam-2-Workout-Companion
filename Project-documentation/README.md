# Min-To-do app
Länk till Muntlig presentation:
https://funet-my.sharepoint.com/:v:/g/personal/3ggyhmu26_helmgo_folkuniversitetet_nu/IQDCs4_iZXDqRrD8N2y7EmLKAcwkqdNadCNIOX-hXLlb_a8?e=eufFh2&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D

## Reflektion

**Förstå dataflöde**
2026-10-04
Mitt mål är att uppfulla högsta betyg, där ska jag bland annad ha förutom huvudkomponenten app(), två fristående komponenter som tar emot data genom props. 
Då detta är en större och mer komplex kod upplevde jag svårighet med att förstå data flödet exakt, jag vet sedan tidigare att huvudkomponenten skickar data till barnkomponenten (skickar data nedåt) genom props, men det tar inte slut där då kommunikation går åt båda hållen.
Första steget innan jag påbörjar, är att repetera just detta och få en djupare förståelse. Jag förstår varför då det är bättre att använda Dynamisk kod än hårdkodad kod.
Det ger dig mer flexibilitet genom att göra komponenten återanvåndbar vs låst. 

2026-10-06
i min funktion WorkoutForm som tar emot data genom props, så sker det en kommunikationsvåg
tillbaka till föräldrern App. Detta sker bland annat när användaren skriver någonting i inputfältet, e.target.value spårar det och sedan skickar den tillbaka det värdet vilket gör att 
setText kör en state-uppdatering även såkallat omrendering. Och då blir text det nuvarande värder i input fältet.När man pratar om kommunication från barnet till föräldrern så är detta ett exempel.

State-uppdatering sker inte i knappen, knappen anropar funktionen men själva omrendering sker när state variabeln kör sin set-uppdatering.
Så själva setText är uppdatering som talar om för react att det har skett en förändring och omrendering behöver göras.
Jag avnände både AI och Youtube som källor för att få detta förklarat och få en helhetsbild.

**Centrera workout list**
Jag fick problem med att få workout objekten i mitten, jag frågade AI och det visade sig att
ul har som standard padding eller margin på vänster sida av ul, 40px. Detta skjuter listan till höger för att det ska finnas plats för punkter. Detta löste jag genom att sätta padding på 0. Då bröt den standard paddingen och listorna hamnade i mitten.

**Date.now**
2026-10-05
Functionen addExercise.
Vad ger en ny item i listan ett id? vad är Date.now?

Jag frågade AI om förklaring.
Svar: Date.now, är en inbyggt funktion som gör att en ID är baserat på millisekunder, tex 1785933129000.
den är tidsbaserat och gör att ID alltid blir unikt.



## Frågor om min kod

2026-10-8
Alla övningar och dess status håller useState reda på, varje träningspass sparas som ett
objekt i arrayen, varje object får en unik id med date.now och den får done:false status som standard i mitt fall.
När man klickar på done så körs funktionen toggledone, den kopierar objekten och sätter done till tvårtom mot vad den var innan. om den var true blir den till false och vice versa.
När set funktionen körs uppptäcker React att staten har fått ny array och då triggas en omrendering så att gränsnittet uppdateras direkt.

Man ska inte använda .push direkt på staten för att då känner inte react av att något har skett, det sker ingen re render och skärmen ritas inte om. Man skapar i stället alltid kopior och när vi lägger till så använder vi spread operator tex: ...exercises, nytt. Då kopierar den arrayen och lägger till nytt. När vi ska ta bort så använder vi filter för att hoppar över/utesluta det ID som vi vill radera. Detta gör att man aldrig muterar originalet utan den förblir immutable.


## Kodgranskning/Feedback på AI-kod

2026-10-05
Koden försöker att lägga till en item/element
men den använder push vilket gör att
koden blir mutabel då man ändrar i original arrayen direkt.
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
   

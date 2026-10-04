# Du ska kunna göra detta i din exam-app:

# Krav

## 1.Hantera uppgifter
Varje uppgift representerar en post i listan med en text och en status (klar/ogjord):

Skapa uppgift:
Användaren ska kunna skriva in en text i ett inputfält och lägga till den i listan via en knapp eller Enter-tangenten.

Indatavalidering: 
Tomma uppgifter (eller fält som bara innehåller mellanslag) ska inte gå att lägga till.

Markera som klar: 
Användaren ska kunna ändra status på en specifik uppgift från ogjord till klar (och gärna tillbaka).

Visuell åtskillnad: 
Gränssnittet ska tydligt visa skillnad på vad som är klart och vad som är ogjort (t.ex. genomstruken text, en bock eller dämpad färg).

Ta bort: 
Varje uppgift ska ha en radera-knapp som tar bort enbart den valda uppgiften medan resten av listan förblir intakt.

##  Reaktivitet och Gränssnitt
Dynamisk rendering: Listan ska uppdateras och ritas ut direkt på skärmen så fort data ändras, utan att webbläsarsidan laddas om.

Layout: Användaren ska mötas av ett städat och begripligt gränssnitt där knappar, textfält och listor är lätta att använda.

## GitHub & Versionshantering
Skapa ett eget, nytt och publikt GitHub-repo.
Gör minst 5 commits som visar hur applikationen byggts upp steg för steg under utvecklingen.
Projektet ska vara helt eget arbete.

# Skriv i README.md
Besvara följande delar kort med egna ord i ditt repo:

1. Frågor om koden (ca 2–4 meningar per fråga)
State-hantering: Hur håller din app reda på vilka uppgifter som finns och om de är klara? Vad händer med gränssnittet när datan uppdateras?
Oföränderlighet (Immutability): Varför får man inte ändra en befintlig array direkt med t.ex. .push() i React? Hur gör du istället när du lägger till eller tar bort en uppgift?

Hur hittade du lösningar när du körde fast? (dokumentation, tutorials, Google, AI …)
Om du använde AI: ett exempel på prompt/utmaning där du anpassade koden så den passade din app.
Muntligt i VS Code (inte webbläsar-demo som enda bevis):

## Kodgranskning/Feedback på Ai-Kod
Nedan är en funktion från en annan utvecklares lösning. Klistra inte in den i din app, utan förklara i din README vad som är felaktigt med koden i ett React-sammanhang och hur du skulle skriva om den för att den ska bli korrekt:

function addTodo(todos, text) {
  todos.push(text);
  return todos;
}
🔗 Koddetektiven - Läs denna innan du gör din kodgranskning.

3. Problemlösning & Reflektion (3–5 meningar)
Hur gjorde du när du körde fast eller stötte på ett problem? Om du använde verktyg som AI, Google eller React-dokumentationen: ge ett konkret exempel på hur du tog hjälp för att förstå och lösa problemet själv.

Metod — tre frågor:

Vad ska snutten göra? (lägg till / toggle / delete / stil)
Kan jag förklara varje del? Om nej: antingen lär du den eller stryker den.
Minst en konkret ändring innan den får komma in i din app.
Bra feedback pekar: FEEDBACK: [rad/idé] → [vad som måste ändras].

Vad det är: Granskning, inte “AI sa att det var best practice”.
Varför det finns: Du ska kunna sålla mutation, fel namn, extra API, kod utan key.
Om det saknas / vad det INTE är: Det är INTE att skriva en recension av verktyget. Det är INTE ett nytt React-API.

Använd Koddetektiv på Github.

## Betygskriterier
Godkänt (G)
Appen uppfyller kraven i specifikationen och fungerar utan krascher.
Repot är publikt med minst 5 commits och en ifylld README.md.
Muntligt (Vad koden gör): Du visar och förklarar i din video hur dina utvalda funktioner hänger ihop.

Väl godkänt (VG)
Alla krav för Godkänt (G) är uppfyllda.
I koden: Appen är uppdelad i minst två egna återanvändbara komponenter (utöver App) som kommunicerar via props (t.ex. separat komponent för inmatning och för enskild uppgift).
Muntligt (Varför och bakom kulisserna): Du förklarar hur Reacts reaktivitet fungerar under huven. Du förklarar varför kopior av state skapas vid uppdateringar och hur data flödar mellan dina komponenter.


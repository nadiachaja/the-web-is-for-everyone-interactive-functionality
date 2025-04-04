# Milledoni

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Millidoni is een bedrijf waar je cadeaus voor familie/vrienden/collega's of kennissen kan zoeken met behulp van een AI chatbox. Ze geloven dat een cadeau mensen dichter bij elkaar brengt.
Ik heb de homepagina, de detailpagina's van de cadeaus en de favorieten pagina waar je de cadeau's kan zien die je heb opgeslagen. <br>
[LIVE LINK](https://the-web-is-for-everyone-interactive-bcfb.onrender.com/)

Ik heb met het design een interface inventory gemaakt. Ik heb daarvan [custom properties](https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/main/public/stylesheet.css#L38-L128) voor alles gemaakt die heb ik in de root neergezet. Ik heb het eerste woord waarvoor het is en het tweede waar in de rij die zit of waavoor die verder bedoelt is. Ik heb de font ingeladen en in een [@font-face](https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/main/public/stylesheet.css#L1-L29) gezet. <br>
<img width="601" alt="interface inventory" src="https://github.com/user-attachments/assets/0ab7b7aa-7cc5-4da5-bd1f-c57611fe83a9" />


## Gebruik
Je komt op de homepagina waar je aan de linkerkant de chat heb waar je kan filteren voor een cadeau die je zoekt. Aan de rechterkant staan alle cadeau's waar je doorheen kan scrollen. Als je er doorheen scrollt blijft de chat en de header staan alleen de rechterkant waar de cadeau's staan beweegt dan. Elke cadeau heeft een bookmark en als je erop klikt krijg je eerst een loading en dan verandert de bookmark en staat die opgeslagen in je lijst.<br> 
<br>
Als je een cadeau ziet waar je meer informatie wil hebben dan klikt je op het cadeau en ga je naar de detailpagina van dat cadeau. Je ziet dan een beschrjving, meer informatie over het cadeau, waar je het cadeau kan kopen en wat je misschien ook nog leuk vind. <br>
<br>
In de header staat een button mijn lijst met als je erop klikt dat je dan naar je lijst gaat waar je opgeslagen cadeau's ziet met erboven het aantal opgelagen en als je niks heb opgeslagen dan staat er dat je geen favorieten gevonden en een button naar alle cadeau's. Ook zie je voor wie het cadeau is en zie je je vorige gespreken met de chat. 

## Kenmerken
Ik heb @supports toegevoegt zodat de website ook beter te gebruiken is voor oude browsers die bijvoorbeeld iets niet ondersteund van de styling. <br>
In deze dit stukje als de browser displat grid support dan voor display grid uit en wat onder staat als die het niet support voer dan display flex uit. 
https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/08a9fcec4d9a692786fb6559222ac45b2183b41b/public/styles.css#L592-L617
<br>
Ik heb alle media queries genest in het html element waar voor het bedoelt is. 
https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/08a9fcec4d9a692786fb6559222ac45b2183b41b/public/styles.css#L157-L174
<br>
**Responsive** <br>
Ik heb de detailpagina een voor desktop iets verandert je dan een vollere pagina heb en niet aan een kant niks hebt dat heb ik gedaan met media queries. 
<video src="https://github.com/user-attachments/assets/799b63e4-3aa3-4ae6-9870-28ce40eb9d1c" controls muted autoplay playsinline></video>
<br>
**Bookmark/Loading** <br>
Als je op de bookamrk klikt komt er een loading en daarna veranderd de bookmark.
<video src="https://github.com/user-attachments/assets/0a737548-22d7-4870-b0ad-59212da1a033" controls muted autoplay playsinline></video>
<br>
**opgeslagen/niet opgeslagen** <br>
Als je een cadeau hebt opgeslagen op de homepagina dan kan je in je lijst de opgeslagen cadeau's zien en als je niks heb dan staat er geen favorieten gevonden. 
<br>
Opgeslagen lijst 
<video src="https://github.com/user-attachments/assets/5fee3b2e-010c-45e2-b6c9-c427cefa9ee0" controls muted autoplay playsinline></video>
<br>
Niet opgeslagen lijst
<video src="https://github.com/user-attachments/assets/5a7d6662-0e16-4d43-8c22-97fcca93a1f0" controls muted autoplay playsinline></video>
<br>
Hier laat de de opgeslagen cadeau's zien of niet als er niks is opgeslagen.
https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/08a9fcec4d9a692786fb6559222ac45b2183b41b/views/favourite.liquid#L116-L128
<br>
**checkt opgeslagen cadeau's** <br>
Ik maak hier een functie aan om te checken welke cadeau's er zijn opgeslagen. Ik maakt dan een array aan voor alleen id's van de opgeslagen cadeau's en vergelijk elke cadeau met de lijst van de opgeslagen cadeau's geeft de opgeslagen cadeau' seen property = true en laat de aangepaste lijst zien. 
https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/08a9fcec4d9a692786fb6559222ac45b2183b41b/server.js#L54-L71
<br>
**lijst/favorieten pagina** <br>
Ik maakt een aparte pagina aan waar ik alleen mijn opgeslagen cadeau's op (id 9). Ik maakt daarna een lijst met unieke id's voor de cadeau's en haal dat id weer op. Ik laat daarna de lijst zien. 
https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/08a9fcec4d9a692786fb6559222ac45b2183b41b/server.js#L90-L111
https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/08a9fcec4d9a692786fb6559222ac45b2183b41b/views/favourite.liquid#L116-L128
<br>
**Post** <br>
Ik haal het id's van de opgeslagen cadeau's op en de status. Met de if else doe ik als het product nog niet gesaved is save het dan en als het wel gesaved is verwijder dat dan. Als dat gebeurt is dan komt blijf je bij het cadeau waar je de post heb gedaan. 
https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/08a9fcec4d9a692786fb6559222ac45b2183b41b/server.js#L135-L163

**Loading state maken en toggle bookmark** <br>
Ik haal eerst alle form op en loopt dan door ze allemaal heen en voeg dan een event listener toe. Deze code voorkomt dat wat de browser standaard doet met dat je ziet als je op iets klit en dat je de loading ziet. Dat doet die niet meer. Ik heb daarom zelf een loading toegevoegd op elke form met een eigen class. Als je op de bookmark klikt dat komt de loading in beeld en als alles geladen is dan komt de andere bookmark terug. <br>
<br>
Verder in de code ga ik verder met de post dat de bookmark veranderd als het gelukt is met een if else.  
https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/08a9fcec4d9a692786fb6559222ac45b2183b41b/public/index.js#L4-L38

**Loading css**
https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/7b10ae82833c95cec5efa7baf9ece880b2441c00/public/styles.css#L400-L416

**Card (cadeau's)** <br>
Ik maakt hier de kaartje van de cadeau's met de bookmark wanneer het veranderd van svg.
https://github.com/nadiachaja/the-web-is-for-everyone-interactive-functionality/blob/08a9fcec4d9a692786fb6559222ac45b2183b41b/views/partials/card.liquid#L2-L40

## Installatie
1. Download NodeJS
2. Fork deze repository
3. Clone het op je laptop
4. Open het in Github
5. Open de terminal in je Github
6. Typ in de terminal npm install om alles te installeren 
7. Typ in de terminal npm start om de server te starten
8. Je krijg een local host in de terminal klik daarop om je project te zien


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

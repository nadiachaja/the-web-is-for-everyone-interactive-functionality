


// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// API endpoints:
const likesBaseUrl = 'https://fdnd-agency.directus.app/items/milledoni_users/1'
const likesResponse = await fetch(likesBaseUrl)
const likesResponseJSON = await likesResponse.json()

const apiResponse = await fetch('https://fdnd-agency.directus.app/items/milledoni_products')
const apiResponseJSON = await apiResponse.json()




// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')


console.log('Let op: Er zijn nog geen routes. Voeg hier dus eerst jouw GET en POST routes toe.')

app.get('/', async function (request, response) {
  // Geef hier eventueel data aan mee
  response.render('index.liquid', { items: apiResponseJSON.data })
})

app.get('/cadeau/:slug', async function (request, response) {
  const slug = request.params.slug;
  const apiResponseCadeau = await fetch(`https://fdnd-agency.directus.app/items/milledoni_products?filter={"slug":"${slug}"}&limit=1`)

  const apiResponseCadeauJSON = await apiResponseCadeau.json()
  
  if(apiResponseCadeauJSON.data[0]){
    response.render('cadeau.liquid', { item: apiResponseCadeauJSON.data[0], items: apiResponseJSON.data})
  } else {
    response.render('404.liquid');
  }
})

app.get('/favourite', async function (request, response) {
  const apiResponseFavourite = await fetch(`https://fdnd-agency.directus.app/items/milledoni_products`)

  const apiResponseFavouriteJSON = await apiResponseFavourite.json()
  
  if(apiResponseFavouriteJSON.data[0]){
    response.render('favourite.liquid', { item: apiResponseFavouriteJSON.data[0], items: apiResponseJSON.data})
  } else {
    response.render('404.liquid');
  }
})

app.use((req, res, next) => {
  res.status(404).render("404.liquid")
})


app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})




/*
// Zie https://expressjs.com/en/5x/api.html#app.post.method over app.post()
app.post(…, async function (request, response) {

  // In request.body zitten alle formuliervelden die een `name` attribuut hebben in je HTML
  console.log(request.body)

  // Via een fetch() naar Directus vullen we nieuwe gegevens in

  // Zie https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch over fetch()
  // Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify over JSON.stringify()
  // Zie https://docs.directus.io/reference/items.html#create-an-item over het toevoegen van gegevens in Directus
  // Zie https://docs.directus.io/reference/items.html#update-an-item over het veranderen van gegevens in Directus
  await fetch(…, {
    method: …,
    body: JSON.stringify(…),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  // Redirect de gebruiker daarna naar een logische volgende stap
  // Zie https://expressjs.com/en/5x/api.html#res.redirect over response.redirect()
  response.redirect(303, …)
})
*/


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}/ jouw interactieve website bekijken.\n\nThe Web is for Everyone. Maak mooie dingen 🙂`)
})

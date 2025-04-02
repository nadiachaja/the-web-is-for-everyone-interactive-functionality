// We maken hieronder aannames over wat de browser ondersteunt
// Dus laten we deze eerst testen met Feature Detection
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection
if ('fetch' in window && 'DOMParser' in window) {

    // we halen alle formulieren op en zetten op elk formulier een eventlistener voor de submit

    const forms = document.querySelectorAll('form')
    forms.forEach(function (form) {
        form.addEventListener('submit', async function (event) {
            event.preventDefault()

            // const loadingWrapper = document.createElement("div");
            // loadingWrapper.className = "wrapper-loading";
            // const loadingOne = document.createElement("span");
            // loadingOne.className = "loading-one";
            // const loadingTwo = document.createElement("span");
            // loadingTwo.className = "loading-two";
            // const loadingThree = document.createElement("span");
            // loadingThree.className = "loading-three";

            // loadingWrapper.appendChild(loadingOne);
            // loadingWrapper.appendChild(loadingTwo);
            // loadingWrapper.appendChild(loadingThree);

            // form.closest('.card').appendChild(loadingWrapper);
            form.classList.add('is-loading')



            // Doe een fetch naar de server, net als hoe de browser dit normaal zou doen
            // Gebruik daarvoor het action en method attribuut van het originele formulier
            // Inclusief alle formulierelementen
            
            const res = await fetch(form.action, {
                method: form.method,
                body: new URLSearchParams(new FormData(form))
            }).then((response) => {
                form.classList.remove('is-loading')
                if (response.statusText == 'OK') {
                    const isSaved = form.querySelector('[name="liked_status"]')
                    if (isSaved.value) {
                        isSaved.value = ''
                    } else {
                        isSaved.value = 'saved'
                    }
                    form.querySelector('button').classList.toggle('is-saved')
                }
            })
        })
    })



    // document.addEventListener('submit', async function (event) {

    //     // Hou in een variabele bij welk formulier dat was
    //     const form = event.target

    //     // Als dit formulier geen data-enhanced attribuut heeft, doe dan niks
    //     // Dit doen we, zodat we sommige formulieren op de pagina kunnen 'enhancen'
    //     // Data attributen mag je zelf verzinnen; dit is dus niet iets speciaals
    //     // https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes
    //     if (!form.hasAttribute('data-enhanced')) {
    //         return
    //     }

    //     // Voorkom de standaard submit van de browser
    //     // Let op: hiermee overschrijven we de default Loading state van de browser...
    //     event.preventDefault()

    //     form.classList.add('loading');

    //     const loadingWrapper = document.createElement("div");
    //     loadingWrapper.className = "wrapper-loading";
    //     const loadingOne = document.createElement("span");
    //     loadingOne.className = "loading-one";
    //     const loadingTwo = document.createElement("span");
    //     loadingTwo.className = "loading-two";
    //     const loadingThree = document.createElement("span");
    //     loadingThree.className = "loading-three";

    //     loadingWrapper.appendChild(loadingOne);
    //     loadingWrapper.appendChild(loadingTwo);
    //     loadingWrapper.appendChild(loadingThree);



    //     // Doe een fetch naar de server, net als hoe de browser dit normaal zou doen
    //     // Gebruik daarvoor het action en method attribuut van het originele formulier
    //     // Inclusief alle formulierelementen
    //     await fetch(form.action, {
    //         method: form.method,
    //         body: new URLSearchParams(new FormData(form))
    //     }).then((response) => {
    //         if (response.statusText == 'OK') {
    //             form.querySelector('button').classList.toggle('is-saved')
    //         }
    //     })

    //     // De server redirect op de normale manier, en geeft HTML terug
    //     // (De server weet niet eens dat deze fetch via client-side JavaScript gebeurde)
    //     // const responseText = await response.text()



    //     // Normaal zou de browser die HTML parsen en weergeven, maar daar moeten we nu zelf iets mee
    //     // Parse de nieuwe HTML en maak hiervan een nieuw Document Object Model in het geheugen
    //     // const parser = new DOMParser()
    //     // const responseDOM = parser.parseFromString(responseText, 'text/html')

    //     // Show liked/unlinked state on success


    // })
}
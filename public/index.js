// We maken hieronder aannames over wat de browser ondersteunt
// Dus laten we deze eerst testen met Feature Detection
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection
if ('fetch' in window && 'DOMParser' in window) {

    // we halen alle formulieren op en zetten op elk formulier een eventlistener voor de submit

    const forms = document.querySelectorAll('form')
    forms.forEach(function (form) {
        form.addEventListener('submit', async function (event) {
            event.preventDefault()

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
}
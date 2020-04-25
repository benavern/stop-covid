/**
 * Stop the Covid epidemic on the internet!
 * 
 * @param {HTMLElement} element - the element of the page to look at recursively
 * 
 * @returns {void}
 */
function stopCovid(element) {
    // no elements ? we safe!
    if(!element) return

    if (element.hasChildNodes()) {
        // this element can't be contaminated, but its children can... 
        element.childNodes.forEach(stopCovid)
    } else if (element.nodeType === Node.TEXT_NODE) {
        // this element can be contaminated, administer the vaccine.
        element.textContent = element.textContent
            .replace(/(corona(virus)?|covid(-?19)?)/gi, '😷️')
    }
}

// The human body is vulnerable, so are the webpages bodies.
stopCovid(document.body)

// Hey, don't fool me, it's maybe spead out on its hat!
stopCovid(document.querySelector('title'))
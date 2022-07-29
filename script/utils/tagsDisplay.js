// La mise en place du block de tags

// DOM éléments
const btnIngredient = document.querySelector('#btn-ingredient')
const btnAppliance = document.querySelector('#btn-appliance')
const btnUstensil = document.querySelector('#btn-ustensil')
const modalIngredient = document.querySelector('#modal-ingredient')
const modalAppliance = document.querySelector('#modal-appliance')
const modalUstensil = document.querySelector('#modal-ustensil')
const closeIngredient = document.querySelector('#close-ingredient')
const closeAppliance = document.querySelector('#close-appliance')
const closeUstensil = document.querySelector('#close-ustensil')

/**
* OUVERTURE du block de la liste de tags : ingredients, appareils, ustensiles
**/

// INGREDIENTS
const onOpenTagIngredients = () => {
    modalIngredient.setAttribute('aria-hidden', 'false')
    modalIngredient.style.display = 'flex'
}

btnIngredient.addEventListener('click', onOpenTagIngredients)

// APPAREILS
const onOpenTagAppliances = () => {
    modalAppliance.setAttribute('aria-hidden', 'false')
    modalAppliance.style.display = 'flex'
}

btnAppliance.addEventListener('click', onOpenTagAppliances)

// USTENSILS
const onOpenTagUstensils = () => {
    modalUstensil.setAttribute('aria-hidden', 'false')
    modalUstensil.style.display = 'flex'
}

btnUstensil.addEventListener('click', onOpenTagUstensils)


/**
* FERMETURE du block de la liste de tags : ingredients, appareils, ustensiles
**/

// INGREDIENTS
const onCloseTagIngredients = () => {
    modalIngredient.setAttribute('aria-hidden', 'true')
    modalIngredient.style.display = 'none'
    onOpenTagIngredients.focus()
}

closeIngredient.addEventListener('click', onCloseTagIngredients)

// APPAREILS
const onCloseTagAppliances = () => {
    modalAppliance.setAttribute('aria-hidden', 'true')
    modalAppliance.style.display = 'none'
    onOpenTagAppliances.focus()
}
closeAppliance.addEventListener('click', onCloseTagAppliances)

// USTENSILS
const onCloseTagUstensils = () => {
    modalUstensil.setAttribute('aria-hidden', 'true')
    modalUstensil.style.display = 'none'
    onOpenTagUstensils.focus()
}
closeUstensil.addEventListener('click', onCloseTagUstensils)


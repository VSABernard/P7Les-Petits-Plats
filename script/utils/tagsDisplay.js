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
const tagInput = document.querySelectorAll('.tag-input')

/**
* OUVERTURE du block de la liste de tags : ingredients, appareils, ustensiles
* Si une modale est ouverte, les deux autres modales sont fermées automatiquement
**/

// INGREDIENTS

const onOpenTagIngredients = () => {
    modalIngredient.setAttribute('aria-hidden', 'false')
    modalIngredient.style.display = 'flex'
    modalAppliance.style.display = 'none'
    modalUstensil.style.display = 'none'
}

btnIngredient.addEventListener('click', onOpenTagIngredients)

// APPAREILS

const onOpenTagAppliances = () => {
    modalAppliance.setAttribute('aria-hidden', 'false')
    modalAppliance.style.display = 'flex'
    modalIngredient.style.display = 'none'
    modalUstensil.style.display = 'none'
}

btnAppliance.addEventListener('click', onOpenTagAppliances)

// USTENSILS

const onOpenTagUstensils = () => {
    modalUstensil.setAttribute('aria-hidden', 'false')
    modalUstensil.style.display = 'flex'
    modalIngredient.style.display = 'none'
    modalAppliance.style.display = 'none'
}

btnUstensil.addEventListener('click', onOpenTagUstensils)

/**
* FERMETURE du block de la liste de tags : ingredients, appareils, ustensiles
**/

// INGREDIENTS

const onCloseTagIngredients = () => {
    modalIngredient.setAttribute('aria-hidden', 'true')
    modalIngredient.style.display = 'none'
    btnIngredient.focus()
    resetInputTag()
}

closeIngredient.addEventListener('click', onCloseTagIngredients)

// APPAREILS

const onCloseTagAppliances = () => {
    modalAppliance.setAttribute('aria-hidden', 'true')
    modalAppliance.style.display = 'none'
    btnAppliance.focus()
    resetInputTag()
}
closeAppliance.addEventListener('click', onCloseTagAppliances)

// USTENSILS

const onCloseTagUstensils = () => {
    modalUstensil.setAttribute('aria-hidden', 'true')
    modalUstensil.style.display = 'none'
    btnUstensil.focus()
    resetInputTag()
}
closeUstensil.addEventListener('click', onCloseTagUstensils)

// Function qui reset la valeur dans l'input une fois la modale de tag est fermée

function resetInputTag() {  
    tagInput.forEach(element => {
        element.value = ''
    })
}
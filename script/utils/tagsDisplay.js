// La mise en place du block de tags
    
// Padding à enlever lors de la fermeture des modals pour retrouver la taille d'origine des boutons
const PADDING_BTN_TAG = 17                                          

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
let widthBtnIngredient = 0
let widthBtnAppliance = 0
let widthBtnUstensil = 0

/**
* OUVERTURE du block de la liste de tags : ingredients, appareils, ustensiles
* Si une modale est ouverte, les deux autres modales sont fermées automatiquement
**/

// INGREDIENTS

const onOpenTagIngredients = () => {

    // Ouverture de la modale 

    modalIngredient.setAttribute('aria-hidden', 'false')
    modalIngredient.style.display = 'flex'  
    onCloseModaleAppliances()
    onCloseModaleUstensils()
    closeIngredient.focus()
    
    /*
    ** Obtenir les infos sur la taille du bouton sans passer par le CSS
    ** Element.getBoundingClientRect() retourne un objet DOMRect fournissant des informations 
    ** sur la taille d'un élément et sa position relative par rapport à la zone d'affichage
    */

    const sizeInfoButton = btnIngredient.getBoundingClientRect()
    widthBtnIngredient = sizeInfoButton.width
   
    // Obtenir les infos sur la taille de la modale sans passer par le CSS

    const sizeInfoModal = modalIngredient.getBoundingClientRect()
    const widthModal = sizeInfoModal.width

    /*
    ** On change la taille du bouton pour qu'il ait la même taille que la modale
    ** afin de décaler les boutons situé à droite
    */

    btnIngredient.style.width = widthModal +'px'
}
btnIngredient.addEventListener('click', onOpenTagIngredients)

// APPAREILS

const onOpenTagAppliances = () => {

    // Ouverture de la modale

    modalAppliance.setAttribute('aria-hidden', 'false')
    modalAppliance.style.display = 'flex'
    onCloseModaleIngredients()
    onCloseModaleUstensils()
    closeAppliance.focus()

    // Obtenir les infos sur la taille du bouton sans passer par le CSS
    // Element.getBoundingClientRect() retourne un objet DOMRect fournissant des informations 
    // sur la taille d'un élément et sa position relative par rapport à la zone d'affichage

    const sizeInfoButton = btnAppliance.getBoundingClientRect()
    widthBtnAppliance = sizeInfoButton.width
   
    // Obtenir les infos sur la taille de la modale sans passer par le CSS

    const sizeInfoModal = modalAppliance.getBoundingClientRect()
    const widthModal = sizeInfoModal.width

    // On change la taille du bouton pour qu'il ait la même taille que la modale
    // afin de décaler les boutons situé à droite

    btnAppliance.style.width = widthModal +'px'
}
btnAppliance.addEventListener('click', onOpenTagAppliances)

// USTENSILS

const onOpenTagUstensils = () => {

    // Ouverture de la modale

    modalUstensil.setAttribute('aria-hidden', 'false')
    modalUstensil.style.display = 'flex'
    onCloseModaleIngredients()
    onCloseModaleAppliances()
    closeUstensil.focus()
}
btnUstensil.addEventListener('click', onOpenTagUstensils)

/**
* FERMETURE de la modale de la liste des tags : ingredients, appareils, ustensiles
**/

// INGREDIENTS

const onCloseModaleIngredients = () => {
    modalIngredient.setAttribute('aria-hidden', 'true')
    modalIngredient.style.display = 'none'    
    btnIngredient.focus()
    btnIngredient.style.width = (widthBtnIngredient - PADDING_BTN_TAG) +'px'        // Revenir à la taille d'origine du bouton lors de sa fermeture
    resetInputTag()}
closeIngredient.addEventListener('click', onCloseModaleIngredients)

// APPAREILS

const onCloseModaleAppliances = () => {
    modalAppliance.setAttribute('aria-hidden', 'true')
    modalAppliance.style.display = 'none'
    btnAppliance.focus()
    btnAppliance.style.width = (widthBtnAppliance - PADDING_BTN_TAG) +'px'          // Revenir à la taille d'origine du bouton lors de sa fermeture
    resetInputTag()}
closeAppliance.addEventListener('click', onCloseModaleAppliances)

// USTENSILS

const onCloseModaleUstensils = () => {
    modalUstensil.setAttribute('aria-hidden', 'true')
    modalUstensil.style.display = 'none'
    btnUstensil.focus()
    btnUstensil.style.width = (widthBtnUstensil - PADDING_BTN_TAG) +'px'          // Revenir à la taille d'origine du bouton lors de sa fermeture
    resetInputTag()}
closeUstensil.addEventListener('click', onCloseModaleUstensils)

/**
 *  Evenement BLUR pour fermer la modale de tag quand on clique à l'éxtérieur de la modale
 *  Si on click en dehors de la modale, la modale se ferme
*/ 

window.addEventListener('click', onBlurModal)

function onBlurModal(event) {
    if(event.target.id === ''){
        onCloseModaleIngredients() 
        onCloseModaleAppliances()
        onCloseModaleUstensils()
    }
}

// Function qui reset la valeur dans l'input une fois la modale de tag est fermée

function resetInputTag() {  
    tagInput.forEach(element => {
        element.value = ''
    })
}

/**  
 * Ajouter un listener pour écouter la demande de la fermeture de la modale lors de la séléction d'un tag
 * closeModale = nom personalisé donné dans index.js
**/
document.addEventListener('closeModale', () =>  {
    onCloseModaleIngredients()
    onCloseModaleAppliances()
    onCloseModaleUstensils()
}, false)

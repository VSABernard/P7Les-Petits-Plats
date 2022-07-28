// import { TagsCard } from "../templates/tags"

// La mise en place du block de tags

// DOM éléments
const btnIngredient = document.querySelector('#btn-ingredient')
const modalIngredient = document.querySelector('#modal-ingredient')

const onOpenTagIngredient = () => {
    modalIngredient.setAttribute('aria-hidden', 'false')
    modalIngredient.style.display = 'flex'
}


btnIngredient.addEventListener('click', onOpenTagIngredient)

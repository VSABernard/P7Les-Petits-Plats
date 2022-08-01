import { MainApp } from '../pages/index.js'

// La mise en place des filtres
class TagsCard {
    constructor() {
        this.$filter = document.createElement('section')
    }

    createTagsCard() {
        this.$filter.classList.add('tags-block')
        this.$filter.setAttribute('aria-labelledby', 'media-container')
        this.$filter.setAttribute('aria-haspopup', 'listbox')
        this.$filter.setAttribute('role', 'listbox')
        this.$filter.setAttribute('aria-hidden', 'false')
        this.$filter.setAttribute('aria-expanded', 'true')

        const tagBlock = `
            <section class="tags">
                <section class="modal" id="tag-ingredients">
                    <button class="btn-tag" id="btn-ingredient">
                        <p>Ingredients</p>
                        <i class="fa-solid fa-chevron-down" ></i>
                    </button>
                    <div class="modal-section" id="modal-ingredient" aria-hidden="true">
                        <input id="input-ingredient" class="tag-input" type="text" placeholder="Rechercher un ingredient">
                        <button class="close-tag" id="close-ingredient">
                            <i class="fa-solid fa-chevron-up" ></i>
                        </button>
                        <ul class="ul-tag" id="list-ingredient"></ul>                    
                    </div>
                </section>
                <section class="modal" id="tag-appliance">
                    <button class="btn-tag" id="btn-appliance">
                        <p>Appareils</p>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>  
                    <div class="modal-section" id="modal-appliance" aria-hidden="true">
                        <input id="input-appliance" class="tag-input" type="text" placeholder="Rechercher un appareil">
                        <button class="close-tag" id="close-appliance">
                            <i class="fa-solid fa-chevron-up" ></i>
                        </button>                          
                        <ul class="ul-tag" id="list-appliance"></ul>
                    </div>                      
                </section>
                <section class="modal" id="tag-ustensil">
                    <button class="btn-tag" id="btn-ustensil">
                        <p>Ustensiles</p>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="modal-section" id="modal-ustensil" aria-hidden="true">                    
                        <input id="input-ustensil" class="tag-input" type="text" placeholder="Rechercher un ustensile">
                        <button class="close-tag" id="close-ustensil">
                            <i class="fa-solid fa-chevron-up" ></i>
                        </button> 
                        <ul class="ul-tag" id="list-ustensil"></ul>
                    </div>
                </section>
            </section>
        `
        this.$filter.innerHTML = tagBlock
        return this.$filter
    }

    // Mettre à jour la liste de tags de l'ingredient

    updateListIngredients(ingredients) {
        const listIngredient = document.querySelector('#list-ingredient')

        ingredients.map((ingredient) => {
            let li = document.createElement('li')
            li.innerHTML = ingredient
            listIngredient.appendChild(li)        
        })
    }

    // Mettre à jour la liste de tags de l'appareil

    updateListAppliances(appliances) {
        const listAppliance = document.querySelector('#list-appliance')

        appliances.map((appliance) => {
            let li = document.createElement('li')
            li.innerHTML = appliance
            listAppliance.appendChild(li)        
        })
    }

    // Mettre à jour la liste de tags de l'ustensile
    
    updateListUstensils(ustensils) {
        const listUstensil = document.querySelector('#list-ustensil')

        ustensils.map((ustensil) => {
            let li = document.createElement('li')
            li.innerHTML = ustensil
            listUstensil.appendChild(li)        
        })
    }
}

export { TagsCard }
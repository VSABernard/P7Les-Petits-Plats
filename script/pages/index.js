import { SearchBanner } from '../templates/search.js'
import { TagsCard } from '../templates/tags.js'
import { RecipeCard } from '../templates/gallery.js'
import { Api } from '../api/api.js'


class MainApp {

    constructor() {
        this.api = new Api()
        this.$searchWrapper = document.querySelector('.search-section')
        this.$tagsWrapper = document.querySelector('.tags-section')
        this.$galleryWrapper = document.querySelector('.gallery-section')
        this.$errorWrapper = document.querySelector('.block-error')        
        this.$tagsCard
    }

    /**
     * Initiation de la page d'acceuil
     * Affichage de toutes les recettes
     * Alimentation des recerches spécialisées
     */ 

    async init() {
        // Appel des méthodes de l'Api
        // await this.api.getTotalReceipes()
        // await this.api.getRecipes()
        await this.api.getIngredients()
        await this.api.getAppliances()
        await this.api.getUstensils()

        await this.api.getRecipesByKeyword('')

        const recipes = await this.api.getRecipes()
        this.displayRecipes(recipes)

        // Mise en place la barre de recherche
        await this.displaySearch()

        // La mise en place la section des tags
        await this.displayTags()   

        // La mise à jour des listes de tag
        await this.updateTagsList()
    }

    /**
     * Traitement d'événement de la recherche par mot clé 
     */

    async onSearchByKeyword(event){

        //this fait référence a search input
        let search = event.target       
        let length  = search.value.length        

        console.log('recherche en cours :' + search.value)
        console.log('length :' + length)
        if (length < 3) { 
            const recipes = await this.api.getRecipes() 
            this.displayRecipes(recipes)                    // afficher la totalité de liste de recettes s'il y a moins de 3 caractères
            return                                          // pas de recherche si la longeur est <3
        }
        console.log('lancer la recherche!!!!')

        let recipesWithKeyword = await this.api.getRecipesByKeyword(search.value)
        this.displayRecipes(recipesWithKeyword)
    }

    /**
     * Afficher la barre de recherche
     */

    async displaySearch() {
        const templateSearch = new SearchBanner()
        this.$searchWrapper.appendChild(
            templateSearch.createSearchBanner()
        )
    }

    /**
     * Afficher les tags
     */

    async displayTags() {
        this.$tagsCard = new TagsCard()
        this.$tagsWrapper.appendChild(
            this.$tagsCard.createTagsCard()
        )
    }

    /**
     * Afficher la mise à jour de la liste de tags : ingredients, appareils, ustensiles
    */

    async updateTagsList() {
        let ingredients = await this.api.getIngredients()
        this.$tagsCard.updateListIngredients(ingredients)

        let appliance = await this.api.getAppliances()
        this.$tagsCard.updateListAppliances(appliance)

        let ustensil = await this.api.getUstensils()
        this.$tagsCard.updateListUstensils(ustensil)
    }

    /**
     * Afficher la gallerie des recettes
     * @param recipes
     */

    async displayRecipes(recipes) {
        this.$galleryWrapper.replaceChildren()                          // Enlever le contenu avant d'afficher un nouveau contenu
        
        // Par défaut cacher le message d'erreur 
        this.hideMsgError()
        
        // Afficher le message d'erreur sous la barre de recherche principale si aucun résultat trouvé
        if (recipes.length == 0) {
            this.showMsgError()

            return
        }

        for (let recipe of recipes) {
            const templateRecipe = new RecipeCard(recipe)
            this.$galleryWrapper.appendChild(
                templateRecipe.createRecipesCard()
            )
        } 
    }

    showMsgError() {
        this.$errorWrapper.style.display = 'block'

        // Afficher le message d'erreur sous la barre de recherche principale si aucun résultat trouvé
        const errorMsg = document.getElementById('error-msg')
        errorMsg.style.display = 'block'
    }

    hideMsgError() {
        this.$errorWrapper.style.display = 'none'

        // Par défaut cacher le message d'erreur sous la barre de recherche principale
        const errorMsg = document.getElementById('error-msg')
        if(errorMsg != null) {
            errorMsg.style.display = 'none'
        }
    }
}

const mainApp = new MainApp()
await mainApp.init()

// Ajouter le listener sur le champs de recherche

let searchInput = document.querySelector('#search-input')

searchInput.addEventListener('keyup',function(event) {
    console.log('input search')
    mainApp.onSearchByKeyword(event)
})

// Ajouter le listener sur le champs input dans le tag INGREDIENT

let inputIngredient = document.querySelector('#input-ingredient')

inputIngredient.addEventListener('keyup', function(event) {
    console.log('input tag')
    mainApp.onSearchByKeyword(event)
})

// Ajouter le listener sur le champs input dans le tag APPAREIL

let inputAppliance = document.querySelector('#input-appliance')

inputAppliance.addEventListener('keyup', function(event) {
    console.log('input tag')
    mainApp.onSearchByKeyword(event)
})

// Ajouter le listener sur le champs input dans le tag USTENSILES

let inputUstensil = document.querySelector('#input-ustensil')

inputUstensil.addEventListener('keyup', function(event) {
    console.log('input tag')
    mainApp.onSearchByKeyword(event)
})



export { MainApp }
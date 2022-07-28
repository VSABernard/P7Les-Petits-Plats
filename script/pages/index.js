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
        // await this.api.getAppliances()
        // await this.api.getUstensils()

        await this.api.getRecipesByKeyword('')

        const recipes = await this.api.getRecipes()
        this.displayRecipes(recipes)

        // Mise en place la barre de recherche
        await this.displaySearch()

        // La mise en place la section des tags
        await this.displayTags()   

        // 
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
     * @param 
     */
    async displayTags() {
        this.$tagsCard = new TagsCard()
        this.$tagsWrapper.appendChild(
            this.$tagsCard.createTagsCard()
        )
    }

    /**
     * Afficher la mise à jour de la liste de tags : ingredients, appareils, ustensiles
     * @param 
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
     * Afficher la liste des recettes
     * @param recipes
     */
    async displayRecipes(recipes) {
        this.$galleryWrapper.replaceChildren()                          // Enlever le contenu avant d'afficher un nouveau contenu
        
        for (let recipe of recipes) {
            const templateRecipe = new RecipeCard(recipe)
            this.$galleryWrapper.appendChild(
                templateRecipe.createRecipesCard()
            )
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

export { MainApp }
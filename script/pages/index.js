import { SearchBanner } from '../templates/search.js'
import { FilterCard } from '../templates/filter.js'
import { RecipeCard } from '../templates/gallery.js'
import { Api } from '../api/api.js'


class MainApp {

    constructor() {
        this.api = new Api()
        this.$searchWrapper = document.querySelector('.search-section')
        this.$filterWrapper = document.querySelector('.filter-section')
        this.$galleryWrapper = document.querySelector('.gallery-section')
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
        // await this.api.getIngredients()
        // await this.api.getAppliances()
        // await this.api.getUstensils()

        await this.api.getRecipesByKeyword('Coco')

        const recipes = await this.api.getRecipes()
        this.displayRecipes(recipes)

        // Mise en place la barre de recherche
        await this.displaySearch()

        // La mise en place la section des filtres
        this.displayFilters()   
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
     * Afficher les filtres
     * @param 
     */
    async displayFilters() {
        const templateFilter = new FilterCard()
        this.$filterWrapper.appendChild(
            templateFilter.createFilterCard()
        )
    }

    /**
     * Afficher la liste des recettes
     * @param recipes
     */
    async displayRecipes(recipes) {
        
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




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

    async init() {
        // Appel des méthodes de l'Api
        await this.api.getTotalReceipes()
        await this.api.getRecipes()
        await this.api.getIngredients()
        await this.api.getAppliances()
        await this.api.getUstensils()

        const recipes = await this.api.getRecipes()
        this.displayRecipes(recipes)

        // Mise en place la barre de recherche
        this.displaySearch()

        // La mise en place la section des filtres
        this.displayFilters()            
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
mainApp.init()

import { SearchBanner } from '../templates/search.js'
import { FilterCard } from '../templates/filter.js'
import { Api } from '../api/api.js'


class MainApp {

    constructor() {
        this.api = new Api()
        this.$searchWrapper = document.querySelector('.search-section')
        this.$filterWrapper = document.querySelector('.filter-section')
    }

    async init() {
        // Appel des méthodes de l'Api
        await this.api.getTotalReceipes()
        await this.api.getRecipes()
        await this.api.getIngredients()
        await this.api.getAppliances()
        await this.api.getUstensils()

        // Mise en place la barre de recherche
        const templateSearch = new SearchBanner()
        this.$searchWrapper.appendChild(
            templateSearch.createSearchBanner()
        )

        // La mise en place la section des filtres
        const templateFilter = new FilterCard()
        this.$filterWrapper.appendChild(
            templateFilter.createFilterCard()
        )    
    }
}

const mainApp = new MainApp()
mainApp.init()

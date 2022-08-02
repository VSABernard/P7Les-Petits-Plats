import { SearchBanner } from '../templates/search.js'
import { TagsCard, TagSelectedCard } from '../templates/tags.js'
import { RecipeCard } from '../templates/gallery.js'
import { Api } from '../api/api.js'

class MainApp {

    constructor() {
        this.api = new Api()
        this.$searchWrapper = document.querySelector('.search-section')
        this.$tagsSelectedWrapper = document.querySelector('.tag-selected-section')
        this.$tagsWrapper = document.querySelector('.tags-section')
        this.$galleryWrapper = document.querySelector('.gallery-section')
        this.$errorWrapper = document.querySelector('.block-error')        
        this.$tagsCard
        this.$tagsSelectedCard
        this.$tabTagsSelected = []
        this.$recipesAll = []
        this.$recipesFilteredByKeywords = []
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

        await this.api.getRecipesByKeyword('')

        this.$recipesAll = await this.api.getRecipes()
        this.displayRecipes(this.$recipesAll)

        // Mise en place la barre de recherche
        await this.displaySearch()

        // La mise en place la section des tags
        await this.displayTags()   

        // La mise à jour des listes de tag
        await this.updateTagsList(this.$recipesAll)
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
            this.displayRecipes(this.$recipesAll)                           // Afficher la totalité de liste de recettes s'il y a moins de 3 caractères
            this.updateTagsList(this.$recipesAll)                           // Remettre en totalité la liste des tags après une recherche sur la barre de recherche principale
            return                                                         // Pas de recherche si la longeur est <3
        }
        console.log('lancer la recherche!!!!')

        console.time('search')                
        let keyword = search.value                                          // afficher le nombre de millisecondes prises pour exécuter le code entre les appels de fonction

        // Obtenir la liste de recette qui contiennent à un mot-clé dans le titre, les ingrédients et la déscription des recette
        this.recipesFilteredByKeywords = await this.api.getRecipesByKeyword(keyword)
        console.timeEnd('search')

        this.displayRecipes(this.recipesFilteredByKeywords)

        this.updateTagsList(this.recipesFilteredByKeywords)                 // Alimentation la liste des tags suite à une recherche sur la barre de recherche principale
    }

    /**
     * Afficher la BARRE DE RECHERCHE
    */

    async displaySearch() {
        const templateSearch = new SearchBanner()
        this.$searchWrapper.appendChild(
            templateSearch.createSearchBanner()
        )
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

    /**
     * Afficher les TAGS buttons + modales
    */

    async displayTags() {
        this.$tagsCard = new TagsCard()
        this.$tagsWrapper.appendChild(
            this.$tagsCard.createTagsCard()
        )
    }

    /**
     * Afficher les tags selected
    */

    async displaySelectedTags() {
        this.$tagsSelectedWrapper.replaceChildren()                          // Enlever le contenu avant d'afficher un nouveau contenu
        
        for (let tagSelected of this.$tabTagsSelected) {
            const templatetagsSelected = new TagSelectedCard(tagSelected)
            this.$tagsSelectedWrapper.appendChild(
                templatetagsSelected.createTagSelectedCard()
            )
        } 

        // Ajouter un listener sur chaque tag selectionné pour pouvoir le fermer
        this.addSelectedTagListener()
    }

    /**
     * Ajouter un listerner sur le button de la fermeture du tag selectionné
    */ 
    async addSelectedTagListener() {
        const closeTagSelected = document.querySelectorAll('.close-tag-selected')
        // const modaleTagSelected = document.querySelectorAll('.tag-li')
        closeTagSelected.forEach ((elem) => {
            elem.addEventListener('click', (event) => {
                let type = event.currentTarget.getAttribute('data-type')
                let value = event.currentTarget.getAttribute('data-value')
                this.deleteSelectedTags(type, value)
                this.displaySelectedTags()
            })
        })
    }

    /**
     * Effacer un élément du tableau des tags sélectionnés
     * @param type type du tag (ex.ingredient)
     * @param value valeur du tag (ex.banane)
    */ 
    async deleteSelectedTags(type, value) {

        this.$tabTagsSelected = this.$tabTagsSelected.filter((tagSelected) => {
            
            // Si on trouve le tag sélectionné que l'on veut fermer dans le tableau, on le supprime du tableau
            if(tagSelected.type === type && tagSelected.value === value){
                return false
            } else {
                return true
            }
        })

        console.table(this.$tabTagsSelected)
    }

    /**
     * Afficher la mise à jour de la liste de tags : ingredients, appareils, ustensiles
     * @param mapRecipes liste de recette
    */

    async updateTagsList(mapRecipes) {
        let ingredients = await this.api.getIngredients(mapRecipes)
        this.$tagsCard.updateListIngredients(ingredients)           // afficher la totalité de liste
        this.addTagsIngredientListener()

        let appliance = await this.api.getAppliances(mapRecipes)
        this.$tagsCard.updateListAppliances(appliance)
        this.addTagsApplianceListener()

        let ustensil = await this.api.getUstensils(mapRecipes)
        this.$tagsCard.updateListUstensils(ustensil)
        this.addTagsUstensilListener()
    }

    /**
     * Traitement de la recherche par mot-clé sur le TAG
     * @param type type du tag (ex.ingredient)
     * @param value valeur du tag (ex.banane)
    */

    async onFilterTagByKeyword(event, type) {
        let search = event.target       
        let length  = search.value.length
        let keyword = search.value
        let ingredients = await this.api.getIngredients(this.$recipesAll)
        let appliance = await this.api.getAppliances(this.$recipesAll)
        let ustensil = await this.api.getUstensils(this.$recipesAll)

        if (length < 3) {
            switch(type){
            case 'ingredient' : 
                this.$tagsCard.updateListIngredients(ingredients)           // afficher la totalité de liste si la longeur < 3
                break
            case 'appliance' :
                this.$tagsCard.updateListAppliances(appliance)
                break
            case 'ustensil' :
                this.$tagsCard.updateListUstensils(ustensil)
                break
            }                  
            return                                                          // pas de recherche si la longeur est <3
        }
        
        // Filtrer la liste des tags aprés avoir sélectionné un tag spécifique

        switch(type){
        case 'ingredient' : 
            let ingredientsFiltered = ingredients.filter((ingredient) => {
                if (ingredient.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ){
                    return true
                } else {
                    return false
                }
            })
            this.$tagsCard.updateListIngredients(ingredientsFiltered)
            this.addTagsIngredientListener()                                            // ajouter le tag sélectionné sur la bar de tag-selected
            break
        case 'appliance' :    
            let appliancesFiltered = appliance.filter((appliance) => {
                if (appliance.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ){
                    return true
                } else {
                    return false
                }
            })
            this.$tagsCard.updateListAppliances(appliancesFiltered)
            this.addTagsApplianceListener()
            break
        case 'ustensil' :    
            let ustensilsFiltered = ustensil.filter((ustensil) => {
                if (ustensil.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ){
                    return true
                } else {
                    return false
                }
            })
            this.$tagsCard.updateListUstensils(ustensilsFiltered)
            this.addTagsUstensilListener()
            break
        }

    }    
    
    // Ajouter le listener sur chaque tag de la modale des ingredients

    addTagsIngredientListener(){
        const listTagsIngredient = document.querySelectorAll('#list-ingredient li')

        listTagsIngredient.forEach( function(elem) {
            elem.addEventListener('click', function(event) {
                console.log('tag ingredient :' + event.target.innerHTML)
                mainApp.addSelectedTag('ingredient', event.target.innerHTML)            // Ajouter le tag au tableau des tags selectionnés
                event.stopPropagation()                                                 
            },true)
        } )
    }

    // Ajouter le listener sur chaque tag de la modale des appareils

    addTagsApplianceListener(){
        const listTagsAppliance = document.querySelectorAll('#list-appliance li')

        listTagsAppliance.forEach( function(elem) {
            elem.addEventListener('click', function(event) {
                console.log('tag appliance :' + event.target.innerHTML)
                mainApp.addSelectedTag('appliance', event.target.innerHTML)            // Ajouter le tag au tableau des tags selectionnés
                event.stopPropagation()                                                 
            },true)
        } )
    }

    // Ajouter le listener sur chaque tag de la modale des ustensiles

    addTagsUstensilListener(){
        const listTagsUstensil = document.querySelectorAll('#list-ustensil li')

        listTagsUstensil.forEach( function(elem) {
            elem.addEventListener('click', function(event) {
                console.log('tag ustensil :' + event.target.innerHTML)
                mainApp.addSelectedTag('ustensil', event.target.innerHTML)            // Ajouter le tag au tableau des tags selectionnés
                event.stopPropagation()                                                 
            },true)
        } )
    }

    // La méthode qui ajoute un tag au tableau des tags selectionnés

    addSelectedTag(type, value){
        this.$tabTagsSelected.push({type, value})

        // On rafraîchit la liste des tags sélectionnés
        this.displaySelectedTags()
        //refreshTagListSelected
    }

    /**
     * ****************************************************************************************************
     * Afficher la GALLERIE des recettes
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
    mainApp.onFilterTagByKeyword(event, 'ingredient')
})

// Ajouter le listener sur le champs input dans le tag APPAREIL

let inputAppliance = document.querySelector('#input-appliance')

inputAppliance.addEventListener('keyup', function(event) {
    console.log('input tag')
    mainApp.onFilterTagByKeyword(event, 'appliance')
})

// Ajouter le listener sur le champs input dans le tag USTENSILES

let inputUstensil = document.querySelector('#input-ustensil')

inputUstensil.addEventListener('keyup', function(event) {
    console.log('input tag')
    mainApp.onFilterTagByKeyword(event, 'ustensil')
    
})












export { MainApp, mainApp }
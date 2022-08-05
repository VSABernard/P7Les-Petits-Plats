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
        
        await this.api.getRecipesByKeywordAlgo('')

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
            await this.displayRecipes(this.$recipesAll)                           // Afficher la totalité de liste de recettes s'il y a moins de 3 caractères
            await this.updateTagsList(this.$recipesAll)                           // Remettre en totalité la liste des tags après une recherche sur la barre de recherche principale
            return                                                                // Pas de recherche si la longeur est <3
        }
        console.log('lancer la recherche!!!!')

        console.time('search')                
        let keyword = search.value                                          // afficher le nombre de millisecondes prises pour exécuter le code entre les appels de fonction

        // Obtenir la liste de recette qui contiennent à un mot-clé dans le titre, les ingrédients et la déscription des recette
        this.recipesFilteredByKeywords = await this.api.getRecipesByKeywordAlgo(keyword)
        console.timeEnd('search')

        await this.displayRecipes(this.recipesFilteredByKeywords)

        await this.updateTagsList(this.recipesFilteredByKeywords)                 // Alimentation la liste des tags suite à une recherche sur la barre de recherche principale
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
        this.$tagsSelectedWrapper.replaceChildren()                          // Enlever le contenu du barre tag-selected avant d'afficher un nouveau contenu
        
        for (let tagSelected of this.$tabTagsSelected) {
            const templatetagsSelected = new TagSelectedCard(tagSelected)
            this.$tagsSelectedWrapper.appendChild(
                templatetagsSelected.createTagSelectedCard()
            )
        } 

        // Un listener sur chaque tag selectionné pour pouvoir le fermer
        this.addSelectedTagListener()
    }

    /**
     * Faire la recherche par tag
    */

    async onSearchByTags() {
        let recipesFilteredByTag = []
        recipesFilteredByTag = await this.api.getRecipesByTagSelectedAlgo(this.$tabTagsSelected, this.$recipesAll)    // Filtrer les recettes selon le tag sélectionné

        this.displayRecipes(recipesFilteredByTag)                                                    // Afficher les recettes qui correspondent aux tags sélectionnés
        await this.updateTagsList(recipesFilteredByTag)                                              // Alimentation la liste des tags suite à une recherche par le tag        
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
                this.onSearchByTags()                                                           // Afficher les recettes selon le tag restant                
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
        let ingredients = await this.api.getIngredientsAlgo(mapRecipes)
        this.$tagsCard.updateListIngredients(ingredients)           // afficher la totalité de liste
        this.addTagsIngredientListener()

        let appliance = await this.api.getAppliancesAlgo(mapRecipes)
        this.$tagsCard.updateListAppliances(appliance)
        this.addTagsApplianceListener()

        let ustensil = await this.api.getUstensilsAlgo(mapRecipes)
        this.$tagsCard.updateListUstensils(ustensil)
        this.addTagsUstensilListener()
    }

    /**
     * Traitement de la recherche par mot-clé sur l'input de TAG
     * @param type type du tag (ex.ingredient)
     * @param value valeur du tag (ex.banane)
    */

    async onFilterTagByKeyword(event, type) {
        let search = event.target       
        let length  = search.value.length
        let keyword = search.value
        let ingredients = await this.api.getIngredientsAlgo(this.$recipesAll)
        let appliance = await this.api.getAppliancesAlgo(this.$recipesAll)
        let ustensil = await this.api.getUstensilsAlgo(this.$recipesAll)

        if (length < 3) {
            switch(type){
            case 'ingredient' : 
                this.$tagsCard.updateListIngredients(ingredients)           // afficher la totalité de liste des tags si la longeur < 3
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
        /* eslint-disable */
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
    /* eslint-enable */
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

    /** La méthode qui AJOUTE UN TAG au tableau des tags selectionnés
     * @param type type du tag (ex.ingredient)
     * @param value valeur du tag (ex.banane)
    */

    addSelectedTag(type, value){
        let tabSelectedExist = this.$tabTagsSelected.filter((tagSelected) => {
            if ((tagSelected.type.toLowerCase().indexOf(type.toLowerCase()) > -1 ) && (tagSelected.value.toLowerCase().indexOf(value.toLowerCase()) > -1 )){
                return true
            } else {
                return false
            }
        })

        // Le tagSelected est déjà présent dans le tableau de tag sélectionné, inutile d'aller plus loin
        if(tabSelectedExist.length > 0) {
            return
        }

        // Ajouter le tag sélectetionné au tableau global
        this.$tabTagsSelected.push({type, value})
        
        // On rafraîchit la liste des tags sélectionnés
        this.displaySelectedTags()

        // Rechercher les recettes qui correspondent aux tags sélectionnés
        this.onSearchByTags()     

        /** 
         * Envoyer un événement pour fermer la modale de tag ouverte avec dispatchEvent
         * La méthode dispatchEvent() de EventTarget envoie un événement à l'objet, (de manière synchrone) 
         * en appelant les EventListener concernés dans l'ordre approprié
         * closeModale = nom personnalisé donné pour indiquer l'événement à executer
        **/
        const event = new Event('closeModale')
        document.dispatchEvent(event)    
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


// Ajouter le listener sur le champs de recherche principale

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
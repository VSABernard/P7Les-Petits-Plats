import { recipes } from '../data/recipes.js'

class Api {
    constructor() {
    }

    /**
     * Obtenir le nombre de recettes
     */

    async getTotalReceipes () {
        console.log('total recipes:' + recipes.length)
    }

    /**
     * Renvoyer la liste des recettes
     * @param
     * @return liste des recettes
     * https://contactmentor.com/javascript-map-array-of-objects/
     */

    async getRecipes() {

        const comparatorAllRecipes = (a,b) => {                                                     // Trier la liste de recettes par l'ordre alphabetique
            return a.name.localeCompare(b.name)                                                     // Ignorer les accents lors de tri
        }    
        recipes.sort(comparatorAllRecipes)

        return recipes
    }

    // -------------------------------------------------------------------------
    // Traiter les tableaux de données avec les BOUCLES NATIVES ( FOR )
    // -------------------------------------------------------------------------

    /**
     * Renvoyer la liste des recettes comportant le mot clé spécifique
     * La recherche se fait sur LA BARRE DE RECHERCHE PRINCIPALE selon le titre, les ingrédients, la description
     * @param keyword : le mot clé
     * @return liste des recettes
     */
    async getRecipesByKeywordAlgo(keyword) {
        let recipesWithKeywordAlgo = []
        const recipesLength = recipes.length

        for(let i = 0; i < recipesLength; i++) {
            
            let recipe = recipes[i]
            const name = recipe.name
            const ingredients = recipe.ingredients
            const description = recipe.description
            const appliance = recipe.appliance
            const ustensils = recipe.ustensils
            const indexOnName = name.toLowerCase().indexOf(keyword.toLowerCase())
            const indexOnDescription = description.toLowerCase().indexOf(keyword.toLowerCase())
            const indexOnAppliance = appliance.toLowerCase().indexOf(keyword.toLowerCase())

            // Récuperer les ingrédients contenant le mot clé avec la boucle "FOR"
            const filterIngredients = []
            for (let i = 0; i < ingredients.length; i++) {
                let elem = ingredients[i]
                if (elem.ingredient.toLowerCase().includes(keyword.toLowerCase())) {
                    filterIngredients.push(elem)
                }
            }

            // Récuperer les ustensils contenant le mot clé avec la boucle "FOR"
            const filterUstensils = []
            for (let i = 0; i < ustensils.length; i++) {
                let ustensil = ustensils[i]
                if (ustensil.toLowerCase().includes(keyword.toLowerCase())) {
                    filterUstensils.push(ustensil)
                }
            }

            // Si l'index est différent de -1 alors le mot clé a été trouvé
            if(indexOnName != -1 || filterIngredients.length > 0 || indexOnDescription != -1 || indexOnAppliance != -1 || filterUstensils.length > 0) {
                recipesWithKeywordAlgo.push(recipe)
            }
        }

        return recipesWithKeywordAlgo
    }

    /**
     * Renvoyer la liste des recettes comportant le tag spécifique
     * La recherche se fait avec DES TAGS selon les ingrédients, l'appareil et l'ustensile
     * @param mapTags : la liste des tags sélectionnés
     * @param mapRecipes : la liste des recettes 
     * @return liste des recettes
     */
    async getRecipesByTagSelectedAlgo(mapTags, mapRecipes) {
        /** 
        * Au début mapRecipesFilteredByTags contient toutes les recettes
        * Au fur et à mésure de recherche, un tableau temporaire (tempRecipesFound) est allimenté 
        * Il permet de limiter le nombre de rectte à rechercher         * 
        **/

        let mapRecipesFilteredByTags = mapRecipes                           // La liste de recettes avant le traitement de filtrage sur le TAG
        let tempRecipesFound = mapRecipes
        
        for (let i = 0; i < mapTags.length; i++) {
            let tag = mapTags[i]
            mapRecipesFilteredByTags = tempRecipesFound
            tempRecipesFound = []                                           // Remise à vide du tableau temporaire

            switch(tag.type) {
            case 'ingredient' :                    
                for (let i = 0; i < mapRecipesFilteredByTags.length; i++) {
                    let recipe = mapRecipesFilteredByTags[i]
                    for (let i = 0; i < recipe.ingredients.length; i++) {

                        let elem = recipe.ingredients[i]
                        let filterIngredients = []
                        
                        if (elem.ingredient.toLowerCase().includes(tag.value.toLowerCase())) {
                            filterIngredients.push(elem)
                        }

                        if(filterIngredients.length > 0) {
                            tempRecipesFound.push(recipe) 
                        }
                    } 
                }
                break
            case 'appliance' :
                for (let i = 0; i < mapRecipesFilteredByTags.length; i++) {
                    let recipe = mapRecipesFilteredByTags[i]
                                            
                    if (recipe.appliance.toLowerCase().includes(tag.value.toLowerCase())) {
                        tempRecipesFound.push(recipe) 
                    }
                }
                break
            
            case 'ustensil' :
                for (let i = 0; i < mapRecipesFilteredByTags.length; i++) {
                    let recipe = mapRecipesFilteredByTags[i]
                    for (let i = 0; i < recipe.ustensils.length; i++) {

                        let elem = recipe.ustensils[i]
                        let filterUstensils = []
                        
                        if (elem.ustensil.toLowerCase().includes(tag.value.toLowerCase())) {
                            filterUstensils.push(elem)
                        }

                        if(filterUstensils.length > 0) {
                            tempRecipesFound.push(recipe) 
                        }
                    }
                }
                break
            } 
        }

        mapRecipesFilteredByTags = tempRecipesFound
        return mapRecipesFilteredByTags
    }


    /**
     * Renvoyer la liste des ingredients pour être affichée dans le block de tag
     * @return tableau des ingrédients
    **/

    async getIngredientsAlgo(mapRecipes) {
        let ingredients = []
        const comparatorIngredient = (a,b) => {                                         // Trier la liste par l'ordre alphabetique
            return a.localeCompare(b)                                                   // Ignorer les accents lors de tri
        }

        for (let i = 0; i < mapRecipes.length; i++) {
            let recipe = recipes[i]
            for (let i = 0; i < recipe.ingredients.length; i++) {
                let elem = recipe.ingredients[i]
                if (!ingredients.includes(elem.ingredient)) {                           
                    ingredients.push(elem.ingredient)                                   // Rajouter un élémet dans un tableau
                }
            }
        }
        ingredients.sort(comparatorIngredient)
        console.log('ingredient :')
        console.table(ingredients)

        return ingredients
    }

    /**
     * Renvoyer la liste des appareils pour être affichée dans le block de tag
     * @return tableau des appareils
     */
    async getAppliancesAlgo(mapRecipes) {
        let appliances = []
        const comparatorAppliance = (a,b) => {
            return a.localeCompare(b)
        }

        for (let i = 0; i < mapRecipes.length; i++) {
            let recipe = recipes[i]
            if (!appliances.includes(recipe.appliance)) {
                appliances.push(recipe.appliance)
            } 
        }
        appliances.sort(comparatorAppliance)
        console.log('appliances :')
        console.table(appliances)

        return appliances
    }

    /**
     * Renvoyer la liste des ustensiles pour être affichée dans le block de tag
     * @return tableau des ustensiles
     */
    
    async getUstensilsAlgo(mapRecipes) {
        let ustensils = []
        const comparatorUstensil = (a,b) => {
            return a.localeCompare(b)
        }

        for (let i = 0; i < mapRecipes.length; i++) {
            let recipe = recipes[i]
            for (let i = 0; i < recipe.ustensils.length; i++) {
                let ustensil = recipe.ustensils[i]
                if (!ustensils.includes(ustensil)) {
                    ustensils.push(ustensil)
                }
            }
            ustensils.sort(comparatorUstensil)
            console.log('ustensils :')
            console.table(ustensils)

            return ustensils
        }
    }
}


export {Api}
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

    // ------------------------------------------------------------------------------
    // Traiter les tableaux de données avec la METHODE DE L'OBJET ARRAY (FILTER, MAP)
    // ------------------------------------------------------------------------------

    /**
     * Renvoyer la liste des recettes comportant le mot clé spécifique
     * La recherche se fait sur LA BARRE DE RECHERCHE PRINCIPALE selon le titre, les ingrédients, la description
     * @param keyword : le mot clé
     * @return liste des recettes
     */

    async getRecipesByKeyword(keyword) {

        let recipesWithKeyword = []
        
        recipesWithKeyword = recipes.filter((recipe) => {
            const name = recipe.name
            const ingredients = recipe.ingredients
            const description = recipe.description
            const appliance = recipe.appliance
            const ustensils = recipe.ustensils
            const indexOnName = name.toLowerCase().indexOf(keyword.toLowerCase())
            const indexOnDescription = description.toLowerCase().indexOf(keyword.toLowerCase())
            const indexOnAppliance = appliance.toLowerCase().indexOf(keyword.toLowerCase())


            // Récuperer les ingrédients contenant le mot clé avec la méthode de l'objet array "FILTER"
            const filterIngredients = ingredients.filter(elem => {
                return elem.ingredient.toLowerCase().includes(keyword.toLowerCase())                        //La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.
            })

            // Récuperer les ustensiles contenant le mot clé
            const filterUstensils = ustensils.filter(ustensils => {
                return ustensils.toLowerCase().includes(keyword.toLowerCase())
            })

            // Si l'index est différent de -1 alors le mot clé a été trouvé
            if(indexOnName != -1 || filterIngredients.length > 0 || indexOnDescription != -1 || indexOnAppliance != -1 || filterUstensils.length > 0) {
                return true
            } else {
                return false
            }

        })

        return recipesWithKeyword
    }

    /**
     * Renvoyer la liste des recettes comportant le tag spécifique
     * La recherche se fait avec DES TAGS selon les ingrédients, l'appareil et l'ustensile
     * @param mapTags : la liste des tags sélectionnés
     * @param mapRecipes : la liste des recettes 
     * @return liste des recettes
     */

    async getRecipesByTagSelected(mapTags, mapRecipes) {
        
        let mapRecipesFilteredByTags = mapRecipes                           // La liste de recettes avant le traitement de filtrage sur le TAG

        mapTags.map((tag) => {

            // console.log('mapTags :' + tag.value)
            // console.log('mapTags :' + tag.type)

            switch(tag.type) {
            case 'ingredient' :
                mapRecipesFilteredByTags = mapRecipesFilteredByTags.filter(recipe => {
                    const filterIngredients = recipe.ingredients.filter(elem => {
                        return elem.ingredient.toLowerCase().includes(tag.value.toLowerCase())
                    })

                    if(filterIngredients.length > 0) {
                        return true
                    } else {
                        return false
                    }                    
                }) 
                
                break
            case 'appliance' :
                mapRecipesFilteredByTags = mapRecipesFilteredByTags.filter(recipe => {
                    if(recipe.appliance.toLowerCase().indexOf(tag.value.toLowerCase()) != -1) {
                        return true
                    } else {
                        return false
                    }                    
                }) 
                break
            case 'ustensil' :
                mapRecipesFilteredByTags = mapRecipesFilteredByTags.filter(recipe => {
                    const filterUstensils = recipe.ustensils.filter(ustensils => {
                        return ustensils.toLowerCase().includes(tag.value.toLowerCase())
                    })

                    if(filterUstensils.length > 0) {
                        return true
                    } else {
                        return false
                    }                    
                }) 
                break
            }
        })

        return mapRecipesFilteredByTags
    }

    /**
     * Renvoyer la liste des ingredients pour être affichée dans le block de tag
     * @return tableau des ingrédients
     */

    async getIngredients(mapRecipes) {
        let ingredients = []
        const comparatorIngredient = (a,b) => {                                         // Trier la liste par l'ordre alphabetique
            return a.localeCompare(b)                                                   // Ignorer les accents lors de tri
        }

        mapRecipes.map((recipe) => {
            recipe.ingredients.map((elem) =>{
                if (!ingredients.includes(elem.ingredient)) {                           
                    ingredients.push(elem.ingredient)                                   // Rajouter un élémet dans un tableau
                }
            })
        })

        ingredients.sort(comparatorIngredient)
        console.log('ingredient :')
        console.table(ingredients)

        return ingredients
    }
    
    /**
     * Renvoyer la liste des appareils pour être affichée dans le block de tag
     * @return tableau des appareils
     */

    async getAppliances(mapRecipes) {
        let appliances = []
        const comparatorAppliance = (a,b) => {
            return a.localeCompare(b)
        }

        mapRecipes.map((recipe) => {
            if (!appliances.includes(recipe.appliance)) {
                appliances.push(recipe.appliance)
            }
            console.log('appliance: '+ recipe.appliance)
        })

        appliances.sort(comparatorAppliance)
        console.log('appliances :')
        console.table(appliances)

        return appliances
    }

    /**
     * Renvoyer la liste des ustensiles pour être affichée dans le block de tag
     * @return tableau des ustensiles
     */
    
    async getUstensils(mapRecipes) {
        let ustensils = []
        const comparatorUstensil = (a,b) => {
            return a.localeCompare(b)
        }

        mapRecipes.map((recipe) => {
            recipe.ustensils.map((ustensil) =>{
                if (!ustensils.includes(ustensil)) {
                    ustensils.push(ustensil)
                }
            })
        })

        ustensils.sort(comparatorUstensil)
        console.log('ustensils :')
        console.table(ustensils)

        return ustensils
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
                let elem = ustensils[i]
                if (elem.ustensils.toLowerCase().includes(keyword.toLowerCase())) {
                    filterUstensils.push(elem)
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
        let mapRecipesFilteredByTags = mapRecipes                           // La liste de recettes avant le traitement de filtrage sur le TAG

        const mapTagLength = mapTags.length

        for (let i = 0; i < mapTagLength; i++) {
            let tag = mapTags[i]
            let recipesFiltered = []
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
                            
                        }
                    } 

                }

            }
        }

    }

}

export {Api}
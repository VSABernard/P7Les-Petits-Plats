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

        for(let recipe of recipes){
            // console.log('recipe : ' + JSON.stringify(recipe))
            // console.log('id : ' + recipe.id)
            // console.log('name : ' + recipe.name)
        }

        recipes.map(({id, name}) => {
            // console.log('id: ' + id)
            // console.log('name: '+ name)
        })

        return recipes
    }

    /**
     * Renvoyer la liste des recettes comportant le mot clé spécifique
     * La recherche se fait sur le titre, les ingrédients, la description
     * @param keyword : le mot clé
     * @return liste des recettes
     */

    async getRecipesByKeyword(keyword) {

        let recipesWithKeyword = []

        // -------------------------------------------------------------------------
        // Traiter les tableaux de données avec la méthode de l'objet array "FILTER"
        // -------------------------------------------------------------------------
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

        // for(let recipe of recipesWithKeyword){
        //     // console.log('recipe : ' + JSON.stringify(recipe))
        //     // console.log('id : ' + recipe.id)
        //     // console.log('name : ' + recipe.name)
        // }

        return recipesWithKeyword
    }

    /**
     * Renvoyer la liste des ingredients pour être affichée dans le block de tag
     * @return tableau d'ingrédients
     */

    async getIngredients() {
        let ingredients = []
        const comparatorIngredient = (a,b) => {                                         // Trier la liste par l'ordre alphabetique
            return a.localeCompare(b)                                                   // Ignorer les accents lors de tri
        }

        recipes.map((recipe) => {
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
     * @return tableau d'appareils
     */

    async getAppliances() {
        let appliances = []
        const comparatorAppliance = (a,b) => {
            return a.localeCompare(b)
        }

        recipes.map((recipe) => {
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
    
    async getUstensils() {
        let ustensils = []
        const comparatorUstensil = (a,b) => {
            return a.localeCompare(b)
        }

        recipes.map((recipe) => {
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
}

export {Api}
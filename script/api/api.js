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

        recipesWithKeyword = recipes.filter((recipe) => {
            const name = recipe.name
            const indexOnName = name.toLowerCase().indexOf(keyword.toLowerCase())
            

            if(indexOnName != -1) {
                return true
            } else {
                return false
            }



        })

        for(let recipe of recipesWithKeyword){
            console.log('recipe : ' + JSON.stringify(recipe))
            console.log('id : ' + recipe.id)
            console.log('name : ' + recipe.name)
        }

        return recipesWithKeyword
    }





    /**
     * Renvoyer la liste des ingredients
     * @param 
     * @return liste d'ingrédients
     * https://contactmentor.com/javascript-map-array-of-objects/
     */
    async getIngredients() {
        recipes.map(({ingredients}) => { 
            ingredients.map(({ingredient}) =>{
                console.log('ingredient: '+ ingredient)
            })
        })
    }

    /**
     * Renvoyer la liste des appareils
     * @param 
     * @return liste d'appareils
     * https://contactmentor.com/javascript-map-array-of-objects/
     */
    async getAppliances() {
        recipes.map(({appliance}) => {
            console.log('appliance: '+ appliance)
        })
    }

    /**
     * Renvoyer la liste des ustensiles
     * @param 
     * @return liste d'ustensiles
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
     */
    async getUstensils() {
        recipes.map(({ustensils}) => {
            ustensils.forEach(ustensil => 
                console.log('ustensil: '+ ustensil))
        })
    }

}

export {Api}
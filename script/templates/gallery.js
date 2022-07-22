// La mise en place de la galerie de recette

class RecipeCard {
    constructor(recipe) {
        this._recipe = recipe

        this.$recipeCard = document.createElement('section')
        this.$recipeCard.classList.add('recipe-list')
    }

    createRecipesCard() {

        let ingredientCard = ''
        
        this._recipe.ingredients.forEach(ingredient => {
            // let unit = ''
            
            // if(ingredient.unit != undefined){
            //     unit = ingredient.unit
            // }

            ingredientCard += `<li>${ingredient.ingredient}`
            ingredientCard += `${ingredient.quantity || ingredient.unit ? ':' : ''} `
            ingredientCard += `${ingredient.quantity ? ingredient.quantity : ''} ${ingredient.unit ? ingredient.unit : ''}</li>`
        })
       

        let recipeCard = `
        <section class="recipe-card" role="dialog" aria-labelledby="dialog-recipe" 
        aria-describedby="dialog-recipe" aria-modal="true" aria-hidden="true"> 
            <img class="recipe-photo" src='../public/assets/imgRecipe.svg' aria-modal="true" aria-hidden="true" alt="Recipe's image">
            <article class="details-recipe">
                <header class="recipe-header">
                    <h2>${this._recipe.name}<h2>
                    <h3><i class="fa-regular fa-clock"></i>${this._recipe.time} min</h3>    
                </header>  
                <div class="recipe-infos">
                    <ul class="recipe-ingredients">
                    ${ingredientCard}
                    </ul>
                    <aside class="descriptions">${this._recipe.description}</aside>
                </div>      
            </article>
        </section>
        `
        this.$recipeCard.innerHTML = recipeCard
        return this.$recipeCard
    }
}

export { RecipeCard }
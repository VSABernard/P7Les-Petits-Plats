// La mise en place de la galerie de recette

class RecipeCard {
    constructor(recipe) {
        this._recipe = recipe

        this.$recipeCard = document.createElement('section')
        this.$recipeCard.classList.add('recipe-list')
    }

    createRecipesCard() {

        let ingredientCard = ''
        // Couper les textes longues dans la description
        let shortDescription = this._recipe.description.slice(0,158) + '...'

        this._recipe.ingredients.forEach(ingredient => {
            
            // Conversion les unités des ingrédients
            let unit = ingredient.unit
            if(ingredient.unit === 'grammes') {
                unit = 'g'
            } 
            if(ingredient.unit === 'cuillères à soupe') {
                unit = 'cuillères'
            }
            if(ingredient.unit === 'cuillère à soupe') {
                unit = 'cuillère'
            }

            ingredientCard += `<li><strong>${ingredient.ingredient}</strong>`
            ingredientCard += `<strong>${ingredient.quantity || unit ? ':' : ''}</strong> `
            ingredientCard += ` ${ingredient.quantity ? ingredient.quantity : ''} ${unit ? unit : ''}</li>`
        })
       

        let recipeCard = `
        <section class="recipe-card" role="dialog" aria-labelledby="dialog-recipe" 
        aria-describedby="dialog-recipe" aria-modal="true" aria-hidden="true"> 
            <img class="recipe-photo" src='../public/assets/imgRecipe.svg' aria-modal="true" aria-hidden="true" alt="Recipe's image">
            <article class="details-recipe">
                <header class="recipe-header">
                    <h2>${this._recipe.name}<h2>
                    <p><i class="fa-regular fa-clock"></i>${this._recipe.time} min</p>    
                </header>  
                <div class="recipe-infos">
                    <ul class="recipe-ingredients">
                    ${ingredientCard}
                    </ul>
                    <span class="descriptions">${shortDescription}</span>
                </div>      
            </article>
        </section>
        `
        this.$recipeCard.innerHTML = recipeCard
        return this.$recipeCard
    }
}

export { RecipeCard }
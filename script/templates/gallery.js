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
            <img class="recipe-photo" src='public/assets/imgRecipe.svg' aria-modal="true" aria-hidden="true" alt="Recipe's image" title="${this._recipe.description}">
            <article class="details-recipe">
                <header class="recipe-header">
                    <div class="recipe-title">${this._recipe.name}</div>
                    <div class="recipe-timer"><i class="fa-regular fa-clock"></i>${this._recipe.time} min</div>    
                </header>  
                <article class="recipe-infos">
                    <ul class="recipe-ingredients">
                    ${ingredientCard}
                    </ul>
                    <span class="descriptions" id="recipe-description">${shortDescription}</span>                    
                </article>      
            </article>
        </section>
        `
        this.$recipeCard.innerHTML = recipeCard
        return this.$recipeCard
    }
}

export { RecipeCard }
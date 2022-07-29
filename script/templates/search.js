// La mise en forme de la bannière de recherche

class SearchBanner {

    constructor() {        
    }

    createSearchBanner() {
        const $wrapperSearch = document.createElement('section')
        $wrapperSearch.classList.add('search-wrapper')

        const searchForm =`
        <section class="block-search">
            <input type="text" id="search-input" class="search-bar" data-error-visible="false" data-succes-visible="false" placeholder="Rechercher une recette" />
            <button class="btn-search" type="button">
                <img src="./public/assets/search.svg" class="input-icon" alt="icone de recherche">
            </button>
        </section>
        <section class="error-msg" data-error-visible="true" data-error="Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc...">
        </section> `
        
        $wrapperSearch.innerHTML = searchForm
        return $wrapperSearch
    }
}

export {SearchBanner}
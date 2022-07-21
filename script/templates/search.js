// La mise en forme de la bannière de recherche

class searchBanner {

    constructor() {
        
    }

    createSearchBanner() {
        const $wrapperSearch = document.createElement('section')
        $wrapperSearch.classList.add('search-wrapper')

        const searchForm =`
        <label for="search" class="search"></label>
        <input type="text" id="search-input" class="search-bar" placeholder="Rechercher une recette" />
        <button class="btn-search" type="button">
            <img src="./public/assets/search.svg" class="input-icon" alt="icone de recherche">
        </button>`

            $wrapperSearch.innerHTML = searchForm
            return $wrapperSearch
    }
}

export {searchBanner}
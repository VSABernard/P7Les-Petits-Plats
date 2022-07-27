// La mise en place des filtres
class FilterCard {
    constructor() {
        this.$filter = document.createElement('section')
    }

    createFilterCard() {
        this.$filter.classList.add('filter-block')
        this.$filter.setAttribute('aria-labelledby', 'media-container')
        this.$filter.setAttribute('aria-haspopup', 'listbox')
        this.$filter.setAttribute('role', 'listbox')
        this.$filter.setAttribute('aria-hidden', 'false')
        this.$filter.setAttribute('aria-expanded', 'true')

        const filterBlock = `
            <section class="filters">
                <button id="ingredient">
                    <p>Ingredients</p>
                    <i class="fa-solid fa-chevron-down" id="chevron"></i>
                </button>
                <button id="appliance">
                    <p>Appareils</p>
                    <i class="fa-solid fa-chevron-down" id="chevron"></i>
                </button>    
                <button id="ustensil">
                    <p>Ustensiles</p>
                    <i class="fa-solid fa-chevron-down" id="chevron"></i>
                </button>
            </section>
        `
        this.$filter.innerHTML = filterBlock
        return this.$filter
    }
}

export { FilterCard }
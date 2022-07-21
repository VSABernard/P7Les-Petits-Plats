import { searchBanner } from '../templates/search.js'

class MainApp {

    constructor() {
        this.$searchWrapper = document.querySelector('.search-section')
    }

    async init() {
        const template = new searchBanner()
        this.$searchWrapper.appendChild(
            template.createSearchBanner()
        )
    }
}

const mainApp = new MainApp()
mainApp.init()

export default class Recipe {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}
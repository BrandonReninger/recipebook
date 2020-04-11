export default class Recipe {
    constructor(data) {
        this.name = data.name;
        this.author = data.author;
        this.serving = data.serving;
        this.cookTime = data.cookTime
        // this.description = data.description;
        this.ingredients = data.ingredients;
        this.instructions = data.instructions;
        this.imageUrl = data.imageUrl

    }

    get Template() {
        return `'<p>${this.name}</p>'`
    }
}
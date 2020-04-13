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
        this.id = data.id || data._id
        this.upvotes = data.upvotes
        this.downvotes = data.downvotes

    }
    // <p><i class="far fa-arrow-alt-circle-down"></i><i class="far fa-arrow-alt-circle-up"></i><p>

    get Template() {
        return /*html*/ `
        <div class = "col-10 offset-1 py-2 mb-5 bg-light display ">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span onclick="app.recipesController.delete('${this.id}')">&times;</span>
        </button>
        <div class= "row">
        <div class = "col-4"><img class="img-fluid img mt-4" src="${this.imageUrl}"/>
        </div>
        <div class="col-8">
        <p class="recName mt-3 text-dark">${this.name}</p>
        <p><b>Source:</b> ${this.author}</p>
        <p><b>Servings:</b> ${this.serving}</p>
        <p><b>Time:</b> ${this.cookTime}</p>
        <p><b>Ingredients:</b> ${this.ingredients}</p>
        <p><b>Instructions:</b> ${this.instructions}</p>
        </div>
        </div>
        <div class ="row">
        <div class="col-12"> 
        <form onsubmit="app.commentsController.create(event, '${this.id}')">
        <input class="form-control mr-sm-2" type="text" name="body" placeholder="add thoughts ♥ ♥ ♥" aria-label="Search" >
        </form>
        <div class="row">
        <button class= "ml-3 mt-2 btn-warning comment"onclick="app.commentsController.getCommentsByPost('${this.id}')">Get comments</button>
        <div class="col-2 mt-2">User ID:</div>
        <div class="col-10" id="comments-${this.id}"></div>
        </div>
        </div>
        </div>
        </div>
     
     `
    }
}
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

    get Template() {
        return /*html*/ `
        <div class = "col-10 offset-1 py-2 mb-5 border shadow bg-light">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span onclick="app.recipesController.delete('${this.id}')">&times;</span>
           </button>
        <div class= "row">
        <div class = "col-4"><img class="img-fluid" src="${this.imageUrl}"/>
        </div>
        <div class="col-8"><p>${this.name}</p>
        <p>${this.author}</p>
        <p>${this.serving}</p>
        <p>${this.cookTime}</p>
        <p>${this.ingredients}</p>
        <p>${this.instructions}</p>
        </div>
        </div>
        <div class ="row">
        <div class="col-12"> 
        <form onsubmit="app.commentsController.create(event, '${this.id}')">
        <input class="form-control mr-sm-2" type="text" name="body" placeholder="add thoughts ♥ ♥ ♥" aria-label="Search" >
        </form>
        <div class="row">
        <div class="col-12" id="comments-${this.id}"></div>
        </div>
        </div>
        </div>
        </div>
     
     `
    }
}
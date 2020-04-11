import RecipesController from "./Controllers/RecipesController.js";
import CommentsController from "./Controllers/CommentsController.js"

class App {
  recipesController = new RecipesController();
  commentsController = new CommentsController();
}

window["app"] = new App();

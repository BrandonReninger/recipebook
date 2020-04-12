import RecipesController from "./Controllers/RecipesController.js";
import CommentsController from "./Controllers/CommentsController.js"
import UsersController from "./Controllers/UsersController.js"

class App {
  recipesController = new RecipesController();
  commentsController = new CommentsController();
  usersController = new UsersController();
}

window["app"] = new App();

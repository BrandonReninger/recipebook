import RecipesController from "./Controllers/RecipesController.js";

class App {
  recipesController = new RecipesController();
}

window["app"] = new App();

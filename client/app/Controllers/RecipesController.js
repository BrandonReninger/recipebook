import recipesService from "../Services/RecipesService.js";
import store from "../store.js";

//Private
function _draw() {
  let recipes = store.State.recipes;
  console.log(recipes);

  let template = ''

  recipes.forEach(recipe => template += recipe.Template)
  document.getElementById("recipes").innerHTML = template
}


//Public
export default class RecipesController {
  constructor() {
    store.subscribe("recipes", _draw);
    this.getRecipes()
    console.log("Controller created")

  }

  getRecipes() {
    recipesService.getRecipes()
  }
  create(event) {
    event.preventDefault()
    let formData = event.target
    let newRecipeObject = {
      name: formData.name.value,
      author: formData.author.value,
      serving: formData.serving.value,
      cookTime: formData.cookTime.value,
      // description: formData.description.value,
      ingredients: formData.ingredients.value,
      instructions: formData.instructions.value,
      imageUrl: formData.imageUrl.value,

    }
    recipesService.create(newRecipeObject)
    formData.reset()

    // @ts-ignore
    $('#add-recipe-modal').modal('toggle')

  }
  // addComment(id) {
  //   $('#add-comment-modal').modal('toggle')
  // }

  delete(id) {
    recipesService.delete(id)
  }
}

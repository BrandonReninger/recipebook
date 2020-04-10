import recipesService from "../Services/RecipesService.js";
import store from "../store.js";

//Private
function _draw() {
  let recipes = store.State.recipes;
  console.log(recipes);
}

//Public
export default class RecipesController {
  constructor() {
    store.subscribe("recipes", _draw);
  }

  create(event) {
    event.preventDefault()
    let formData = event.target
    let newRecipeObject = {
      tilte: formData.title.value,
      author: formData.author.value,
      serving: formData.serving.value,
      time: formData.time.value,
      description: formData.description.value,
      ingredients: formData.ingredients.value,
      instructions: formData.instructions.value,
      imgUrl: formData.imgUrl.value,

    }
    recipesService.create(newRecipeObject)
    formData.reset()

    // @ts-ignore
    $('#add-recipe-modal').modal('toggle')

    console.log("Controller created")
  }
}

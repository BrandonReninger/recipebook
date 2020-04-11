import Recipe from "../Models/Recipe.js"
import store from "../store.js";

// @ts-ignore
let _api = axios.create({
  baseURL: '//localhost:3001/api/posts',
  timeout: 10000
})
class RecipesService {
  getRecipes() {
    _api.get('')
      .then(res => {
        let recipes = res.data.data.map(rawRecipeData => new Recipe(rawRecipeData))
        store.commit('recipes', recipes)
      })
      .catch(err => console.error(err))
  }

  delete(id) {

    _api.delete(id)
      .then(res => {
        console.log(res)
        this.getRecipes()
      })
      .catch(err =>
        console.error(err))
  }

  create(newRecipeObject) {
    console.log(newRecipeObject)
    _api.post('', newRecipeObject)
      .then(res => {
        console.log(res.data.data);
        let newRecipe = new Recipe(res.data.data)
        let recipes = [newRecipe, ...store.State.recipes]
        store.commit('recipes', recipes)
      })
      .catch(err => console.error(err))

  }
  addComment(id, body) {
    _api.post("/comments", body)
    console.log(id, body);

    this.getRecipes()
  }
  constructor() {
    this.getRecipes()
  }

}

const service = new RecipesService();
export default service;

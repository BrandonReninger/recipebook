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



  create(newRecipeObject) {
    console.log(newRecipeObject)
    debugger
    _api.post('', newRecipeObject)
      .then(res => {
        console.log(res.data.data);
        let newRecipe = new Recipe(res.data.data)
        let recipes = [newRecipe, ...store.State.recipes]
        store.commit('recipes', recipes)
      })
      .catch(err => console.error(err))

  }
  constructor() {
    this.getRecipes()
  }

}

const service = new RecipesService();
export default service;

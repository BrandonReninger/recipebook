import User from "../Models/User.js"
import store from "../store.js"

// @ts-ignore
let _api = axios.create({
  baseURL: '//localhost:3001/api/',
  timeout: 3000,
})

class UsersService {
  async setActiveUser(id) {
    try {
      let res = await _api.get('users/' + id)
      let user = res.data.data.map(rawUserData => new User(rawUserData))
      store.commit('activeUser', user)
    } catch (error) {
      console.error(error)
    }
  }

  async getUsers() {
    try {
      let res = await _api.get('users')
      let users = res.data.data.map(rawUserData => new User(rawUserData))
      store.commit('users', users)
    } catch (err) {
      console.error(err)
    }
  }

  async getUserById(id) {
    try {
      let res = await _api.get('users/' + id)
      let user = res.data.data.map(rawUser => new User(rawUser))
      return user
    } catch (error) {
      return false
    }
  }
  async delete(id) {
    try {
      let res = await _api.delete('users/' + id)
      console.log(res)
      this.getUsers()
    } catch (err) {
      console.error(err)
    }
  }

  async create(newUserObj) {
    try {
      let res = await _api.post('users', newUserObj)
      console.log(res.data.data)
      this.getUsers()
    } catch (err) {
      console.log(err)
    }
  }
}

const service = new UsersService();
export default service;
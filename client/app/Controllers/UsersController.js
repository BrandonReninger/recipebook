import UsersService from "../Services/UsersService.js"
import store from "../store.js"

function _draw() {
  let users = store.State.users;
  console.log(users);

  let template = ''
  //TODO change template to only show one user, the active one
  users.forEach(user => template += user.Template)
  document.getElementById(`users`).innerHTML = template
}

//Public
export default class UsersController {
  constructor() {
    //no subscribers because we don't want to call any user fns when users are created or deleted
    //TODO we do want to make that user the active user, though. How do we do that?

    //setActiveUser(id)

  }

  setActiveUser(id, event) {
    // let activeUser = UsersService.getUserById(id)
    // if (!activeUser) {
    //   activeUser = this.create(event)
    // } 
    // UsersService.setActiveUser(activeUser.id)
  }
  getUsers() {
    UsersService.getUsers()
  }

  create(event) {
    event.preventDefault()
    let formData = event.target
    let newUserObj = {
      name: formData.name.value
    }

    //maybe put a search for existing user here and if ! create, then set as active user

    UsersService.create(newUserObj)
    formData.reset()

    // @ts-ignore
    $('#add-user-modal').modal('toggle')
  }

  delete(id) {
    UsersService.delete(id)
  }
}
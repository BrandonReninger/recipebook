export default class User {
  constructor(data) {
    this.name = data.name
    this.id = data.id || data._id
  }

  get Template() {
    return `<p>${this.name}</p>`
  }
}
export default class Comment {
  constructor(data) {
    this.body = data.body || "No comment"
    this.id = data.id || data._id
  }

  get Template() {
    return /*html*/`
    <p class="p-0">${this.body}</p>
    `
  }
}
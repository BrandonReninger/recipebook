export default class Comment {
  constructor(data) {
    this.body = data.body || "No comment"
    this.id = data.id || data._id
    this.post = data.post
    this.upvotes = data.upvotes
    this.downvotes = data.downvotes
    this.userId = data.userId.id || data.userId._id
    this.userName = data.userId.userName
  }

  get Template() {
    return /*html*/`
    <p class="p-0"><span><b>${this.userName}</b></span> ${this.body}</p>
    `
  }
}
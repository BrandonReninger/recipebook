import Comment from "../Models/Comment.js"
import store from "../store.js";

// @ts-ignore
let _api = axios.create({
  baseURL: '//localhost:3001/api/',
  timeout: 10000
})
class CommentsService {
  getComments() {
    _api.get('comments')
      .then(res => {
        let comments = res.data.data.map(rawCommentData => new Comment(rawCommentData))
        store.commit('comments', comments)
      })
      .catch(err => console.error(err))
  }

  delete(id) {
    _api.delete('comments/' + id)
      .then(res => {
        console.log(res)
        this.getComments()
      })
      .catch(err =>
        console.error(err))
  }

  create(newCommentObject) {
    console.log(newCommentObject)
    _api.post('comments', newCommentObject)
      .then(res => {
        console.log(res.data.data);
        this.getCommentsByPost(newCommentObject.post)
      })
      .catch(err => console.error(err))

  }

  async getCommentsByPost(id) {
    try {
      let res = await _api.get('posts/' + id + '/comments')
      let comments = res.data.map(rawCommentData => new Comment(rawCommentData))
      store.commit('comments', comments)
    } catch (error) {
      console.error(error);
    }
  }

  async getCommentsByUser(id) {
    try {
      let res = await _api.get('users/' + id + '/comments')
      let comments = res.data.map(rawCommentData => new Comment(rawCommentData))
      store.commit('comments', comments)
    } catch (error) {
      console.error(error);
    }
  }

  constructor() {
  }

}

const service = new CommentsService();
export default service;

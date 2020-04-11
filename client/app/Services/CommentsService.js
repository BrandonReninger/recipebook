import Comment from "../Models/Comment.js"
import store from "../store.js";

// @ts-ignore
let _api = axios.create({
  baseURL: '//localhost:3001/api/comments',
  timeout: 10000
})
class CommentsService {
  getComments() {
    _api.get('')
      .then(res => {
        let comments = res.data.data.map(rawCommentData => new Comment(rawCommentData))
        store.commit('comments', comments)
      })
      .catch(err => console.error(err))
  }

  delete(id) {
    _api.delete(id)
      .then(res => {
        console.log(res)
        this.getComments()
      })
      .catch(err =>
        console.error(err))
  }

  create(newCommentObject) {
    console.log(newCommentObject)
    _api.post('', newCommentObject)
      .then(res => {
        console.log(res.data.data);
        let newComment = new Comment(res.data.data)
        let comments = [newComment, ...store.State.comments]
        store.commit('comments', comments)
      })
      .catch(err => console.error(err))

  }
  constructor() {
    this.getComments()
  }

}

const service = new CommentsService();
export default service;

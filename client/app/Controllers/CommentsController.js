import commentsService from "../Services/CommentsService.js";
import store from "../store.js";

//Private
function _draw() {
  let comments = store.State.comments;
  console.log(comments);

  let template = ''

  comments.forEach(comment => template += comment.Template)
  document.getElementById(`comments-${comments[0].post}`).innerHTML = template
}


//Public
export default class CommentsController {
  constructor() {
    store.subscribe("comments", _draw);
    console.log("Comment Controller created")

  }

  getComments() {
    commentsService.getComments()
  }
  create(event, id) {
    event.preventDefault()
    let formData = event.target
    let newCommentObject = {
      body: formData.body.value,
      post: id
    }
    commentsService.create(newCommentObject)
    formData.reset()

    // @ts-ignore
    $('#add-comment-modal').modal('toggle')

  }

  getCommentsByPost(id) {
    commentsService.getCommentsByPost(id)
  }

  delete(id) {
    let confirm = window.confirm("Delete this comment?")
    if (confirm) {
      commentsService.delete(id)
    }
  }
}

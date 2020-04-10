import {
  dbContext
} from "../db/DbContext";
import {
  BadRequest
} from "../utils/Errors";

class PostService {
  async delete(id) {
    let post = await dbContext.Posts.findByIdAndDelete(id)
    return post
  }

  async getById(id) {
    let post = await dbContext.Posts.findById(id)
    if (!post) {
      throw new Error("bad id")
    }
    return post
  }

  async edit(id, body) {
    let post = await dbContext.Posts.findByIdAndUpdate(id, body, {
      new: true
    })
    return post
  }

  async create(body) {
    let post = await dbContext.Posts.create(body)
    return post
  }


  async getAll() {
    let posts = await dbContext.Posts.find()
    return posts
  }


  async find(query = {}) {
    let posts = await dbContext.Posts.find(query);
    return posts;
  }
  async findById(id) {
    let post = await dbContext.Posts.findById(id);
    if (!post) {
      throw new BadRequest("Invalid Id");
    }
    return post;
  }
}

export const postService = new PostService();
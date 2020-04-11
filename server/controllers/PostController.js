import express from "express";
import BaseController from "../utils/BaseController";
import {
  postService
} from "../services/PostService";
import {
  BadRequest
} from "../utils/Errors";
import {
  commentService
} from "../services/CommentService";

export class PostController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/comments", this.getCommentsByPostId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }

  async getCommentsByPostId(req, res, next) {
    try {
      let post = await commentService.find({
        post: req.params.id
      })
      res.send(post)
    } catch (error) {

    }
  }

  async delete(req, res, next) {
    try {
      let post = await postService.delete(req.params.id)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let post = await postService.edit(req.params.id, req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let post = await postService.getById(req.params.id)
      if (!post) {
        throw new BadRequest("Bad id")
      }
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      let posts = await postService.getAll()
      res.send({
        data: posts,
        message: "got posts"
      })
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let post = await postService.create(req.body)
      res.send({
        data: post,
        message: "post created"
      })
    } catch (error) {
      next(error);
    }
  }
}
import express from "express";
import BaseController from "../utils/BaseController";
import {
  postService
} from "../services/PostService";

export class PostController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {

    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
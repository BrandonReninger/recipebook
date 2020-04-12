import express from "express";
import BaseController from "../utils/BaseController";
import {
    commentService
} from "../services/CommentService";
import {
    BadRequest
} from "../utils/Errors";

export class CommentController extends BaseController {
    constructor() {
        super("api/comments");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }


    async delete(req, res, next) {
        try {
            let comment = await commentService.delete(req.params.id)
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            let comment = await commentService.edit(req.params.id, req.body)
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            let comment = await commentService.getById(req.params.id)
            if (!comment) {
                throw new BadRequest("Bad id")
            }
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    async getAll(req, res, next) {
        try {
            let comments = await commentService.getAll()
            res.send({
                data: comments,
                message: "got comments"
            })
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            let comment = await commentService.create(req.body)
            res.send({
                data: comment,
                message: "comment created"
            })
        } catch (error) {
            next(error);
        }
    }
}
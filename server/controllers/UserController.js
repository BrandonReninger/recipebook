import express from "express";
import BaseController from "../utils/BaseController";
import {
    userService
} from "../services/UserService";
import {
    BadRequest
} from "../utils/Errors";

export class UserController extends BaseController {
    constructor() {
        super("api/users");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)

    }

    async delete(req, res, next) {
        try {
            let user = await userService.delete(req.params.id)
            res.send(user)
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            let user = await userService.edit(req.params.id, req.body)
            res.send(user)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            let user = await userService.getById(req.params.id)
            if (!user) {
                throw new BadRequest("Bad id")
            }
            res.send(user)
        } catch (error) {
            next(error)
        }
    }

    async getAll(req, res, next) {
        try {
            let user = await userService.getAll()
            res.send({
                data: user,
                message: "got users"
            })
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            let user = await userService.create(req.body)
            res.send({
                data: user,
                message: "user created"
            })
        } catch (error) {
            next(error);
        }
    }
}
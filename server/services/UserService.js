import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class UserService {
    async delete(id) {
        let user = await dbContext.Users.findByIdAndDelete(id)
        return user
    }

    async getById(id) {
        let user = await dbContext.Users.findById(id)
        if (!user) {
            throw new BadRequest("bad id")
        }
        return user
    }

    async edit(id, body) {
        let user = await dbContext.Users.findByIdAndUpdate(id, body, {
            new: true
        })
        return user
    }

    async create(body) {
        let user = await dbContext.Users.create(body)
        return user
    }


    async getAll() {
        let users = await dbContext.Users.find()
        return users
    }


    async find(query = {}) {
        let users = await dbContext.Users.find(query);
        return users;
    }

}

export const userService = new UserService();
import mongoose from "mongoose";
import PostSchema from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const User = new Schema({
    userName: {
        Type: String
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

export default User;
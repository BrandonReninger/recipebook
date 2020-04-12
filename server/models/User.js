import mongoose from "mongoose";
import PostSchema from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const User = new Schema({
    userName: {
        type: String,
        required: true
    },
    post: {
        type: ObjectId,
    },
    comment: {
        type: ObjectId,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

export default User;
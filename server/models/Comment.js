import mongoose from "mongoose";
import PostSchema from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Comment = new Schema({
    body: [{
        type: String,
        required: true
    }],
    post: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    upvotes: [{
        type: ObjectId,
        ref: "User"
    }],
    downvotes: [{
        type: ObjectId,
        ref: "User"
    }]
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

export default Comment;
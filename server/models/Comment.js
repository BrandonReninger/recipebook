import mongoose from "mongoose";
import PostSchema from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Comment = new Schema({
    comment: [{
        type: String,
        required: true
    }],
    post: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: ObjectId
    },
    upvotes: [{
        type: ObjectId
    }],
    downvotes: [{
        type: ObjectId
    }]
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

export default Comment;
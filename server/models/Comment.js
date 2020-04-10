import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Comment = new Schema({
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

export default Comment;
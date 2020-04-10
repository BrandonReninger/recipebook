import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  serving: {
    type: String,
    required: true
  },
  cookTime: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

export default Post;
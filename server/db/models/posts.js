const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    tweet: {
      type: String,
      required: [true, "title is required"],
    },
    image: String,
    comments: {
      type: Array,
      default: [],
    },
    likes: {
      type: Array,
      default: [],
    },
    userPost: {
      type: Object,
      default: {},
    },
    userId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);

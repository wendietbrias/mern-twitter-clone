const postsModel = require("../db/models/posts");
const usersModel = require("../db/models/users");

const getAllPosts = async (req, res) => {
  const allPosts = await postsModel.find();

  try {
    res.status(200).json(allPosts);
  } catch (err) {
    console.log(err.message);
  }
};

const createPosts = async (req, res) => {
  if (!req.headers.userId) {
    return res.status(401).json({ msg: "You not authorized" });
  }

  const userId = req.headers.userId;

  const findAccount = await usersModel.findById({
    _id: userId,
  });

  const { tweet, image } = req.body;

  const initTweet = new postsModel({
    userId: userId,
    tweet: tweet,
    userPost: findAccount,
  });

  if (image) {
    initTweet.image = image;
  }

  try {
    const savedPosts = await initTweet.save();
    return res.status(200).json(savedPosts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const deletePosts = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ msg: "no found with this id" });
  }

  const deleted = await postsModel.deleteOne({ _id: id });
  return res.status(200).send(deleted);
};

const likePost = async (req, res) => {
  const findPost = await postsModel.findById(req.params.id);
  if (findPost.likes.find((item) => item._id === req.body?._id)) {
    const filterLikes = findPost.likes.filter((item) =>
      item._id !== req.body?._id ? item : ""
    );
    findPost.likes = filterLikes;

    const savedPost = await findPost.save();
    return res.status(200).json(savedPost);
  }

  findPost.likes = [...findPost.likes, req.body];
  const savedPost = await findPost.save();
  return res.status(200).json(savedPost);
};

module.exports = { getAllPosts, createPosts, deletePosts, likePost };

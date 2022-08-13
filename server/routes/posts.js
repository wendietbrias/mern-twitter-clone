const router = require("express").Router();
const {
  getAllPosts,
  createPosts,
  deletePosts,
  likePost,
} = require("../controller/posts");
const AuthMiddleware = require("../middleware/auth");

router.get("/", getAllPosts);
router.post("/create", AuthMiddleware, createPosts);
router.patch("/like/:id", likePost);
router.delete("/delete/:id", deletePosts);

module.exports = router;

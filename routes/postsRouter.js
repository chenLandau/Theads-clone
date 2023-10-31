import { Router } from "express";
import upload from "../middleware/multerMiddleware.js";

const router = Router();

import {
  getForYouPosts,
  getFollowingPosts,
  createPost,
  deletePost,
  getUserPosts,
  likePost,
  dislikePost,
  addPostReply,
  getSinglePost,
  getHomeFeedPosts,
  getPostLikes,
  likePostReply,
  dislikePostReply,
} from "../controllers/postsController.js";
import {
  validateNewPostInput,
  validateIdParam,
  validateLikePostInput,
  validatePostIdQuery,
  validateDeletePostInput,
} from "../middleware/validationMiddleware.js";

router.route("/homeFeed").get(getHomeFeedPosts);
router.route("/forYou").get(getForYouPosts);
router.route("/following").get(getFollowingPosts);
router.route("/user-posts").get(getUserPosts);
router.route("/").post(upload.single("file"), validateNewPostInput, createPost);
router.route("/addPostReply").post(addPostReply);
router.route("/likePostReply").put(likePostReply);
router.route("/dislikePostReply").put(dislikePostReply);

router.route("/").get(validatePostIdQuery, getSinglePost);
router
  .route("/")
  .delete(validatePostIdQuery, validateDeletePostInput, deletePost); //validate postId belong to userId
router
  .route("/likePost")
  .put(validatePostIdQuery, validateLikePostInput, likePost); //validate postId belong to userId
router.route("/dislikePost").put(validatePostIdQuery, dislikePost); //validate postId belong to userId
router.route("/post-likes").get(validatePostIdQuery, getPostLikes);
export default router;

import { Router } from "express";
import upload from "../middleware/multerMiddleware.js";

const router = Router();

import {
  createPost,
  deletePost,
  getUserProfilePosts,
  likePost,
  dislikePost,
  addPostReply,
  getSinglePost,
  getHomeFeedPosts,
  getPostLikes,
  likePostReply,
  dislikePostReply,
  deleteReply,
  getUserReplies,
} from "../controllers/postsController.js";
import {
  validateNewPostInput,
  validateIdParam,
  validateDislikeReplyInput,
  validateLikeReplyInput,
  validateLikePostInput,
  validatePostIdQuery,
  validateDeletePostInput,
} from "../middleware/validationMiddleware.js";

router.route("/homeFeed").get(getHomeFeedPosts);
router.route("/user-profile-posts").get(getUserProfilePosts);
router.route("/user-replies").get(getUserReplies);

router.route("/").post(upload.single("file"), validateNewPostInput, createPost);
router.route("/addPostReply").post(validatePostIdQuery, addPostReply);
router.route("/likePostReply").put(validateLikeReplyInput, likePostReply);
router
  .route("/dislikePostReply")
  .put(validateDislikeReplyInput, dislikePostReply);
router.route("/delete-reply").delete(deleteReply);
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

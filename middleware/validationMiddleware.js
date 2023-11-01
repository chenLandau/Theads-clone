import { body, param, validationResult, query } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import mongoose from "mongoose";
import User from "../models/UserModel.js";
import Post from "../models/PostModel.js";
import Reply from "../models/ReplyModel.js";
const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        // if (errorMessages[0].startsWith("no post")) {
        //   throw new NotFoundError(errorMessages);
        // }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateNewPostInput = withValidationErrors([
  //body("content").notEmpty().withMessage("content is requires"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid mongoDB id");
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("user_name")
    .notEmpty()
    .withMessage("user name is required")
    .custom(async (value) => {
      const isExistUserName = await User.findOne({ user_name: value });
      if (isExistUserName) throw new BadRequestError("user name already exist");
    }),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (value) => {
      const isExistEmail = await User.findOne({ email: value });
      if (isExistEmail) throw new BadRequestError("email already exist");
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

export const validateLoginInput = withValidationErrors([
  body("email").notEmpty().withMessage("email is required"),
  body("password").notEmpty().withMessage("password is required"),
]);

export const validateUpdateUserInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("user_name")
    .notEmpty()
    .withMessage("user name is required")
    .custom(async (user_name, { req }) => {
      const user = await User.findOne({ user_name });
      if (user && user._id.toString() !== req.userId)
        throw new BadRequestError("user name already exist");
    }),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.userId)
        throw new BadRequestError("email already exist");
    }),
]);

export const validateDeletePostInput = withValidationErrors([
  query("postId")
    .notEmpty()
    .custom(async (postId, { req }) => {
      const userId = req.userId;
      const user = await User.findById(userId);
      if (!user.posts.includes(postId)) {
        throw new BadRequestError("Post does not belong to user");
      }
    }),
]);
export const validateLikePostInput = withValidationErrors([
  query("postId")
    .notEmpty()
    .custom(async (postId, { req }) => {
      const userId = req.userId;
      const post = await Post.findById(postId);
      if (post.likes.includes(userId)) {
        throw new BadRequestError("You have already liked this post");
      }
    }),
]);
export const validateLikeReplyInput = withValidationErrors([
  query("replyId")
    .notEmpty()
    .custom(async (replyId, { req }) => {
      const userId = req.userId;
      const reply = await Reply.findById(replyId);
      if (reply.likes.includes(userId)) {
        throw new BadRequestError("You have already liked this post");
      }
    }),
]);
export const validateDislikeReplyInput = withValidationErrors([
  query("replyId")
    .notEmpty()
    .custom(async (replyId, { req }) => {
      const userId = req.userId;
      const reply = await Reply.findById(replyId);
      if (!reply.likes.includes(userId)) {
        throw new BadRequestError("Reply already liked by auth");
      }
    }),
]);
export const validatePostIdQuery = withValidationErrors([
  query("postId")
    .notEmpty()
    .custom(async (postId, { req }) => {
      const post = await Post.findById(postId);
      if (!post) {
        throw new BadRequestError("Post not found");
      }
    }),
]);
export const validateTargetUsername = withValidationErrors([
  query("username")
    .notEmpty()
    .custom(async (username, { req }) => {
      const targetUser = await User.findOne({ user_name: username });
      if (!targetUser) throw new BadRequestError("User not found");
    }),
]);
export const validateTargetUserId = withValidationErrors([
  query("targetUserId")
    .notEmpty()
    .custom(async (targetUserId, { req }) => {
      const targetUser = await User.findById(targetUserId);
      if (!targetUser) throw new BadRequestError("User not found");
    }),
]);

export const validateFollowUserInput = withValidationErrors([
  query("targetUserId")
    .notEmpty()
    .custom(async (targetUserId, { req }) => {
      const currentUserId = req.query;
      const targetUser = await User.findById(targetUserId);
      if (targetUserId === currentUserId)
        throw new BadRequestError("User can not follow himself");
      if (targetUser.followers.includes(currentUserId))
        throw new BadRequestError("User already followed by auth");
    }),
]);

export const validateUnfollowUserInput = withValidationErrors([
  query("targetUserId")
    .notEmpty()
    .custom(async (targetUserId, { req }) => {
      const currentUserId = req.userId;
      const targetUser = await User.findById(targetUserId);
      if (targetUserId === currentUserId)
        throw new BadRequestError("User can not unfollow himself");
      if (!targetUser) throw new BadRequestError("User not found");
      if (!targetUser.followers.includes(currentUserId))
        throw new BadRequestError("User does not followed by auth");
    }),
]);

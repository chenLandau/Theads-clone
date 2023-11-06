import Post from "../models/PostModel.js";
import User from "../models/UserModel.js";
import Reply from "../models/ReplyModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
import { getModifiedUsersById } from "../utils/userUtils.js";
import {
  getModifiedSinglePost,
  getModifiedPosts,
  getModifiedReplies,
  getModifiedSingleReply,
} from "../utils/postUtils.js";
import {
  addNewPostActivity,
  addReplyActivity,
  addPostLikeActivity,
} from "../utils/activityUtils.js";
import { ACTIVITY_TYPE } from "../utils/constants.js";

export const getHomeFeedPosts = async (req, res) => {
  const user = await User.findById(req.userId);
  const userFollowingIds = user.following;
  const usersFollowing = await User.find({ _id: { $in: userFollowingIds } });
  const postIds = usersFollowing.flatMap((user) => user.posts); // Replace 'posts' with your actual field name
  const followingPosts = await Post.find({ _id: { $in: postIds } });
  const forYouPosts = await Post.find({
    _id: { $nin: postIds },
    createdBy: { $ne: req.userId },
  });
  const followingModifiedPosts = await getModifiedPosts(
    followingPosts,
    req.userId
  );
  const forYouModifiedPosts = await getModifiedPosts(forYouPosts, req.userId);
  res.status(StatusCodes.OK).json({
    followingPosts: followingModifiedPosts,
    forYouPosts: forYouModifiedPosts,
  });
};

export const getForYouPosts = async (req, res) => {
  //delete
  const posts = await Post.find({ createdBy: { $ne: req.userId } }).sort({
    createdAt: -1,
  });
  const modifiedPosts = await getModifiedPosts(posts, req.userId);
  res.status(StatusCodes.OK).json({ posts: modifiedPosts });
};

export const getFollowingPosts = async (req, res) => {
  //delete
  const user = await User.findById(req.userId);
  const posts = await Post.find({ createdBy: req.userId }).sort({
    createdAt: -1,
  });
  res.status(StatusCodes.OK).json({ posts });
};
export const getUserProfilePosts = async (req, res) => {
  const username = req.query.username;
  const authUserId = req.userId;
  const targetUserId = await User.findOne({ user_name: username }).select(
    "_id"
  );
  const posts = await getUserThreads(username, authUserId, targetUserId);
  const postsWithReplies = await getUserReplies(
    username,
    authUserId,
    targetUserId
  );
  res.status(StatusCodes.OK).json({ posts, postsWithReplies });
};
export const getUserThreads = async (username, authUserId, targetUserId) => {
  const posts = await Post.find({ createdBy: targetUserId }).sort({
    createdAt: -1,
  });
  const modifiedPosts = await getModifiedPosts(posts, authUserId);
  return modifiedPosts;
};
export const getUserReplies = async (username, authUserId, targetUserId) => {
  const replies = await Reply.find({ createdBy: targetUserId });
  const modifiedReplies = [];
  for (const reply of replies) {
    const post = await Post.findOne({ _id: reply.postId });
    if (post) {
      const modifiedPost = await getModifiedSinglePost(post, authUserId);
      const modifiedReply = await getModifiedSingleReply(reply, authUserId);
      if (modifiedPost && modifiedReply) {
        modifiedPost.reply = modifiedReply;
        modifiedReplies.push(modifiedPost);
      }
    }
  }
  return modifiedReplies;
};

export const createPost = async (req, res) => {
  const post = { content: req.body.text, createdBy: req.userId };
  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    post.postImage = response.secure_url;
    post.postImagePublicId = response.public_id;
  }
  const _post = await Post.create(post);
  const user = await User.findByIdAndUpdate(req.userId, {
    $push: { posts: _post._id },
  });
  const newPost = await getModifiedSinglePost(_post, req.userId);
  addNewPostActivity(
    req.userId,
    user.followers,
    _post._id,
    ACTIVITY_TYPE.NEW_POST
  );
  res.status(StatusCodes.OK).json({ newPost: newPost });
};
export const getSinglePost = async (req, res) => {
  const postId = req.query.postId;
  const requestedPost = await Post.findById(postId);

  const replies = await Reply.find({
    _id: { $in: requestedPost.replies },
  }).sort({
    createdAt: -1,
  });
  const modifiedReplies = await getModifiedReplies(replies, req.userId);
  const modifiedPost = await getModifiedSinglePost(requestedPost, req.userId);
  res
    .status(StatusCodes.OK)
    .json({ post: modifiedPost, replies: modifiedReplies });
};

export const deletePost = async (req, res) => {
  const postId = req.query.postId;
  const removedPost = await Post.findByIdAndDelete(postId); //check if there is postImg and delete from cloudinary
  await User.findByIdAndUpdate(req.userId, { $pull: { posts: postId } });
  await Reply.deleteMany({ _id: { $in: removedPost.replies } });

  if (removedPost.postImage) {
    const response = await cloudinary.uploader.destroy(
      removedPost.postImagePublicId
    );
  }
  res.status(StatusCodes.OK).json({
    postId: postId,
  });
};
export const deleteReply = async (req, res) => {
  const replyId = req.query.replyId;
  const removedReply = await Reply.findByIdAndDelete(replyId); //check if there is postImg and delete from cloudinary
  if (!removedReply) throw new NotFoundError(`no reply with id ${replyId}`);
  const updatedPost = await Post.findByIdAndUpdate(removedReply.postId, {
    $pull: { replies: replyId },
  });
  const modifiedPost = await getModifiedSinglePost(updatedPost, req.userId);

  res.status(StatusCodes.OK).json({
    updatedPost: modifiedPost,
    replyId: removedReply._id,
  });
};
export const addPostReply = async (req, res) => {
  const postId = req.query.postId;
  const userId = req.userId;
  const reply = {
    postId: postId,
    createdBy: userId,
    content: req.body.replyContent,
  };
  const _reply = await Reply.create(reply);

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { $push: { replies: _reply._id } },
    { new: true }
  );
  const modifiedPost = await getModifiedSinglePost(updatedPost, userId);
  const modifyReply = await getModifiedSingleReply(_reply, userId);
  addReplyActivity(
    req.userId,
    updatedPost.createdBy,
    updatedPost._id,
    _reply._id,
    ACTIVITY_TYPE.POST_REPLY
  );
  res.status(StatusCodes.OK).json({
    reply: modifyReply,
    updatedPost: modifiedPost,
  });
};
export const likePostReply = async (req, res) => {
  const replyId = req.query.replyId;
  const userId = req.userId;

  const updatedReply = await Reply.findByIdAndUpdate(
    replyId,
    { $push: { likes: userId } },
    { new: true }
  );
  const modifiedReply = await getModifiedSingleReply(updatedReply, userId);
  //  addPostLikeActivity(
  //    userId
  //    updatedReply.createdBy,
  //    postId,
  //    ACTIVITY_TYPE.POST_LIKE
  //  );
  res.status(StatusCodes.OK).json({ updatedReply: modifiedReply });
};
export const dislikePostReply = async (req, res) => {
  const replyId = req.query.replyId;
  const userId = req.userId;

  const updatedReply = await Reply.findByIdAndUpdate(
    replyId,
    { $pull: { likes: userId } },
    { new: true }
  );
  const modifiedReply = await getModifiedSingleReply(updatedReply, userId);

  res.status(StatusCodes.OK).json({ updatedReply: modifiedReply });
};
export const dislikePost = async (req, res) => {
  const postId = req.query.postId;
  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    {
      $pull: { likes: req.userId },
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json({
    postId: postId,
    likesAmount: updatedPost.likes.length,
    isLikedByUser: false,
  });
};

export const likePost = async (req, res) => {
  const postId = req.query.postId;
  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    {
      $push: { likes: req.userId },
    },
    { new: true }
  );
  addPostLikeActivity(
    req.userId,
    updatedPost.createdBy,
    postId,
    ACTIVITY_TYPE.POST_LIKE
  );
  res.status(StatusCodes.OK).json({
    postId: postId,
    likesAmount: updatedPost.likes.length,
    isLikedByUser: true,
  });
};
export const getPostLikes = async (req, res) => {
  const postId = req.query.postId;
  const post = await Post.findById(postId).select("likes");
  const modifiedUsers = await getModifiedUsersById(post.likes);
  res.status(StatusCodes.OK).json({ users: modifiedUsers });
};

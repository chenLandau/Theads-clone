import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import UserActivity from "../models/UserActivityModel.js";
import { getModifiedUsers } from "../utils/userUtils.js";
import { ACTIVITY_TYPE } from "../utils/constants.js";
import {
  addUserActivity,
  getModifiedActivities,
} from "../utils/activityUtils.js";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
export const editUserProfile = async (req, res) => {
  const user = { ...req.body };
  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    user.avatar = response.secure_url;
    user.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(req.userId, user);
  res
    .status(StatusCodes.OK)
    .json({ msg: "updated user", updatedUser: updatedUser });
};

const getFollowStatus = async (currentUser, targetUser) => {
  return currentUser.following.includes(targetUser._id);
};

export const getAllUsers = async (req, res) => {
  const { search } = req.query;
  const queryObject = {
    _id: { $ne: req.userId },
  };

  if (search) {
    queryObject.$or = [
      { name: { $regex: search, $options: "i" } },
      { user_name: { $regex: search, $options: "i" } },
    ];
  }

  const targetUsers = await User.find(queryObject);
  const currentUser = await User.findById(req.userId);
  const modifiedUsers = await getModifiedUsers(currentUser, targetUsers);

  res.status(StatusCodes.OK).json({ users: modifiedUsers });
};
export const getTargetUser = async (req, res) => {
  const username = req.query.username;

  const targetUser = await User.findOne({ user_name: username });
  if (!targetUser) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: "User not found" });
  }
  if (targetUser._id !== req.userId) {
    addUserActivity(req.userId, targetUser._id, ACTIVITY_TYPE.PROFILE_VIEW); //await?
  }
  const userWithoutPassword = targetUser.toJSON();
  userWithoutPassword.followersAmount = userWithoutPassword.followers.length;
  userWithoutPassword.followingAmount = userWithoutPassword.following.length;
  delete userWithoutPassword.followers;
  delete userWithoutPassword.posts;
  delete userWithoutPassword.following;
  delete userWithoutPassword.replies;
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getUserFollowers = async (req, res) => {
  const userId = req.query.userId;
  const user = await User.findOne({ _id: userId });

  const followersIds = user.followers;
  const followers = await User.find({ _id: { $in: followersIds } });
  const enhancedUsers = [];
  for (const targetUser of followers) {
    const isFollow = await getFollowStatus(user, targetUser._id);

    const userWithInfo = {
      _id: targetUser._id,
      user_name: targetUser.user_name,
      name: targetUser.name,
      avatar: targetUser.avatar,
      followersNumber: targetUser.followers.length,
      isFollow: isFollow, // Add connectionStatus to user object
    };
    enhancedUsers.push(userWithInfo);
  }
  res.status(StatusCodes.OK).json({ users: enhancedUsers });
};

export const getUserActivities = async (req, res) => {
  const userActivity = await UserActivity.findOne({ userId: req.userId })
    .select("activities")
    // .sort({
    //   createdAt: -1,
    // })
    .limit(30);
  const { activities } = userActivity;
  const limitedActivities = activities.slice(0, 30);
  const modifiedActivities = await getModifiedActivities(limitedActivities);
  res.status(StatusCodes.OK).json({ activities: modifiedActivities });
};

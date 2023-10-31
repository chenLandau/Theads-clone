import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import { getModifiedUsersById } from "../utils/userUtils.js";
import { addUserActivity } from "../utils/activityUtils.js";
import { ACTIVITY_TYPE } from "../utils/constants.js";
export const followUser = async (req, res) => {
  const { targetUserId } = req.query;
  const updatedCurrentUser = await User.findByIdAndUpdate(
    req.userId,
    {
      $push: { following: targetUserId },
    },
    { new: true }
  );
  const updatedTargetUser = await User.findByIdAndUpdate(
    targetUserId,
    {
      $push: { followers: req.userId },
    },
    { new: true }
  );
  await addUserActivity(req.userId, targetUserId, ACTIVITY_TYPE.NEW_FOLLOW);
  res.status(StatusCodes.OK).json({
    following: updatedCurrentUser.following,
    targetUserId: targetUserId,
    targetUserFollowersAmount: updatedTargetUser.followers.length,
  });
};

export const unfollowUser = async (req, res) => {
  const { targetUserId } = req.query;
  const updatedCurrentUser = await User.findByIdAndUpdate(
    req.userId,
    {
      $pull: { following: targetUserId },
    },
    { new: true }
  );
  const updatedTargetUser = await User.findByIdAndUpdate(
    targetUserId,
    {
      $pull: { followers: req.userId },
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json({
    following: updatedCurrentUser.following,
    targetUserId: targetUserId,
    targetUserFollowersAmount: updatedTargetUser.followers.length,
  });
};

export const getUserConnections = async (req, res) => {
  const { targetUserId } = req.query;
  const targetUser = await User.findById(targetUserId);
  const followers = targetUser.followers;
  const following = targetUser.following;
  const modifiedFollowers = await getModifiedUsersById(followers);
  const modifiedFollowing = await getModifiedUsersById(following);
  res
    .status(StatusCodes.OK)
    .json({ followers: modifiedFollowers, following: modifiedFollowing });
};

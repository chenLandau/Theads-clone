import UserActivity from "../models/UserActivityModel.js";
import Activity from "../models/ActivityModel.js";
import { ACTIVITY_TYPE } from "./constants.js";
import User from "../models/UserModel.js";
import Post from "../models/PostModel.js";
export const addUserActivity = async (activityBy, activityTo, activityType) => {
  const activity = await Activity.create({
    activityBy: activityBy,
    activityType: activityType,
  });
  const userActivity = await UserActivity.findOneAndUpdate(
    { userId: activityTo },
    {
      $push: { activities: activity },
    }
  );
};

export const addNewPostActivity = async (
  activityBy,
  followersId,
  postId,
  activityType
) => {
  const activity = await Activity.create({
    activityBy: activityBy,
    activityType: activityType,
    postId: postId,
  });
  for (const followerId of followersId) {
    const userActivity = await UserActivity.findOneAndUpdate(
      { userId: followerId },
      {
        $push: { activities: activity },
      }
    );
  }
};

export const addReplyActivity = async (
  activityBy,
  activityTo,
  postId,
  replyId,
  activityType
) => {
  const activity = await Activity.create({
    activityBy: activityBy,
    activityType: activityType,
    postId: postId,
    replyId: replyId,
  });
  const userActivity = await UserActivity.findOneAndUpdate(
    { userId: activityTo },
    {
      $push: { activities: activity },
    }
  );
};
export const addPostLikeActivity = async (
  activityBy,
  activityTo,
  postId,
  activityType
) => {
  const activity = await Activity.create({
    activityBy: activityBy,
    activityType: activityType,
    postId: postId,
  });
  const userActivity = await UserActivity.findOneAndUpdate(
    { userId: activityTo },
    {
      $push: { activities: activity },
    }
  );
};
export const getModifiedActivities = async (activities) => {
  const modifiedActivities = [];
  for (const activity of activities) {
    let modifiedActivity;
    let userActivityBy = await User.findById(activity.activityBy);
    switch (activity.activityType) {
      case ACTIVITY_TYPE.PROFILE_VIEW:
      case ACTIVITY_TYPE.NEW_FOLLOW:
        modifiedActivity = {
          username: userActivityBy.user_name,
          userId: userActivityBy._id,
          avatar: userActivityBy.avatar,
          activityType: activity.activityType,
        };
        break;
      case ACTIVITY_TYPE.POST_LIKE:
      case ACTIVITY_TYPE.NEW_POST:
        let post = await Post.findById(activity.postId);
        modifiedActivity = {
          username: userActivityBy.user_name,
          userId: userActivityBy._id,
          avatar: userActivityBy.avatar,
          postId: post._id,
          postContent: post.content,
          postImage: post.postImage,
          activityType: activity.activityType,
        };
        break;
      case ACTIVITY_TYPE.POST_REPLY:
        let reply = await Post.findById(activity.postId);
        modifiedActivity = {
          username: userActivityBy.user_name,
          userId: userActivityBy._id,
          avatar: userActivityBy.avatar,
          postId: reply.postId,
          replyContent: reply.content,
          activityType: activity.activityType,
        };
        break;

      case ACTIVITY_TYPE.REPLY_LIKE:
        break;

      default:
        // modifiedActivity = activity;
        break;
    }
    if (modifiedActivity) modifiedActivities.push(modifiedActivity);
  }
  return modifiedActivities;
};

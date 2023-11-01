import User from "../models/UserModel.js";
export const convertTimePassed = (createdAt) => {
  const now = new Date();
  const timeDifference = now - createdAt;
  const minutesPassed = Math.floor(timeDifference / 60000);
  let timePassed = 0;
  if (minutesPassed <= 2) timePassed = "now";
  else if (minutesPassed <= 59) timePassed = minutesPassed + "m";
  else {
    const hoursPassed = Math.floor(minutesPassed / 60); // Convert to hours
    if (hoursPassed < 24) timePassed = hoursPassed + "h";
    else timePassed = Math.floor(hoursPassed / 24) + "d"; // Convert to days
  }
  return timePassed;
};

export const getModifiedPosts = async (posts, userId) => {
  const modifiedPosts = [];
  for (const post of posts) {
    const modifiedPost = await getModifiedSinglePost(post, userId);
    if (modifiedPost) modifiedPosts.push(modifiedPost);
  }
  return modifiedPosts;
};

export const getModifiedSinglePost = async (post, userId) => {
  const isLikedByUser = post.likes.includes(userId);
  // const repliesWithInfo = await repliesWithUserInfo(post.replies);
  try {
    const user = await User.findById(post.createdBy);
    const isAuthorizedUser = userId === user._id.toString();

    if (user) {
      return {
        _id: post._id,
        createdBy: post.createdBy,
        content: post.content,
        username: user.user_name,
        avatar: user.avatar,
        postImage: post.postImage,
        repliesAmount: post.replies.length,
        likesAmount: post.likes.length,
        isLikedByUser: isLikedByUser,
        isAuthorizedUser: isAuthorizedUser,
        timePassed: convertTimePassed(post.createdAt),
      };
    }
  } catch (error) {
    console.error("Error fetching user information:", error);
  }
};

export const getModifiedReplies = async (replies, userId) => {
  const modifiedReplies = [];
  for (const reply of replies) {
    const modifiedReply = await getModifiedSingleReply(reply, userId);
    modifiedReplies.push(modifiedReply);
  }
  return modifiedReplies;
};
export const getModifiedSingleReply = async (reply, userId) => {
  try {
    const user = await User.findById(reply.createdBy);
    const isLikedByUser = reply.likes.includes(userId);
    const isAuthorizedUser = userId === user._id.toString();

    if (user) {
      return {
        _id: reply._id,
        createdBy: reply.createdBy,
        content: reply.content,
        username: user.user_name,
        avatar: user.avatar,
        likesAmount: reply.likes.length,
        isLikedByUser: isLikedByUser,
        isAuthorizedUser: isAuthorizedUser,
        timePassed: convertTimePassed(reply.createdAt),
      };
    }
  } catch (error) {
    console.error("Error fetching user information:", error);
  }
};

// const userWithoutPassword = targetUser.toJSON();
// userWithoutPassword.followersAmount = userWithoutPassword.followers.length;
// userWithoutPassword.followingAmount = userWithoutPassword.following.length;
// delete userWithoutPassword.followers;
// delete userWithoutPassword.posts;
// delete userWithoutPassword.following;
// delete userWithoutPassword.replies;

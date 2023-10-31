import User from "../models/UserModel.js";

export const getModifiedUsers = async (currentUser, targetUsers) => {
  const modifiedUsers = [];
  for (const targetUser of targetUsers) {
    const modifiedUser = {
      _id: targetUser._id,
      user_name: targetUser.user_name,
      name: targetUser.name,
      avatar: targetUser.avatar,
    };
    modifiedUsers.push(modifiedUser);
  }
  return modifiedUsers;
};

export const getModifiedUsersById = async (targetUsersId) => {
  const modifiedUsers = [];
  const targetUsers = await User.find({ _id: { $in: targetUsersId } });

  for (const targetUser of targetUsers) {
    const modifiedUser = {
      _id: targetUser._id,
      user_name: targetUser.user_name,
      name: targetUser.name,
      avatar: targetUser.avatar,
    };
    modifiedUsers.push(modifiedUser);
  }
  return modifiedUsers;
};

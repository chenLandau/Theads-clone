import customFetch from "../utils/customFetch";

export const getUserConnections = async (userId) => {
  const { data } = await customFetch.get(
    `./connections/user-connections?targetUserId=${userId}`
  );
  return data;
};

export const getPostLikes = async (postId) => {
  const { data } = await customFetch.get(`./posts/post-likes?postId=${postId}`);
  return data;
};
export const getHomeFeedPosts = async () => {
  const { data } = await customFetch.get("./posts/homeFeed");
  return data;
};
export const getUserProfilePosts = async (username) => {
  const { data } = await customFetch.get(
    `./posts/user-profile-posts?username=${username}`
  );
  return data;
};

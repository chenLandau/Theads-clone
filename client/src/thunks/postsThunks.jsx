import customFetch from "../utils/customFetch";
import { actions } from "../features/post/postSlice";
import { DisplayPostMode } from "../features/post/postSlice";
export const fetchUserPosts = (username) => async (dispatch) => {
  const response = await customFetch.get(
    `/posts/user-posts?username=${username}`
  );
  dispatch(
    actions.fetchPosts({
      displayMode: DisplayPostMode.PROFILE,
      posts: response.data.posts,
    })
  );
};
export const likePost = (postId) => async (dispatch) => {
  const { data } = await customFetch.put(`/posts/likePost?postId=${postId}`);
  dispatch(actions.likePost(data));
};
export const dislikePost = (postId) => async (dispatch) => {
  const { data } = await customFetch.put(`/posts/dislikePost?postId=${postId}`);
  dispatch(actions.likePost(data));
};
export const createPost = (formData) => async (dispatch) => {
  const { data } = await customFetch.post("/posts", formData);
  dispatch(
    actions.createPost({
      newPost: data.newPost,
    })
  );
};
export const deletePost = (postId) => async (dispatch) => {
  const { data } = await customFetch.delete(`./posts/?postId=${postId}`);
  dispatch(actions.deletePost(data));
};
export const addPostReply =
  ({ postId, replyContent }) =>
  async (dispatch) => {
    const { data } = await customFetch.post(
      `/posts/addPostReply?postId=${postId}`,
      {
        replyContent: replyContent,
      }
    );
    dispatch(actions.addReply(data));
  };
export const likePostReply = (replyId) => async (dispatch) => {
  const { data } = await customFetch.put(
    `/posts/likePostReply?replyId=${replyId}`
  );
  dispatch(actions.likeReply(data));
};
export const dislikePostReply = (replyId) => async (dispatch) => {
  const { data } = await customFetch.put(
    `/posts/dislikePostReply?replyId=${replyId}`
  );
  dispatch(actions.likeReply(data));
};

export const deleteReply = (replyId) => async (dispatch) => {
  const { data } = await customFetch.delete(
    `./posts/delete-reply?replyId=${replyId}`
  );
  dispatch(actions.deleteReply(data));
};

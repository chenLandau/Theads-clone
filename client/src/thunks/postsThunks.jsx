import customFetch from "../utils/customFetch";
import { actions } from "../features/post/postSlice";
import { DisplayPostMode } from "../features/post/postSlice";
export const fetchUserPosts = (username) => async (dispatch) => {
  try {
    const response = await customFetch.get(
      `/posts/user-posts?username=${username}`
    );
    dispatch(
      actions.fetchPostsSuccess({
        displayMode: DisplayPostMode.PROFILE,
        posts: response.data.posts,
      })
    );
  } catch (error) {
    dispatch(actions.updateProfileFailure(error));
  }
};
export const likePost = (postId) => async (dispatch) => {
  try {
    const { data } = await customFetch.put(`/posts/likePost?postId=${postId}`);
    console.log(data);
    dispatch(actions.likePostSuccess(data));
  } catch (error) {
    dispatch(actions.likePostFailure(error));
  }
};
export const dislikePost = (postId) => async (dispatch) => {
  try {
    const { data } = await customFetch.put(
      `/posts/dislikePost?postId=${postId}`
    );
    console.log(data);

    dispatch(actions.likePostSuccess(data));
  } catch (error) {
    dispatch(actions.likePostFailure(error));
  }
};
export const createPost = (formData) => async (dispatch) => {
  try {
    const { data } = await customFetch.post("/posts", formData);
    dispatch(
      actions.createPostSuccess({
        newPost: data.newPost,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (postId) => async (dispatch) => {
  try {
    const { data } = await customFetch.delete(`./posts/?postId=${postId}`);
    dispatch(actions.deletePostSuccess(data));
  } catch (error) {
    console.log(error);
  }
};
export const addPostReply =
  ({ postId, replyContent }) =>
  async (dispatch) => {
    try {
      const { data } = await customFetch.post(
        `/posts/addPostReply?postId=${postId}`,
        {
          replyContent: replyContent,
        }
      );
      dispatch(actions.addReplySuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
export const likePostReply = (replyId) => async (dispatch) => {
  try {
    const { data } = await customFetch.put(
      `/posts/likePostReply?replyId=${replyId}`
    );
    dispatch(actions.likeReplySuccess(data));
  } catch (error) {
    dispatch(actions.likePostFailure(error));
  }
};
export const dislikePostReply = (replyId) => async (dispatch) => {
  try {
    const { data } = await customFetch.put(
      `/posts/dislikePostReply?replyId=${replyId}`
    );
    dispatch(actions.likeReplySuccess(data));
  } catch (error) {
    dispatch(actions.likePostFailure(error));
  }
};

export const deleteReply = (replyId) => async (dispatch) => {
  try {
    const { data } = await customFetch.delete(
      `./posts/delete-reply?replyId=${replyId}`
    );
    dispatch(actions.deleteReplySuccess(data));
  } catch (error) {
    console.log(error);
  }
};

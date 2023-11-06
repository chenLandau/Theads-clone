import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/customFetch";

export const DisplayPostMode = {
  HOME: "home",
  PROFILE: "profile",
  SINGLE_POST: "singlePost",
};

const initialState = {
  displayMode: DisplayPostMode.HOME,
  homePosts: [],
  profilePosts: [],
  currentPost: null,
  isLoadingPosts: true,
};

export const postPageLoader = createAsyncThunk(
  "posts/getPostPage",
  async (postId) => {
    const response = await customFetch.get(`./posts/?postId=${postId}`);
    return response.data; // Assuming response is in the format { data: { posts: [...] } }
  }
);
const updatePostLikes = (posts, postId, likesAmount, isLikedByUser) => {
  return posts.map((thread) => {
    if (thread._id === postId) {
      thread.likesAmount = likesAmount;
      thread.isLikedByUser = isLikedByUser;
    }
    return thread;
  });
};
const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      const { posts, displayMode } = action.payload;
      console.log(action.payload);

      if (displayMode === "home") {
        state.displayMode = DisplayPostMode.HOME;
        state.homePosts = posts;
      }
      if (displayMode === "profile") {
        state.displayMode = DisplayPostMode.PROFILE;
        state.profilePosts = posts;
      }
    },
    setPostLikes: (state, action) => {
      const { postId, likesAmount, isLikedByUser } = action.payload;
      if (state.displayMode === DisplayPostMode.HOME) {
        state.homePosts = updatePostLikes(
          state.homePosts,
          postId,
          likesAmount,
          isLikedByUser
        );
      } else if (state.displayMode === DisplayPostMode.PROFILE) {
        state.profilePosts = updatePostLikes(
          state.profilePosts,
          postId,
          likesAmount,
          isLikedByUser
        );
      } else {
        state.currentPost.post = post;
      }
    },
    likeReply: (state, action) => {
      const { updatedReply } = action.payload;
      const { replies } = state.currentPost;
      const updateReplies = (replies) => {
        return replies.map((reply) => {
          if (reply._id === updatedReply._id) {
            return updatedReply;
          }
          return reply;
        });
      };
      state.currentPost.replies = updateReplies(state.currentPost.replies);
    },
    deletePost: (state, action) => {
      const { postId } = action.payload;
      const updatedProfilePosts = state.profilePosts.filter(
        (post) => post._id !== postId
      );
      state.profilePosts = updatedProfilePosts;
    },
    createPost: (state, action) => {
      const { newPost } = action.payload;
      state.profilePosts = [newPost, ...state.profilePosts];
    },
    deleteReply: (state, action) => {
      const { updatedPost, replyId } = action.payload;
      const { post, replies } = state.currentPost;
      const updatedReplies = replies.filter((reply) => reply._id !== replyId);

      state.currentPost = {
        ...state.currentPost,
        post: updatedPost,
        replies: [...updatedReplies],
      };
    },
    addReply: (state, action) => {
      const { updatedPost, reply } = action.payload;
      const updatePosts = (posts) => {
        return posts.map((thread) => {
          if (thread._id === updatedPost._id) {
            return updatedPost;
          }
          return thread;
        });
      };
      if (state.displayMode === DisplayPostMode.HOME) {
        state.homePosts = updatePosts(state.homePosts);
      } else if (state.displayMode === DisplayPostMode.PROFILE) {
        state.profilePosts = updatePosts(state.profilePosts);
      } else {
        const { replies } = state.currentPost;
        const updatedReplies = [...replies, reply];
        state.currentPost = {
          ...state.currentPost,
          post: updatedPost,
          replies: updatedReplies,
        };
      }
    },
  },
  extraReducers: {
    [postPageLoader.pending]: (state) => {
      state.isLoadingPosts = true;
    },
    [postPageLoader.fulfilled]: (state, action) => {
      state.currentPost = action.payload;
      state.displayMode = DisplayPostMode.SINGLE_POST;
      state.isLoadingPosts = false;
    },
    [postPageLoader.rejected]: (state) => {
      state.isLoadingPosts = true;
    },
  },
});
export const { setPosts } = postsSlice.actions;
export const { actions } = postsSlice;
export default postsSlice.reducer;

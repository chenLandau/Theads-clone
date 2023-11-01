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
  forYouPosts: [],
  followingPosts: [],
  profilePosts: [],
  currentPost: null,
  isLoadingPosts: true,
};
export const getHomeFeedPosts = createAsyncThunk(
  "posts/getHomeFeedPosts",
  async () => {
    const response = await customFetch.get("./posts/homeFeed");
    return response.data; // Assuming response is in the format { data: { posts: [...] } }
  }
);
export const postPageLoader = createAsyncThunk(
  "posts/getPostPage",
  async (postId) => {
    const response = await customFetch.get(`./posts/?postId=${postId}`);
    return response.data; // Assuming response is in the format { data: { posts: [...] } }
  }
);

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPostsSuccess: (state, action) => {
      const { displayMode, posts } = action.payload;
      state.displayMode = DisplayPostMode.PROFILE;
      if (displayMode === DisplayPostMode.PROFILE) state.profilePosts = posts;
    },
    setForYouPosts: (state, action) => {
      state.homePosts = state.forYouPosts;
    },
    setFollowingPosts: (state, action) => {
      state.homePosts = state.followingPosts;
    },
    likePostSuccess: (state, action) => {
      const { post } = action.payload;
      const updatePosts = (posts) => {
        return posts.map((thread) => {
          if (thread._id === post._id) {
            return post;
          }
          return thread;
        });
      };
      if (state.displayMode === DisplayPostMode.HOME) {
        state.homePosts = updatePosts(state.homePosts);
      } else if (state.displayMode === DisplayPostMode.PROFILE) {
        state.profilePosts = updatePosts(state.profilePosts);
      } else {
        state.currentPost.post = post;
      }
    },
    likeReplySuccess: (state, action) => {
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
    likePostFailure: (state, action) => {
      // Handle failure if needed
    },
    deletePostSuccess: (state, action) => {
      const { massage, posts } = action.payload;
      state.profilePosts = posts;
    },
    createPostSuccess: (state, action) => {
      const { newPost } = action.payload;
      state.profilePosts = [...state.profilePosts, newPost];
    },
    deleteReplySuccess: (state, action) => {
      const { updatedPost, replyId } = action.payload;
      console.log(action.payload);
      const { post, replies } = state.currentPost;
      const updatedReplies = replies.filter((reply) => reply._id !== replyId);

      state.currentPost = {
        ...state.currentPost,
        post: updatedPost,
        replies: [...updatedReplies],
      };
    },
    addReplySuccess: (state, action) => {
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
    [getHomeFeedPosts.pending]: (state) => {
      state.isLoadingPosts = true;
    },
    [getHomeFeedPosts.fulfilled]: (state, action) => {
      const { followingPosts, forYouPosts } = action.payload;
      state.followingPosts = followingPosts;
      state.forYouPosts = forYouPosts;
      state.homePosts = forYouPosts;
      state.isLoadingPosts = false;
      state.displayMode = DisplayPostMode.HOME;
    },
    [getHomeFeedPosts.rejected]: (state) => {
      state.isLoadingPosts = true;
    },
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
export const { setFollowingPosts, setForYouPosts } = postsSlice.actions;
export const { actions } = postsSlice;
export default postsSlice.reducer;

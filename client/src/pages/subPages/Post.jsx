import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  InteractivePostCard,
  Loading,
  ReplyCard,
} from "../../components/index";
import Wrapper from "../../assets/wrappers/Page";
import { postPageLoader } from "../../features/post/postSlice";
const Post = () => {
  const { postId } = useParams();
  const { currentPost, isLoadingPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postPageLoader(postId));
  }, []);
  if (isLoadingPosts || !currentPost) return <Loading />;
  const { post, replies } = currentPost;
  return (
    <Wrapper>
      <section className="container">
        <div className="post-page">
          <InteractivePostCard id={post._id} {...post} />
          {replies.map((reply) => {
            return <ReplyCard key={reply._id} reply={reply} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Post;

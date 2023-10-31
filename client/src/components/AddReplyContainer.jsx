import React from "react";
import Wrapper from "../assets/wrappers/AddReplyContainer";
import { AddReply, BasicPostCard } from "../components/index";
const AddReplyContainer = ({ post, showAddReply, setShowAddReply }) => {
  // const { _id, username } = post;
  return (
    <Wrapper>
      <div
        className={
          showAddReply
            ? "container-1 show-container"
            : "container-1 hide-container"
        }
      >
        <div className="card-layout" />
        <div className="container">
          <div className="reply-header">
            <button
              className="cancel-btn"
              onClick={() => setShowAddReply(false)}
            >
              Cancel
            </button>
            <h2 className="title">Reply</h2>
          </div>
          <BasicPostCard post={post} />
          <AddReply
            username={post.username}
            postId={post._id}
            setShowAddReply={setShowAddReply}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default AddReplyContainer;

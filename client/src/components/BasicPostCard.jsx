import React from "react";
import UserProfileLink from "./UserProfileLink";
import Wrapper from "../assets/wrappers/BasicPostCard";
const BasicPostCard = ({ post }) => {
  const {
    _id,
    avatar,
    username,
    createdBy,
    timePassed,
    content,
    isLikedByUser,
    isAuthorizedUser,
    postImage,
    repliesAmount,
    likesAmount,
  } = post;
  return (
    <Wrapper>
      <section className="card-container">
        <div className="img-container">
          <img src={avatar} className="big-img" />
          <div className="thread-card-bar"></div>
        </div>
        <div className="container-3">
          <div className="thread-header">
            <UserProfileLink username={username} userId={createdBy} />
            <p>{timePassed}</p>
          </div>
          <div className="thread-body">
            <span>{content}</span>
            {postImage && <img src={postImage} className="uploaded-img" />}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default BasicPostCard;

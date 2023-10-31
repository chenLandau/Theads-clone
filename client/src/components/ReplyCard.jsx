import React from "react";
import UserProfileLink from "./UserProfileLink";
import Wrapper from "../assets/wrappers/BasicPostCard";
import { Heart } from "react-feather";
import { likePostReply, dislikePostReply } from "../thunks/postsThunks";
import { useDispatch } from "react-redux";

const ReplyCard = ({ reply }) => {
  const {
    _id,
    avatar,
    username,
    createdBy,
    timePassed,
    content,
    isLikedByUser,
    likesAmount,
  } = reply;
  const dispatch = useDispatch();

  const handleLikeClick = async () => {
    if (!isLikedByUser) {
      dispatch(likePostReply(_id));
    } else {
      dispatch(dislikePostReply(_id));
    }
  };
  return (
    <Wrapper>
      <section className="card-container">
        <div className="img-container">
          <img src={avatar} className="big-img" />
        </div>
        <div className="container-3">
          <div className="thread-header">
            <UserProfileLink username={username} userId={createdBy} />
            <p>{timePassed}</p>
          </div>
          <div className="reply-body">
            <div className="thread-body">
              <span>{content}</span>
            </div>
            <Heart
              className={
                isLikedByUser
                  ? "small-heart-icon small-liked-icon"
                  : "small-heart-icon"
              }
              onClick={handleLikeClick}
            />
          </div>
          <div className="card-btn">{likesAmount} likes</div>
        </div>
      </section>
    </Wrapper>
  );
};

export default ReplyCard;

import React, { useState } from "react";
import profileImg from "../assets/images/default-profile-pic.jpg";
import Wrapper from "../assets/wrappers/InteractivePostCard";

import {
  MoreHorizontal,
  Heart,
  Repeat,
  Send,
  MessageCircle,
} from "react-feather";
import { Link } from "react-router-dom";
import UserFollowers from "./UserFollowers";
import { useDispatch } from "react-redux";
import { likePost, dislikePost } from "../thunks/postsThunks";
import OptionsMenuCard from "./OptionsMenuCard";
import UserProfileLink from "./UserProfileLink";
import AddReplyContainer from "./AddReplyContainer";
import PostLikes from "./PostLikes";
const InteractivePostCard = (post) => {
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

  const [showOptionMenu, setShowOptionMenu] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const [showAddReply, setShowAddReply] = useState(false);
  const dispatch = useDispatch();
  const toggleOptionsMenu = () => {
    setShowOptionMenu(true);
  };
  const toggleLikesContainer = () => {
    setShowLikes(true);
  };

  const toggleAddReply = () => {
    setShowAddReply(true);
  };
  const handleLikeClick = async () => {
    if (!isLikedByUser) {
      dispatch(likePost(_id));
    } else {
      dispatch(dislikePost(_id));
    }
  };

  return (
    <Wrapper>
      <section className="thread-card-container">
        <div className="img-container">
          <img src={avatar || profileImg} className="big-img" />
          <div className="thread-card-bar"></div>
          <img src={avatar || profileImg} className="small-img" />
        </div>
        <div className="container-3">
          <div className="thread-header">
            <UserProfileLink username={username} userId={createdBy} />
            <div className="container-4">
              {showLikes && (
                <PostLikes
                  postId={_id}
                  showUserFollowers={showLikes}
                  setShowUserFollowers={setShowLikes}
                />
              )}

              {showAddReply && (
                <AddReplyContainer
                  post={post}
                  showAddReply={showAddReply}
                  setShowAddReply={setShowAddReply}
                />
              )}
              {showOptionMenu && (
                <OptionsMenuCard
                  postId={_id}
                  showOptionMenu={showOptionMenu}
                  setShowOptionMenu={setShowOptionMenu}
                />
              )}
              <p>{timePassed}</p>
              {isAuthorizedUser && (
                <MoreHorizontal className="icon" onClick={toggleOptionsMenu} />
              )}
            </div>
          </div>
          <div className="thread-body">
            <span>{content}</span>
            {postImage && <img src={postImage} className="uploaded-img" />}
          </div>
          <div className="links-container">
            <Heart
              className={isLikedByUser ? "icon liked-icon" : "icon"}
              onClick={handleLikeClick}
            />
            <MessageCircle className="icon" onClick={toggleAddReply} />
            <Repeat className="icon" />
            <Send className="icon" />
          </div>
          <div className="post-data">
            <Link to={`/threads/${username}/post/${_id}`} className="card-btn">
              <h5 className="card-btn">{repliesAmount} Replies</h5>
            </Link>
            <p>·</p>
            <button className="card-btn" onClick={toggleLikesContainer}>
              {likesAmount} Likes
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default InteractivePostCard;

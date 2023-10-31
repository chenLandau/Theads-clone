import React, { useState } from "react";
import { useDashboardContext } from "../pages/mainPages/DashboardLayout";
import Wrapper from "../assets/wrappers/BasicPostCard";
import { addPostReply } from "../thunks/postsThunks";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
const ReplyCard = ({ username, postId, setShowAddReply }) => {
  const { user } = useDashboardContext();
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const onPostClick = () => {
    dispatch(addPostReply({ postId, replyContent: text }));
    setShowAddReply(false);
    toast.success("replyAdded");
  };
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Wrapper>
      <section className="card-container">
        <div className="img-container">
          <img src={user.avatar || profileImg} className="big-img" />
          <div className="small-thread-card-bar"></div>
          <img src={user.avatar || profileImg} className="small-img" />
        </div>
        <div className="container-3">
          <div className="thread-header">
            <h5>{user.user_name}</h5>
          </div>
          <textarea
            className="text-area"
            placeholder={`Reply to ${username}...`}
            value={text}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className={!text ? "post-btn post-btn-disabled" : "post-btn"}
          onClick={onPostClick}
          disabled={!text}
        >
          post
        </button>
      </section>
    </Wrapper>
  );
};

export default ReplyCard;

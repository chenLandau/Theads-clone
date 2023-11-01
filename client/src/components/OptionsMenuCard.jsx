import React from "react";
import Wrapper from "../assets/wrappers/OptionsCardContainer";
import { deletePost, deleteReply } from "../thunks/postsThunks";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const OptionsMenuCard = ({ type, id, showOptionMenu, setShowOptionMenu }) => {
  const dispatch = useDispatch();
  const handleCancelClick = () => {
    setShowOptionMenu(false);
  };

  const handleDeleteClick = () => {
    try {
      if (type === "post") {
        dispatch(deletePost(id));
        window.location.href = "/threads";
      } else if (type === "reply") {
        dispatch(deleteReply(id));
      }
      setShowOptionMenu(false);
      toast.success(`${type} deleted successfully`);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <Wrapper>
      <div
        className={
          showOptionMenu
            ? "new-thread-container show-container"
            : "new-thread-container hide-container"
        }
      >
        <div className="card-layout" />
        <div className="options-card-container">
          <div className="text-container">
            <p className="title">delete {type}?</p>
            <p className="text">
              If you delete this {type}, you won't be able to restore it.
            </p>
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="btn delete-btn"
              onClick={handleDeleteClick}
            >
              delete
            </button>
            <button type="button" className="btn" onClick={handleCancelClick}>
              cancel
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OptionsMenuCard;

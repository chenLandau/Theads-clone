import React from "react";
import Wrapper from "../assets/wrappers/OptionsCardContainer";
import { deletePost, deleteReply } from "../thunks/postsThunks";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useDashboardContext } from "../pages/mainPages/DashboardLayout";

const OptionsMenuCard = ({ type, id, showOptionMenu, setShowOptionMenu }) => {
  const { user } = useDashboardContext();
  const dispatch = useDispatch();
  const handleCancelClick = () => {
    setShowOptionMenu(false);
  };

  const handleDeleteClick = async () => {
    try {
      if (type === "post") await dispatch(deletePost(id));
      else if (type === "reply") await dispatch(deleteReply(id));
      toast.success(`${type} deleted`);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setShowOptionMenu(false);
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

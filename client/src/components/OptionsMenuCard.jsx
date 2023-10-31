import React from "react";
import Wrapper from "../assets/wrappers/OptionsCardContainer";
import { deletePost } from "../thunks/postsThunks";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const OptionsMenuCard = ({ postId, showOptionMenu, setShowOptionMenu }) => {
  const dispatch = useDispatch();
  const handleCancelClick = () => {
    setShowOptionMenu(false);
  };

  const handleDeleteClick = () => {
    try {
      dispatch(deletePost(postId));
      setShowOptionMenu(false);
      toast.success("Post deleted successfully");
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
        <div className="card-container">
          <div className="text-container">
            <p className="title">delete post?</p>
            <p className="text">
              If you delete this post, you won't be able to restore it.
            </p>
          </div>
          <div className="btn-container">
            {/* <Form method="post" action={`delete-post/${postId}`}> */}
            <button
              type="submit"
              className="btn delete-btn"
              onClick={handleDeleteClick}
            >
              delete
            </button>
            {/* </Form> */}
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

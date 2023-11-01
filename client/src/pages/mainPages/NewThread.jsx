import React, { useState, useRef } from "react";
import Wrapper from "../../assets/wrappers/NewThread";
import { useDashboardContext } from "./DashboardLayout";
import profileImg from "../../assets/images/default-profile-pic.jpg";
import { createPost } from "../../thunks/postsThunks";
import { useDispatch } from "react-redux";
import { MdPermMedia, MdCancel } from "react-icons/md";
import { toast } from "react-toastify";
const NewThread = () => {
  const dispatch = useDispatch();

  const { user, showNewThread, toggleNewThreadWindow } = useDashboardContext();
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile.size > 500000) {
      toast.error("Image size too large");
    } else {
      setFile(uploadedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(uploadedFile);
    }
  };
  const deleteFile = () => {
    setImageUrl(null);
    setFile(null);
  };

  const handleCancelClick = () => {
    toggleNewThreadWindow(false);
    setText("");
    setFile(null);
    setImageUrl(null);
  };
  const handlePostClick = async () => {
    const formData = new FormData();
    if (file) {
      console.log(file);
      formData.append("file", file);
      console.log(formData.get("file"));
    }
    if (text) formData.append("text", text);
    try {
      console.log("post");
      dispatch(createPost(formData));
      toast.success("Thread Posted");
      toggleNewThreadWindow(false);
      setText("");
      redirect(`../`);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Wrapper>
      <div
        className={
          showNewThread
            ? "new-thread-container show-container"
            : "new-thread-container hide-container"
        }
      >
        {/* <div className="card-layout" /> */}
        <div className="content">
          <div className="thread-header">
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancelClick}
            >
              cancel
            </button>
            <h2 className="title">New thread</h2>
          </div>

          <div className="card-container">
            <div className="img-container">
              <img src={user.avatar || profileImg} className="big-img" />
              <div className="thread-card-bar"></div>
              <img src={user.avatar || profileImg} className="small-img" />
            </div>
            <div className="container-3">
              <div className="body-header">
                <h5>{user.user_name}</h5>
              </div>

              <div className="thread-body">
                <textarea
                  type="text"
                  className="text-area"
                  placeholder="Start a thread..."
                  value={text}
                  onChange={handleInputChange}
                />
                {!imageUrl && (
                  <label htmlFor="file" style={{ cursor: "pointer" }}>
                    <MdPermMedia className="media-icon" />
                  </label>
                )}
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  accept="image/*" /* Only accept JPG and PNG files */
                  onChange={handleFileUpload}
                />
                {imageUrl && (
                  <div className="uploaded-img-container">
                    <img
                      src={imageUrl}
                      alt="Uploaded File"
                      className="uploaded-img"
                    />
                    <MdCancel className="delete-icon" onClick={deleteFile} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={
              !text && !file ? "post-btn post-btn-disabled" : "post-btn"
            }
            disabled={!text && !file}
            onClick={handlePostClick}
          >
            post
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewThread;

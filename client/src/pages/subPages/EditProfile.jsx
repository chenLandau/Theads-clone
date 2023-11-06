import React from "react";
import Wrapper from "../../assets/wrappers/EditProfile";
import { Form, redirect } from "react-router-dom";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { BsBookmarkStar } from "react-icons/bs";
import { FormRow } from "../../components";
import { IoMail } from "react-icons/io5";
import { toast } from "react-toastify";
import { useDashboardContext } from "../mainPages/DashboardLayout";
import { editUserProfile } from "../../services/userService";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }
  try {
    await editUserProfile(formData);
    toast.success("user updated");
    const username = formData.get("user_name");
    return redirect(`/threads/${username}`);
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const EditProfile = () => {
  const { user } = useDashboardContext();
  return (
    <Wrapper>
      <div className="container main-container">
        <Form method="post" className="form" encType="multipart/form-data">
          <h4 className="form-title">edit profile</h4>
          <div className="img-container">
            <img src={user.avatar} alt="pro" className="profile-pic" />
            <label
              htmlFor="avatar"
              className="form-label"
              style={{ cursor: "pointer" }}
            >
              edit picture (max 0.5 MB)
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              style={{ display: "none" }}
              accept="image/*" /* Only accept JPG and PNG files */
            />
          </div>
          <FormRow
            type="text"
            name="name"
            defaultValue={user.name}
            icon={<MdOutlineDriveFileRenameOutline className="form-icon" />}
          />
          <FormRow
            type="text"
            name="user_name"
            defaultValue={user.user_name}
            icon={<FaUser className="form-icon" />}
          />
          <FormRow
            type="email"
            name="email"
            defaultValue={user.email}
            icon={<IoMail className="form-icon" />}
          />
          <FormRow
            type="text"
            name="bio"
            placeHolder={user.bio || "write bio"}
            defaultValue={user.bio}
            required={false}
            icon={<BsBookmarkStar className="form-icon" />}
          />
          <button type="submit" className="btn">
            done
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default EditProfile;

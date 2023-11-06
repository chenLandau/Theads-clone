import React from "react";
import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";
import { FaSquareThreads } from "react-icons/fa6";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import { FormRow } from "../../components/index.js";
import { registerFormRows } from "../../utils/formRows.jsx";
import { toast } from "react-toastify";
import { register } from "../../services/authService";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }
  try {
    await register(formData);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <div className="container main-container">
        {/* <img src={main} alt="" className="img main-img" /> */}
        <Form method="post" className="form" encType="multipart/form-data">
          <FaSquareThreads className="icon" />
          <h4>Create your account</h4>
          {registerFormRows.map((formRow) => {
            const { type, name, placeHolder, icon } = formRow;
            return (
              <FormRow
                key={name}
                type={type}
                name={name}
                placeHolder={placeHolder}
                icon={icon}
              />
            );
          })}
          {/* Profile Picture Upload */}
          <label
            htmlFor="avatar"
            className="form-label"
            style={{ cursor: "pointer" }}
          >
            Upload Profile Picture (max 0.5 MB)
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            className="form-input"
            style={{ display: "none" }}
            accept="image/*" /* Only accept JPG and PNG files */
            // onChange={handleFileUpload}
          />
          <button type="submit" className="btn ">
            {isSubmitting ? "submitting..." : "submit"}
          </button>
          <p>
            Already have an account?
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Register;

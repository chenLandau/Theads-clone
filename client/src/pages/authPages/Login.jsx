import React from "react";
import Wrapper from "../../assets/wrappers/RegisterAndLoginPage.js";
import { FaSquareThreads } from "react-icons/fa6";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import { loginFormRows } from "../../utils/formRows.jsx";
import { toast } from "react-toastify";
import { FormRow } from "../../components/index.js";
import { login } from "../../services/authService.jsx";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await login(data);
    toast.success("Login successful");
    return redirect("/threads");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <div className="container main-container">
        <Form method="post" className="form">
          <FaSquareThreads className="icon" />
          <h4>Login to your account</h4>
          {loginFormRows.map((formRow) => {
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
          <button type="submit" className="btn">
            Login
          </button>
          <p>
            Don't have an account?
            <Link to="/register" className="link">
              Sign up
            </Link>
          </p>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;

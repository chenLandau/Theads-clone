import { IoMail } from "react-icons/io5";
import { BiSolidLock } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

const loginFormRows = [
  {
    type: "email",
    name: "email",
    placeHolder: "enter your email",
    icon: <IoMail className="form-icon" />,
  },
  {
    type: "password",
    name: "password",
    placeHolder: "enter your password",
    icon: <BiSolidLock className="form-icon" />,
  },
];
const registerFormRows = [
  {
    type: "text",
    name: "name",
    placeHolder: "enter your Name",
    icon: <MdOutlineDriveFileRenameOutline className="form-icon" />,
  },
  {
    type: "text",
    name: "user_name",
    placeHolder: "Pick a user name",
    icon: <FaUser className="form-icon" />,
  },
  {
    type: "email",
    name: "email",
    placeHolder: "enter your email",
    icon: <IoMail className="form-icon" />,
  },
  {
    type: "password",
    name: "password",
    placeHolder: "enter your password",
    icon: <BiSolidLock className="form-icon" />,
  },
];
export { loginFormRows, registerFormRows };

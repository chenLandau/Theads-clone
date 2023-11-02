import { useNavigate } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { logout } from "../services/authService";
import { useState } from "react";
import { toast } from "react-toastify";

const LogoutContainer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const logoutUser = async () => {
    await logout();
    navigate("/");
    toast.success("Logging out...");
  };

  return (
    <div className="dropdown-menu-container">
      <HiBars3BottomRight
        className="bars-icon"
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <div className="logout-btn-container">
          <button className="btn" onClick={logoutUser}>
            Log out
          </button>
          <button className="btn">switch appearance</button>
        </div>
      )}
    </div>
  );
};

export default LogoutContainer;

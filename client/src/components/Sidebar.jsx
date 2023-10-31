import React from "react";
import Wrapper from "../assets/wrappers/Sidebar";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../utils/links";
import { useDashboardContext } from "../pages/mainPages/DashboardLayout";

const Sidebar = () => {
  const { user, toggleNewThreadWindow } = useDashboardContext();
  return (
    <Wrapper>
      <div className="links-container">
        {NavLinks.map((link) => {
          const { type, text, path, icon } = link;

          return type === "link" ? (
            <NavLink to={path} key={text} className="nav-link">
              <span>{icon}</span>
              {text}
            </NavLink>
          ) : type === "btn" ? (
            <button
              key={text}
              className="new-thread-btn"
              onClick={() => toggleNewThreadWindow(true)}
            >
              <span>{icon}</span>
              {text}
            </button>
          ) : (
            <NavLink to={`${user.user_name}`} key={text} className="nav-link">
              <span>{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Sidebar;

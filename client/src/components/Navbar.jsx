import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { NavLinks } from "../utils/links";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/mainPages/DashboardLayout";

const Navbar = () => {
  const { user, toggleNewThreadWindow } = useDashboardContext();
  const [activeLink, setActiveLink] = useState("home");
  const handleNavLinkClick = (linkId) => {
    setActiveLink(linkId);
  };
  const updateProfilePage = (text) => {
    setActiveLink(text);
  };
  return (
    <Wrapper>
      <nav className="nav-center">
        {NavLinks.map((link) => {
          const { type, text, path, icon } = link;

          return type === "link" ? (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={() => handleNavLinkClick(text)}
            >
              <div
                className={
                  activeLink === text
                    ? "nav-icon-container active"
                    : "nav-icon-container"
                }
              >
                {icon}
              </div>
            </NavLink>
          ) : type === "btn" ? (
            <button
              key={text}
              className="nav-link"
              onClick={() => toggleNewThreadWindow(true)}
            >
              <div
                className={
                  activeLink === text
                    ? "nav-icon-container active"
                    : "nav-icon-container"
                }
              >
                {icon}
              </div>
            </button>
          ) : (
            <NavLink
              to={`${user.user_name}`}
              key={text}
              className="nav-link"
              onClick={() => updateProfilePage(text)}
            >
              <div
                className={
                  activeLink === text
                    ? "nav-icon-container active"
                    : "nav-icon-container"
                }
              >
                {icon}
              </div>
            </NavLink>
          );
        })}
      </nav>
    </Wrapper>
  );
};

export default Navbar;

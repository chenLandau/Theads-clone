import { GoHomeFill, GoHome, GoSearch } from "react-icons/go";
import { FaThreads } from "react-icons/fa6";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidSearch, BiSolidUser } from "react-icons/bi";

import { PiHeartDuotone, PiHeartLight } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";

import { CiUser } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { IoCreateOutline, IoCreate } from "react-icons/io5";
const NavLinks = [
  {
    type: "link",
    text: "home",
    path: ".",
    icon: <GoHomeFill className="icon" />,
  },
  {
    type: "link",
    text: "search",
    path: "search",
    icon: <BiSolidSearch className="icon" />,
  },
  {
    type: "btn",
    text: "new thread",
    icon: <IoCreate className="icon" />,
  },
  {
    type: "link",
    text: "activity",
    path: "activity",
    icon: <AiFillHeart className="icon" />,
  },
  {
    type: "profile-link",
    text: "profile",
    icon: <BiSolidUser className="icon" />,
  },
];
const threadCardLinks = [
  {
    icon: <PiHeartLight />,
  },
  {
    icon: <FaRegComment />,
  },
];

export { NavLinks, threadCardLinks };

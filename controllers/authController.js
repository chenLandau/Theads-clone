import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/customErrors.js";
import UserActivity from "../models/UserActivityModel.js";
import { comparePassword, hashedPassword } from "../utils/passwordUtils.js";
import { createJwt } from "../utils/tokenUtils.js";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
export const register = async (req, res) => {
  const user = { ...req.body };
  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    user.avatar = response.secure_url;
    user.avatarPublicId = response.public_id;
  }
  user.password = await hashedPassword(req.body.password);
  const _user = await User.create(user);
  const _userActivity = await UserActivity.create({ userId: _user._id });
  res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");
  const token = createJwt({ userId: user._id });
  res.cookie("token", token, {
    httpOnly: true,
    expired: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === "production", //1d
  });
  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

export const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expired: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};

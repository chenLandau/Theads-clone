import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  user_name: String,
  password: String,
  email: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  avatar: String,
  avatarPublicId: String,
});
UserSchema.methods.toJSON = function () {
  let userObj = this.toObject();
  delete userObj.password;
  return userObj;
};
export default mongoose.model("User", UserSchema);

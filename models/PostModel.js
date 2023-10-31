import mongoose from "mongoose";
const PostSchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
    content: String,
    postImage: String,
    postImagePublicId: String,
    replies: [{ type: mongoose.Types.ObjectId, ref: "Reply" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

PostSchema.methods.toJSON = function () {
  let postObj = this.toObject();
  // postObj.timePassed = convertTimePassed(this.createdAt);
  return postObj;
};
export default mongoose.model("Post", PostSchema);

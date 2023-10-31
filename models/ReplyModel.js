import mongoose from "mongoose";
const ReplySchema = new mongoose.Schema(
  {
    postId: { type: mongoose.Types.ObjectId, ref: "Post" },
    createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
    content: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

// PostSchema.methods.toJSON = function () {
//   let postObj = this.toObject();
//   // postObj.timePassed = convertTimePassed(this.createdAt);
//   return postObj;
// };
export default mongoose.model("Reply", ReplySchema);

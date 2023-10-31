import mongoose from "mongoose";
import { ACTIVITY_TYPE } from "../utils/constants.js";

const ActivitySchema = new mongoose.Schema(
  {
    activityBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    activityType: {
      type: String,
      enum: Object.values(ACTIVITY_TYPE),
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    replyId: { type: mongoose.Schema.Types.ObjectId, ref: "Reply" },
  },
  { timestamps: true }
);
export default mongoose.model("Activity", ActivitySchema);

import mongoose from "mongoose";
const UserActivitySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    activities: [mongoose.Schema.Types.Mixed],
  },
  { timestamps: true }
);

export default mongoose.model("UserActivity", UserActivitySchema);

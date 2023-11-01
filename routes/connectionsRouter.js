import { Router } from "express";
import {
  validateTargetUserId,
  validateFollowUserInput,
  validateUnfollowUserInput,
} from "../middleware/validationMiddleware.js";
import {
  followUser,
  unfollowUser,
  getUserConnections,
} from "../controllers/connectionsController.js";

const router = Router();
router.patch(
  "/follow-user",
  validateTargetUserId,
  validateFollowUserInput,
  followUser
);
router.patch(
  "/unfollow-user",
  validateTargetUserId,
  validateUnfollowUserInput,
  unfollowUser
);
router.get("/user-connections", getUserConnections);

export default router;

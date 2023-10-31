import { Router } from "express";
import {
  // validateTargetUserInput,
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
  // validateTargetUserInput,
  validateFollowUserInput,
  followUser
);
router.patch(
  "/unfollow-user",
  // validateTargetUserInput,
  validateUnfollowUserInput,
  unfollowUser
);
router.get("/user-connections", getUserConnections);

export default router;

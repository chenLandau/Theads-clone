import { Router } from "express";
import {
  getAllUsers,
  getCurrentUser,
  editUserProfile,
  getTargetUser,
  getUserFollowers,
  getUserActivities,
} from "../controllers/userController.js";
import {
  validateEditUserInput,
  validateTargetUsername,
} from "../middleware/validationMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/all-users", getAllUsers);
router.patch(
  "/edit-user-profile",
  upload.single("avatar"),
  validateEditUserInput,
  editUserProfile
);
router.get("/target-user-profile", validateTargetUsername, getTargetUser);
router.get("/user-followers", getUserFollowers);
router.get("/user-activities", getUserActivities);

//router.patch("/update-follow-user", updateFollow);

export default router;

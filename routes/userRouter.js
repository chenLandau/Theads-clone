import { Router } from "express";
import {
  getAllUsers,
  getCurrentUser,
  updateUser,
  getTargetUser,
  getUserFollowers,
  getUserActivities,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/all-users", getAllUsers);
router.patch("/update-user", validateUpdateUserInput, updateUser);
router.get("/target-user-profile", getTargetUser);
router.get("/user-followers", getUserFollowers);
router.get("/user-activities", getUserActivities);

//router.patch("/update-follow-user", updateFollow);

export default router;

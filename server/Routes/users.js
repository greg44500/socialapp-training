import express from "express";
import {
  deleteUser,
  updateUser,
  getOneUser,
  followUser,
  unfollowUser,
} from "../controllers/userCtrl.js";
import User from "../models/User.js";
import { createError } from "../Utils/error.js";

const router = express.Router();

//*** UPDATE USER ACCOUNT***//
router.put("/:id", updateUser);

//*** DELETE USER ACCOUNT ***//
router.delete("/:id", deleteUser);

//*** GET ONE USER ***//
router.get("/:id", getOneUser);

//*** FOLLOW A USER ***//
router.put("/:id/follow", followUser);

//*** UNFOLLOW A USER ***//
router.put("/:id/unfollow", unfollowUser);

export default router;

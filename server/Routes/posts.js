import express from "express";
import {
  createNewPost,
  deletePost,
  getOnePost,
  likePost,
  timeline,
  updatePost,
} from "../controllers/postCtrl.js";

import User from "../models/User.js";
import { createError } from "../Utils/error.js";

const router = express.Router();

//*** CREATE A POST ***//
router.post("/", createNewPost);

//*** UPDATE A POST ***//
router.put("/:id", updatePost);

//*** DELETE A POST ***//
router.delete("/:id", deletePost);

//*** LIKE A POST ***//
router.put("/:id/like", likePost)

//*** GET ONE POST ***//
router.get("/:id", getOnePost)
//*** GET TIMELINE POSTS (OF FOLLOWINGS) ***//
router.get("/timeline/all", timeline)
export default router;

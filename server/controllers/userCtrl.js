import express from "express";
import User from "../models/User.js";
import { createError } from "../Utils/error.js";
import bcrypt from "bcrypt";

export const updateUser = async (req, res, next) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account deleted successfully");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only delete your account");
  }
};

export const getOneUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const {password, createdAt, isAdmin, ...other} = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(404).json("user not found");
  }
};

export const followUser = async (req, res, next) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("User has been followed")
      } else {
        return next(createError(403, "You already follow this user"));
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return next(createError(403, "You can't follow yourself"));
  }
};

export const unfollowUser = async (req, res, next) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("User has been unfollowed")
      } else {
        return next(createError(403, "You don't follow this user"));
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return next(createError(403, "You can't unfollow yourself"));
  }
};


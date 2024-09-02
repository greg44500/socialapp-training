import express from "express";
import Post from "../models/Post.js";
import User from "../models/User.js";
import { createError } from "../Utils/error.js";
import bcrypt from "bcrypt";

//*** CREATE A POST ***//
export const createNewPost = async (req, res, next) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    next(createError(500, error));
  }
};

//*** UPDATE A POST ***//
export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated");
    } else {
      return next(createError(403, "You can update only your posts"));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//*** DELETE A POST ***//
export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("The post has been deleted");
    } else {
      return next(createError(403, "You can delete only your posts"));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//*** LIKE/DiSLIKE A POST ***//
export const likePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("Post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("Post has been disliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//*** GET A POST ***//
export const getOnePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json("post not found");
  }
};

//*** TIMELINE ***//
export const timeline = async (req, res, next) => {
    try {
     const currentUser = await User.findById(req.body.userId)
     const userPosts = await Post.find({userId: currentUser._id})
     const friendPosts = await Promise.all(currentUser.followings.map(friendId =>{
        Post.find({userId: friendId})
     }))
     res.json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(404).json("post not found");
    }
  };

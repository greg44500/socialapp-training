import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { createError } from "../Utils/error.js";

export const register = async (req, res, next) => {
  try {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

     newUser.save();
    res.status(201).json("User has been registered");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next(createError(400, "Wrong Credentials !"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const {password, ...others} = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};



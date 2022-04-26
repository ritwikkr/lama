import UserSchema from "../models/User.js";
import { StatusCodes } from "http-status-codes";

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json("Please provide all values");
    }
    const response = await UserSchema.create(req.body);
    res.status(StatusCodes.CREATED).json(response);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json("Please provide all values");
    }
    const isUser = await UserSchema.findOne({ email }).select("+password");
    if (!isUser) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json("You are not authorized!!!");
    }
    const isCorrect = await isUser.comparePassword(password);
    if (!isCorrect) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json("Password is incorrect!!!");
    }
    const token = isUser.createJWT();
    isUser.password = undefined;
    // const { password, ...others } = isUser;
    res.status(StatusCodes.OK).json({ isUser, token }); //best way
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export { registerUser, loginUser };

import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

function auth(req, res, next) {
  try {
    const auth = req.headers.authorization;
    if (!auth) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json("You are not authorized!!!");
    }
    const token = auth.split(" ")[1];
    const response = jwt.verify(
      token,
      process.env.JWT_SECRET,
      process.env.JWT_LIFETIME
    );
    next();
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Internal Server Error");
  }
}

export default auth;

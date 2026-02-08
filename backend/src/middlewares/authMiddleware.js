import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res) => {
  let token;
  if (
    req.headers.authorization &&
    req.header.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Attach user to request
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      return res.status(401).json({ message: "NOt authorized, token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

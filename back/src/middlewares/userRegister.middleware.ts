import { NextFunction, Request, Response } from "express";
import { checkUserExists } from "../services/user.service";
import { ClientError } from "../utils/errors";

const validateUserRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, name, address, phone } = req.body;
  if (!email || !password || !name || !address || !phone) {
    return next(new ClientError("Missing fields"));
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new ClientError("Invalid email format"));
  }

  next();
};

const validateUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  if (await checkUserExists(email))
    next(new ClientError("User already exists", 400));
  else next();
};

export default [validateUserRegister, validateUserExists];

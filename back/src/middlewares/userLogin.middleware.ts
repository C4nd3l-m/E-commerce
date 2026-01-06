import { Request, Response, NextFunction } from "express";
import { checkUserExists } from "../services/user.service";
import { ClientError } from "../utils/errors";

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ClientError("Missing fields"));
  }
  next();
};

const validateUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  if (!(await checkUserExists(email))) {
    return next(new ClientError("User does not exist", 400));
  }
  next();
};

export default [validateLogin, validateUserExists];

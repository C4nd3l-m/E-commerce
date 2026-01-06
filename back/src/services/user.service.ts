import bcrypt from "bcrypt";
import { Credential } from "../entities/Credential";
import LoginUserDto from "../dtos/loginUser.dto";
import RegisterUserDto from "../dtos/registerUser.dto";
import { User } from "../entities/User";
import { AppDataSource } from "../config/dataSource";
import { UserRepository } from "../repositories/user.repository";
import { ClientError } from "../utils/errors";
import {
  checkPasswordService,
  createCredentialService,
} from "./credential.service";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envs";

export const checkUserExists = async (email: string): Promise<boolean> => {
  const user = await UserRepository.findOneBy({ email });
  return !!user;
};

export const registerUserService = async (
  registerUserDto: RegisterUserDto
): Promise<User> => {
  return await AppDataSource.manager.transaction(async (entityManager) => {
    const userRepository = entityManager.getRepository(User);
    const credentialRepository = entityManager.getRepository(Credential);

    const user = userRepository.create(registerUserDto);
    await userRepository.save(user);

    const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);
    const credential = credentialRepository.create({ password: hashedPassword });
    await credentialRepository.save(credential);

    user.credential = credential;
    await userRepository.save(user);

    return user;
  });
};

export const loginUserService = async (
  loginUserDto: LoginUserDto
): Promise<{ token: string; user: User }> => {
  const user: User | null = await UserRepository.findOne({
    where: {
      email: loginUserDto.email,
    },
    relations: ["credential", "orders"],
  });
  if (!user) throw new Error("User not found");
  if (
    await checkPasswordService(loginUserDto.password, user.credential.password)
  ) {
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);

    return {
      user,
      token,
    };
  } else {
    throw new ClientError("Invalid password");
  }
};

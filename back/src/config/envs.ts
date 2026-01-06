import dotenv from "dotenv";
dotenv.config();

// function to enforce checking env vars
const checkEnv = (envVar: string, name: string): string => {
  if (!envVar) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return envVar;
};

export const PORT: number = Number(process.env.PORT) || 3000;
export const DB_NAME: string = checkEnv(process.env.DB_NAME!, "DB_NAME");
export const DB_USER: string = checkEnv(process.env.DB_USER!, "DB_USER");
export const DB_PASSWORD: string = checkEnv(process.env.DB_PASSWORD!, "DB_PASSWORD");
export const DB_HOST: string = checkEnv(process.env.DB_HOST!, "DB_HOST");
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
export const JWT_SECRET: string = checkEnv(process.env.JWT_SECRET!, "JWT_SECRET");

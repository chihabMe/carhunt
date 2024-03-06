import bcrypt from "bcrypt";

export const comparePassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, 14);
};

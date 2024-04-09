import { Next } from "../../../frameworks/types/serverPackageTypes";
import { IUserRepository } from "../../interface/repository/userRepository";
import ErrorHandler from "../../middlewares/errorHandler";

export const getUsers = async (userRepository: IUserRepository, next: Next) => {
  try {
    return await userRepository.getUsers("user");
  } catch (error: any) {
    return next(new ErrorHandler(500, error.message));
  }
};

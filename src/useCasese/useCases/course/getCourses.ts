import { Next, Req } from "../../../frameworks/types/serverPackageTypes";
import { ICourseRepository } from "../../interface/repository/courseRepository";
import { ICourseResponse } from "../../interface/request_And_Response/course";
import ErrorHandler from "../../middlewares/errorHandler";

export const getCourses = async (
  courseRepository: ICourseRepository,
  next: Next
): Promise<void | ICourseResponse> => {
  try {
    return await courseRepository.getCourses()
  } catch (error: any) {
    return next(new ErrorHandler(500, error.message));
  }
};

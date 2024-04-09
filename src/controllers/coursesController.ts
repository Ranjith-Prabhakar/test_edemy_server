import { Next, Req, Res } from "../frameworks/types/serverPackageTypes";
import { IPaymentService } from "../useCasese/interface/services/paymentService";
import { ICourseUseCase } from "../useCasese/interface/useCase/courseUseCase";
import { catchError } from "../useCasese/middlewares/catchError";
import ErrorHandler from "../useCasese/middlewares/errorHandler";
import { inputValidation } from "./middleware/inputValidation";

export class CoursesController {
  private readonly courseUseCase: ICourseUseCase;
  constructor(courseUseCase: ICourseUseCase) {
    this.courseUseCase = courseUseCase;
  }

  async getCourseInProgress(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "getCourseInProgress", next);
      const result = await this.courseUseCase.getCourseInProgress(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async addCourseData(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "addCourseData", next);
      const result = await this.courseUseCase.addCourseData(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async addFileToCloud(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "addFileToCloud", next);
      const result = await this.courseUseCase.addFileToCloud(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async updateCourse(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "updateCourse", next);
      const result = await this.courseUseCase.updateCourse(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async addModuleVideos(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "addModuleVideos", next);
      const result = await this.courseUseCase.addModuleVideos(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getCourses(req: Req, res: Res, next: Next) {
    try {
      const result = await this.courseUseCase.getCourses(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getCoursesInRequest(req: Req, res: Res, next: Next) {
    try {
      const result = await this.courseUseCase.getCoursesInRequest(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getVideoPresignedUrl(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "getVideoPresignedUrl", next);
      const result = await this.courseUseCase.getVideoPresignedUrl(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async approveOrRejectVideo(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "approveOrRejectVideo", next);
      const result = await this.courseUseCase.approveOrRejectVideo(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getCoursesForUser(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "getCoursesForUser", next);
      const result = await this.courseUseCase.getCoursesForUser(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getCategories(req: Req, res: Res, next: Next) {
    try {
      const result = await this.courseUseCase.getCategories(req, next);
      res.status(200).json({
        success: true,
        message: "categories fectched successfully",
        data: result,
      });
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getVideoForUser(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "getVideoForUser", next);
      const result = await this.courseUseCase.getVideoForUser(req, next);
      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getVideoForVisitors(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "getVideoForVisitors", next);
      const result = await this.courseUseCase.getVideoForVisitors(req, next);
      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async enrollCourse(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "enrollCourse", next);
      const result = await this.courseUseCase.enrollCourse(req, next);
      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }
  async webHook(req: Req, res: Res, next: Next) {
    try {
      const data = { userId: "sdkjkfjdk", courseName: "mern" };
      const body = req.body;
      const sig = req.headers["stripe-signature"];
      const response = await this.courseUseCase.webHook(data, body, sig, next);
    } catch (error) {
      catchError(error, next);
    }
  }

  async paymentStatus(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "paymentStatus", next);
      const result = await this.courseUseCase.paymentStatus(req, next);
      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async updateReviewAndRating(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "updateReviewAndRating", next);
      const result = await this.courseUseCase.updateReviewAndRating(req, next);
      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getSingleCourseReviewAndRating(req: Req, res: Res, next: Next) {
    try {
      const result = await this.courseUseCase.getSingleCourseReviewAndRating(
        req,
        next
      );
      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getThumbnamilImagePresignedUrl(req: Req, res: Res, next: Next) {
    try {
      const result = await this.courseUseCase.getThumbnamilImagePresignedUrl(
        req,
        next
      );
      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getUserEnrolledCourses(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "getUserEnrolledCourses", next);
      const result = await this.courseUseCase.getUserEnrolledCourses(req, next);
      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getCourseByCategory(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "getCourseByCategory", next);
      const result = await this.courseUseCase.getCourseByCategory(req, next);
      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getCourseForSearch(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "getCourseForSearch", next);
      const result = await this.courseUseCase.getCourseForSearch(req, next);

      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getInstructorTutorials(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "getInstructorTutorials", next);
      const result = await this.courseUseCase.getInstructorTutorials(req, next);
      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async setVideoTrack(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "setVideoTrack", next);

      const result = await this.courseUseCase.setVideoTrack(req, next);
      if (result) res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }
}

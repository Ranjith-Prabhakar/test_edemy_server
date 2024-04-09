import { ICategory } from "../../../entities/category";
import { Next, Req } from "../../../frameworks/types/serverPackageTypes";
import {
  ICloudStorageResponse,
  IExtendedCloudStorageResponse,
} from "../request_And_Response/cloudStorageResponse";
import {
  ICourseCategoryBaseResponse,
  ICourseResponse,
} from "../request_And_Response/course";
import { ICourseTrackResponse } from "../request_And_Response/courseTrack";
import { IPaymentRespose } from "../request_And_Response/payment";
import { IReviewAndRatingResponse } from "../request_And_Response/reviewAndRatingResponse";
import { IUserResponse } from "../request_And_Response/user";

export interface ICourseUseCase {
  getCourseInProgress(req: Req, next: Next): Promise<ICourseResponse | void>;
  addCourseData(req: Req, next: Next): Promise<ICourseResponse | void>;
  addFileToCloud(req: Req, next: Next): Promise<string | void>;
  updateCourse(req: Req, next: Next): Promise<ICourseResponse | void>;
  addModuleVideos(req: Req, next: Next): Promise<ICourseResponse | void>;
  getCourses(req: Req, next: Next): Promise<ICourseResponse | void>;
  getCoursesInRequest(req: Req, next: Next): Promise<ICourseResponse | void>;
  getVideoPresignedUrl(
    req: Req,
    next: Next
  ): Promise<ICloudStorageResponse | void>;
  approveOrRejectVideo(req: Req, next: Next): Promise<ICourseResponse | void>;
  getCoursesForUser(req: Req, next: Next): Promise<ICourseResponse | void>;
  getCategories(req: Req, next: Next): Promise<ICategory[] | void>;
  // getVideoForUser(req: Req, next: Next): Promise<ICloudStorageResponse | void>;
  getVideoForUser(
    req: Req,
    next: Next
  ): Promise<IExtendedCloudStorageResponse | void>;
  getVideoForVisitors(
    req: Req,
    next: Next
  ): Promise<ICloudStorageResponse | void>;
  enrollCourse(req: Req, next: Next): Promise<IPaymentRespose | void>;
  //
  webHook(
    data: { userId: string; courseName: string },
    body: any,
    sig: any,
    next: Next
  ): Promise<boolean | void | any>;
  //
  paymentStatus(req: Req, next: Next): Promise<IUserResponse | void>;
  updateReviewAndRating(
    req: Req,
    next: Next
  ): Promise<IReviewAndRatingResponse | void>;
  getSingleCourseReviewAndRating(
    req: Req,
    next: Next
  ): Promise<IReviewAndRatingResponse | void>;
  getThumbnamilImagePresignedUrl(
    req: Req,
    next: Next
  ): Promise<ICloudStorageResponse | void>;
  getUserEnrolledCourses(req: Req, next: Next): Promise<ICourseResponse | void>;
  getCourseByCategory(
    req: Req,
    next: Next
  ): Promise<ICourseCategoryBaseResponse | void>;
  getCourseForSearch(
    req: Req,
    next: Next
  ): Promise<ICourseCategoryBaseResponse | void>;
  getInstructorTutorials(req: Req, next: Next): Promise<ICourseResponse | void>;
  setVideoTrack(req: Req, next: Next): Promise<ICourseTrackResponse | void>;
}

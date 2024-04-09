import userModel from "../../../database/models/userModel";
import { UserRepository } from "../../../database/repository/userRepository";
import { OtpRepository } from "../../../database/repository/otp.repository";
import { CategoryRepository } from "../../../database/repository/categoryRepository";
import { InstrctorAgreementRepository } from "../../../database/repository/instructorAgreementRepository";
import { CourseRepository } from "../../../database/repository/courseRepository";

import { UserUsecase } from "../../../../useCasese/useCases/userUseCase";
import { AdminUseCase } from "../../../../useCasese/useCases/adminUseCase";
import { CourseUseCase } from "../../../../useCasese/useCases/courseUseCase";

import { UserController } from "../../../../controllers/userController";
import { AdminController } from "../../../../controllers/adminController";
import { CoursesController } from "../../../../controllers/coursesController";

import { Encrypt } from "../../../services/hashPassword";
import { GenerateOtp } from "../../../services/generateOtp";
import { SendMail } from "../../../services/sendMail";
import { JWTtoken } from "../../../services/jwt";
import { CloudSession } from "../../../services/cloudSession";
import { RequestManagement } from "../../../services/requestManagement";
import { CloudStorage } from "../../../services/cloudStorage";
import { PaymentService } from "../../../services/paymentService";
import { PaymentRepository } from "../../../database/repository/paymentRepository";
import { ReviewAndRatingRepository } from "../../../database/repository/reviewAndRatingRepository";
import { CourseTrackRepository } from "../../../database/repository/coursTrackRepository";
import { NotificationRepository } from "../../../database/repository/notificationRepository";

const userRepository = new UserRepository(userModel);
const bcryptService = new Encrypt();
const generateOTP = new GenerateOtp();
const sendMail = new SendMail();
const otpRepository = new OtpRepository();
const jwtToken = new JWTtoken();
const cloudSession = new CloudSession();
const requestManagement = new RequestManagement();
const instrctorAgreementRepository = new InstrctorAgreementRepository();
const categoryRepository = new CategoryRepository();
const cloudStorage = new CloudStorage();
const courseRepository = new CourseRepository();
const paymentService = new PaymentService();
const paymentRepository = new PaymentRepository();
const reviewAndRatingRepository = new ReviewAndRatingRepository();
const courseTrackRepository = new CourseTrackRepository();
const notificationRepository = new NotificationRepository();


const userUseCase = new UserUsecase(
  userRepository,
  bcryptService,
  generateOTP,
  sendMail,
  otpRepository,
  jwtToken,
  cloudSession,
  requestManagement,
  instrctorAgreementRepository,
  notificationRepository
);

const adminUseCase = new AdminUseCase(
  userRepository,
  instrctorAgreementRepository,
  categoryRepository,
  notificationRepository,
  cloudSession
);

const courseUseCase = new CourseUseCase(
  cloudStorage,
  courseRepository,
  categoryRepository,
  paymentService,
  paymentRepository,
  userRepository,
  cloudSession,
  reviewAndRatingRepository,
  courseTrackRepository,
  notificationRepository
);

const userController = new UserController(userUseCase);
const adminController = new AdminController(adminUseCase);
const courseController = new CoursesController(courseUseCase);

export { userController, adminController, courseController };

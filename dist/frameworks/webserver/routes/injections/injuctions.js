"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseController = exports.adminController = exports.userController = void 0;
const userModel_1 = __importDefault(require("../../../database/models/userModel"));
const userRepository_1 = require("../../../database/repository/userRepository");
const otp_repository_1 = require("../../../database/repository/otp.repository");
const categoryRepository_1 = require("../../../database/repository/categoryRepository");
const instructorAgreementRepository_1 = require("../../../database/repository/instructorAgreementRepository");
const courseRepository_1 = require("../../../database/repository/courseRepository");
const userUseCase_1 = require("../../../../useCasese/useCases/userUseCase");
const adminUseCase_1 = require("../../../../useCasese/useCases/adminUseCase");
const courseUseCase_1 = require("../../../../useCasese/useCases/courseUseCase");
const userController_1 = require("../../../../controllers/userController");
const adminController_1 = require("../../../../controllers/adminController");
const coursesController_1 = require("../../../../controllers/coursesController");
const hashPassword_1 = require("../../../services/hashPassword");
const generateOtp_1 = require("../../../services/generateOtp");
const sendMail_1 = require("../../../services/sendMail");
const jwt_1 = require("../../../services/jwt");
const cloudSession_1 = require("../../../services/cloudSession");
const requestManagement_1 = require("../../../services/requestManagement");
const cloudStorage_1 = require("../../../services/cloudStorage");
const paymentService_1 = require("../../../services/paymentService");
const paymentRepository_1 = require("../../../database/repository/paymentRepository");
const reviewAndRatingRepository_1 = require("../../../database/repository/reviewAndRatingRepository");
const coursTrackRepository_1 = require("../../../database/repository/coursTrackRepository");
const notificationRepository_1 = require("../../../database/repository/notificationRepository");
const userRepository = new userRepository_1.UserRepository(userModel_1.default);
const bcryptService = new hashPassword_1.Encrypt();
const generateOTP = new generateOtp_1.GenerateOtp();
const sendMail = new sendMail_1.SendMail();
const otpRepository = new otp_repository_1.OtpRepository();
const jwtToken = new jwt_1.JWTtoken();
const cloudSession = new cloudSession_1.CloudSession();
const requestManagement = new requestManagement_1.RequestManagement();
const instrctorAgreementRepository = new instructorAgreementRepository_1.InstrctorAgreementRepository();
const categoryRepository = new categoryRepository_1.CategoryRepository();
const cloudStorage = new cloudStorage_1.CloudStorage();
const courseRepository = new courseRepository_1.CourseRepository();
const paymentService = new paymentService_1.PaymentService();
const paymentRepository = new paymentRepository_1.PaymentRepository();
const reviewAndRatingRepository = new reviewAndRatingRepository_1.ReviewAndRatingRepository();
const courseTrackRepository = new coursTrackRepository_1.CourseTrackRepository();
const notificationRepository = new notificationRepository_1.NotificationRepository();
const userUseCase = new userUseCase_1.UserUsecase(userRepository, bcryptService, generateOTP, sendMail, otpRepository, jwtToken, cloudSession, requestManagement, instrctorAgreementRepository, notificationRepository);
const adminUseCase = new adminUseCase_1.AdminUseCase(userRepository, instrctorAgreementRepository, categoryRepository, notificationRepository, cloudSession);
const courseUseCase = new courseUseCase_1.CourseUseCase(cloudStorage, courseRepository, categoryRepository, paymentService, paymentRepository, userRepository, cloudSession, reviewAndRatingRepository, courseTrackRepository, notificationRepository);
const userController = new userController_1.UserController(userUseCase);
exports.userController = userController;
const adminController = new adminController_1.AdminController(adminUseCase);
exports.adminController = adminController;
const courseController = new coursesController_1.CoursesController(courseUseCase);
exports.courseController = courseController;
//# sourceMappingURL=injuctions.js.map
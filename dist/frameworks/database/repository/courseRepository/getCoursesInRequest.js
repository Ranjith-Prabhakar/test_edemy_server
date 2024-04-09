"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoursesInRequest = void 0;
const courseModel_1 = __importDefault(require("../../models/courseModel"));
const getCoursesInRequest = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield courseModel_1.default.find({
            status: "pending",
            submissionStatus: "completed",
        });
        console.log("result = 2525 25 2 52 5 2", result);
        return {
            status: 200,
            message: "existing courses have been fetched successfully",
            data: result,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getCoursesInRequest = getCoursesInRequest;
//# sourceMappingURL=getCoursesInRequest.js.map
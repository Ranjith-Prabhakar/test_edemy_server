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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseForSearch = void 0;
const catchError_1 = require("../../middlewares/catchError");
const getCourseForSearch = (courseRepository, req, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { key, pageNumber, frequency, sort, filter } = req.body;
        pageNumber = +pageNumber;
        frequency = +frequency;
        return courseRepository.getCourseForSearch(key, pageNumber, frequency, sort, filter);
    }
    catch (error) {
        (0, catchError_1.catchError)(error, next);
    }
});
exports.getCourseForSearch = getCourseForSearch;
//# sourceMappingURL=getCourseForSearch.js.map
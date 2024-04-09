import { Next } from "../../../frameworks/types/serverPackageTypes";
import { IPaymentService } from "../../interface/services/paymentService";
import { catchError } from "../../middlewares/catchError";

export const webHook = async (
  paymentService:IPaymentService,
  data: { userId: string; courseName: string },
  body: any,
  sig: any,
  next: Next
): Promise<any> => {
  try {
    return await  paymentService.webhook(data,body,sig)
  } catch (error) {
    catchError(error, next);
  }
};

import { IPaymentRespose, TPaymentRequest } from "../request_And_Response/payment";

export interface IPaymentService {
  pay(
    productData: TPaymentRequest,
    role: string
  ): Promise<IPaymentRespose | void>;
  webhook(
    data: { userId: string; courseName: string },
    body: any,
    sig: any
  ): Promise<any>;
}
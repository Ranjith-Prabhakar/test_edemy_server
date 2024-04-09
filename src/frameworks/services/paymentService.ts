import {
  IPaymentRespose,
  TPaymentRequest,
} from "../../useCasese/interface/request_And_Response/payment";
import { IPaymentService } from "../../useCasese/interface/services/paymentService";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export class PaymentService implements IPaymentService {
  async pay(
    productData: TPaymentRequest,
    role: string
  ): Promise<void | IPaymentRespose> {
    try {
      const lineItems = productData.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.courseName,
          },
          unit_amount: Math.round(+product.price * 100),
        },
        quantity: 1,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: lineItems,
        success_url: `${process.env.CLIENT}/${role}/payment_success`,
        cancel_url: `${process.env.CLIENT}/cancel`,
      });
      return { status: 200, message: "pay now", data: session.url as string };
    } catch (error) {
      throw error;
    }
  }

  async webhook(
    data: { userId: string; courseName: string },
    body: any,
    sig: any
  ): Promise<any> {
    try {
      const payload = body;
      const PayLoadString = JSON.stringify(payload, null, 2);
      if (typeof sig !== "string") return false;
      const endpointSecret = process.env.WEBHOOK_ENDPOINT_SECRETE;
       
      if (!endpointSecret) throw new Error("stripe secret key not defined");
      const header = stripe.webhooks.generateTestHeaderString({
        payload: PayLoadString,
        secret: endpointSecret,
      });
      let event;
      event = stripe.webhooks.constructEvent(
        PayLoadString,
        header,
        endpointSecret
      );
      if (event.data.object && "payment_method" in event.data.object) {
        var paymentMethod = event.data.object.payment_method;
        console.log("paymentMethod", paymentMethod);
      }
      if (event.data.object && "receipt_url" in event.data.object) {
        if (event.data.object.receipt_url) {
          var receiptUrl = event.data.object.receipt_url;
          console.log("receiptUrl", receiptUrl);
        }
      }
      if (event.type == "checkout.session.completed") return true;
      else return false;
    } catch (error) {
      throw error;
    }
  }
}

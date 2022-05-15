import prisma from "../../prisma";

import { FeedbackRepository } from "../feedbackRepository";
import { FeedbackParams } from "../../types/feedbackParams";
import { Feedback } from "../../types/feedback";

export default class PrismaFeedbackRepository implements FeedbackRepository {
  // eslint-disable-next-line class-methods-use-this
  async create(params: FeedbackParams): Promise<Feedback> {
    try {
      const result = (await prisma.feedback.create({
        data: params,
      })) as Feedback;

      return result;
    } catch (e: unknown) {
      // eslint-disable-next-line no-console
      console.error(e);

      return {} as Feedback;
    }
  }
}

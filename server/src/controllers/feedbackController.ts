import { Request, Response } from "express";

import FeedbackService from "../services/feedbackService";
import PrismaFeedbackRepository from "../repositories/prisma/prismaFeedbackRepository";
import NodemailerService from "../services/nodemailer/nodemailerService";
import { FeedbackParams } from "../types/feedbackParams";
import { Feedback } from "../types/feedback";

class FeedbackController {
  static service = new FeedbackService(
    new PrismaFeedbackRepository(),
    new NodemailerService()
  );

  static async create(req: Request, res: Response) {
    const { feedback }: { feedback: FeedbackParams } = req.body;

    const result = (await this.service.create(feedback)) as {
      created: boolean;
      object: Feedback;
    };

    if (result.created)
      return res.status(201).json({ feedback: result.object });

    return res.status(422).send();
  }
}

export default FeedbackController;

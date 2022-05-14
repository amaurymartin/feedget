import { Request, Response } from "express";
import prisma from "../prisma";

import { Feedback } from "../types/feedback";

class FeedbackController {
  static async create(req: Request, res: Response) {
    const { feedback }: { feedback: Feedback } = req.body;

    try {
      const result = await prisma.feedback.create({ data: feedback });

      return res.status(201).json({ feedback: result });
    } catch (e: unknown) {
      // eslint-disable-next-line no-console
      console.error(e);

      return res.status(422).send();
    }
  }
}

export default FeedbackController;

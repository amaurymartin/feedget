import { Request, Response } from "express";
import prisma from "../prisma";

import { Feedback } from "../types/feedback";
import mailtrap from "../config/mailtrap";

class FeedbackController {
  static async create(req: Request, res: Response) {
    const { feedback }: { feedback: Feedback } = req.body;

    try {
      const result = await prisma.feedback.create({ data: feedback });

      // FIXME: this should be done by a background job
      await this.sendFeedbackCreationEmail(result.type, result.text);

      return res.status(201).json({ feedback: result });
    } catch (e: unknown) {
      // eslint-disable-next-line no-console
      console.error(e);

      return res.status(422).send();
    }
  }

  static async sendFeedbackCreationEmail(
    feedbackType: string,
    feedbackText: string
  ) {
    if (process.env.NODE_ENV !== "development") return;

    await mailtrap.sendMail({
      from: "Feedget Team <team@feedget.com>",
      to: "John Doe <johndoe@example.com>",
      subject: "New feedback",
      html: [
        `<div style="color: #111; font family: sans-serif; font-size: 16px;">`,
        `<p>Feedback type: ${feedbackType}</p>`,
        `<p>Text: ${feedbackText}</p>`,
        "</div>",
      ].join("\n"),
    });
  }
}

export default FeedbackController;

import { FeedbackRepository } from "../repositories/feedbackRepository";
import { MailService } from "./mailService";
import { FeedbackParams } from "../types/feedbackParams";

export default class FeedbackService {
  constructor(
    private repository: FeedbackRepository,
    private mailer: MailService
  ) {}

  async create(params: FeedbackParams): Promise<Object> {
    if (!params.type || !params.text) throw new Error("Invalid params");
    if (
      params.screenshot &&
      !params.screenshot.startsWith("data:image/png;base64")
    )
      throw new Error("Invalid screenshot");

    try {
      const feedback = await this.repository.create(params);

      // FIXME: this should be done by a background job
      await this.mailer.sendMail({
        to: ["John Doe <johndoe@example.com>"],
        subject: "New feedback",
        body: [
          `<div style="color: #111; font family: sans-serif; font-size: 16px;">`,
          `<p>Feedback type: ${feedback.type}</p>`,
          `<p>Text: ${feedback.text}</p>`,
          "</div>",
        ].join("\n"),
      });

      if (Object.keys(feedback).length > 0)
        return { created: true, object: feedback };
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.error(error);
    }

    return { created: false, object: undefined };
  }
}

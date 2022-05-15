import mailtrap from "../../config/mailtrap";

import { MailData, MailService } from "../mailService";

export default class NodemailerService implements MailService {
  // eslint-disable-next-line class-methods-use-this
  async sendMail(data: MailData) {
    if (process.env.NODE_ENV !== "development") return;

    await mailtrap.sendMail({
      from: "Feedget Team <team@feedget.com>",
      to: data.to,
      subject: data.subject,
      html: data.body,
    });
  }
}

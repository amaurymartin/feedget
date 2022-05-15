export interface MailData {
  to: string[];
  subject: string;
  body: string;
}

export interface MailService {
  sendMail: (data: MailData) => Promise<void>;
}

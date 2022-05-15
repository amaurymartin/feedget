import { FeedbackParams } from "../types/feedbackParams";
import { Feedback } from "../types/feedback";

export interface FeedbackRepository {
  create: (params: FeedbackParams) => Promise<Feedback>;
}

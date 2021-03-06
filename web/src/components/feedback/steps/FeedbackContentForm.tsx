import { FormEvent, useState } from "react";

import feedbackTypes from "../../../types/feedback/feedbackTypes";
import Header from "../Header";
import ScreenshotButton from "../../buttons/ScreenshotButton";
import Loading from "../../Loading";

import api from "../../../services/api";

interface FeedbackContentFormProps {
  title: string;
  resetFeedback: () => void;
  onFeedbackSubmit: () => void;
}

export default function FeedbackContentForm({
  title,
  resetFeedback,
  onFeedbackSubmit,
}: FeedbackContentFormProps) {
  const [feedbackText, setFeedbackText] = useState<string | null>(null);
  const [screenshotBase64, setScreenshotBase64] = useState<string | null>(null);
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);

  const selectedFeedbackType = feedbackTypes.find(
    (feedbackType) => feedbackType.title === title
  );

  async function submitFeedback(e: FormEvent) {
    e.preventDefault();

    setIsSubmittingFeedback(true);

    const payload = {
      feedback: {
        type: selectedFeedbackType?.title,
        text: feedbackText,
        screenshot: screenshotBase64,
      },
    };

    await api
      .post("/feedbacks", payload)
      .then(() => onFeedbackSubmit())
      .catch((error) => {
        console.error(error);
        alert("Error when trying to submit feedback. Please, try again later.");
      })
      .finally(() => setIsSubmittingFeedback(false));
  }

  return (
    <>
      <Header
        imgAlt={selectedFeedbackType?.image.alt}
        imgSrc={selectedFeedbackType?.image.src}
        title={title}
        onReturn={resetFeedback}
      />

      <form className="my-4 w-full" onSubmit={(event) => submitFeedback(event)}>
        <textarea
          className="bg-transparent border-zinc-600 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 min-h-[112px] min-w-[304px] placeholder-zinc-400 resize-none rounded-md scrollbar scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent text-sm text-zinc-100 w-full"
          onChange={(event) => setFeedbackText(event.target.value)}
          placeholder="Give your feedback"
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshotBase64}
            setScreenshotBase64={setScreenshotBase64}
          />

          <button
            className="bg-brand-500 border-transparent disabled:hover:bg-brand-500 disabled:opacity-50 flex flex-1 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 hover:bg-brand-300 items-center justify-center p-2 rounded-md text-sm transition-colors"
            disabled={feedbackText === "" || isSubmittingFeedback}
            type="submit"
          >
            {isSubmittingFeedback ? <Loading /> : "Send"}
          </button>
        </footer>
      </form>
    </>
  );
}

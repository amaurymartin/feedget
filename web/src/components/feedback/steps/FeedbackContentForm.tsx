import { FormEvent, useState } from "react";

import feedbackTypes from "../../../types/feedback/feedbackTypes";
import Header from "../Header";
import ScreenshotButton from "../../buttons/ScreenshotButton";

interface FeedbackContentFormProps {
  title: string;
  onReturn: () => void;
  onFeedbackSubmit: () => void;
}

export default function FeedbackContentForm({
  title,
  onReturn,
  onFeedbackSubmit,
}: FeedbackContentFormProps) {
  const [feedbackText, setFeedbackText] = useState<string>("");
  const [screenshotBase64, setScreenshotBase64] = useState<string | null>(null);

  const selectedFeedbackType = feedbackTypes.find(
    (feedbackType) => feedbackType.title === title
  );

  function submitFeedback(e: FormEvent) {
    e.preventDefault();

    const data = {
      feedback: {
        text: feedbackText,
        image: screenshotBase64,
      },
    };

    // eslint-disable-next-line no-console
    console.log("Feedback submitted", data);

    onFeedbackSubmit();
  }

  return (
    <>
      <Header
        imgAlt={selectedFeedbackType?.image.alt}
        imgSrc={selectedFeedbackType?.image.src}
        title={title}
        onReturn={onReturn}
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
            onPrintScreen={setScreenshotBase64}
          />

          <button
            className="bg-brand-500 border-transparent disabled:hover:bg-brand-500 disabled:opacity-50 flex flex-1 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 hover:bg-brand-300 items-center justify-center p-2 rounded-md text-sm transition-colors"
            disabled={feedbackText === ""}
            type="submit"
          >
            Send
          </button>
        </footer>
      </form>
    </>
  );
}

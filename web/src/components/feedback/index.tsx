/* eslint-disable no-nested-ternary */
import { useCallback, useState } from "react";

import FeedbackTypeSelection from "./steps/FeedbackTypeSelection";
import FeedbackContentForm from "./steps/FeedbackContentForm";
import FeedbackResult from "./steps/FeedbackResult";

export default function Feedback() {
  const [selectedFeedbackType, setSelectedFeedbackType] = useState<
    "Bug" | "New idea" | "Other" | null
  >(null);
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);

  const resetFeedback = useCallback(() => {
    setSelectedFeedbackType(null);
    setIsFeedbackSubmitted(false);
  }, []);

  return (
    <div className="bg-zinc-900 flex flex-col items-center mb-4 md:w-auto p-4 relative rounded-2xl shadow-lg w-[calc(100vw-2rem)]">
      {isFeedbackSubmitted ? (
        <FeedbackResult resetFeedback={resetFeedback} />
      ) : !selectedFeedbackType ? (
        <FeedbackTypeSelection
          setSelectedFeedbackType={setSelectedFeedbackType}
        />
      ) : (
        <FeedbackContentForm
          title={selectedFeedbackType}
          resetFeedback={resetFeedback}
          onFeedbackSubmit={() => setIsFeedbackSubmitted(true)}
        />
      )}

      <footer className="text-neutral-400 text-xs">
        Done with ♥ by{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
          target="blank"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}

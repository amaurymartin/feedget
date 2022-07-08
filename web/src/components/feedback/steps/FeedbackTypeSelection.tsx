import feedbackTypes from "../../../types/feedback/feedbackTypes";
import { FeedbackTypeProps } from "../../../types/props/feedbackTypeProps";

import Header from "../Header";

interface FeedbackTypeSelectionProps {
  setSelectedFeedbackType: (type: "Bug" | "New idea" | "Other") => void;
}

export default function FeedbackTypeSelection({
  setSelectedFeedbackType,
}: FeedbackTypeSelectionProps) {
  return (
    <>
      <Header title="Leave your feedback" />

      <div className="flex gap-2 py-8 w-full">
        {feedbackTypes.map((feedbackType: FeedbackTypeProps) => (
          <button
            className="bg-zinc-800 border-2 border-transparent flex flex-1 flex-col focus:border-brand-500 focus:outline-none gap-2 hover:border-brand-500 items-center py-5 rounded-lg w-24"
            key={feedbackType.title}
            onClick={() =>
              setSelectedFeedbackType(
                feedbackType.title as "Bug" | "New idea" | "Other"
              )
            }
            type="button"
          >
            <img alt={feedbackType.image.alt} src={feedbackType.image.src} />
            <span>{feedbackType.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}

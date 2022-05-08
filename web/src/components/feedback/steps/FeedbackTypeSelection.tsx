import feedbackTypes from "../../../types/feedback/feedbackTypes";
import { FeedbackTypeProps } from "../../../types/props/feedbackTypeProps";

import Header from "../Header";

interface FeedbackTypeSelectionProps {
  onFeedbackTypeChange: (type: "Bug" | "New idea" | "Other") => void;
}

export default function FeedbackTypeSelection({
  onFeedbackTypeChange,
}: FeedbackTypeSelectionProps) {
  return (
    <>
      <Header title="Leave your feedback" />

      <div className="flex gap-2 py-8 w-full">
        {feedbackTypes.map((props: FeedbackTypeProps) => (
          <button
            className="bg-zinc-800 border-2 border-transparent flex flex-1 flex-col focus:border-brand-500 focus:outline-none gap-2 hover:border-brand-500 items-center py-5 rounded-lg w-24"
            key={props.title}
            onClick={() =>
              onFeedbackTypeChange(props.title as "Bug" | "New idea" | "Other")
            }
            type="button"
          >
            <img alt={props.image.alt} src={props.image.src} />
            <span>{props.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}

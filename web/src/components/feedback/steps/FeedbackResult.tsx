import successImageUrl from "../../../assets/success.svg";

import CloseButton from "../../buttons/CloseButton";

interface FeedbackResultProps {
  onReturn: () => void;
}

export default function FeedbackResult({ onReturn }: FeedbackResultProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img alt="White check mark within green box" src={successImageUrl} />

        <span className="mt-2 text-xl">Thank you for your feedback!</span>

        <button
          className="bg-zinc-800 border-transparent focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 hover:bg-zinc-700 leading-6 mt-6 px-6 py-2 rounded-md text-sm transition-colors"
          onClick={onReturn}
          type="button"
        >
          New feedback
        </button>
      </div>
    </>
  );
}

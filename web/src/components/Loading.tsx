import { CircleNotch } from "phosphor-react";

export default function ScreenshotButton() {
  return (
    <div className="flex h-6 items-center justify-center overflow-hidden w-6">
      <CircleNotch className="animate-spin h-4 w-4" weight="bold" />
    </div>
  );
}

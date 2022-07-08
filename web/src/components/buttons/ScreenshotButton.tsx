import { useState } from "react";
import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";

import Loading from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  setScreenshotBase64: (type: string | null) => void;
}

export default function ScreenshotButton({
  screenshot,
  setScreenshotBase64,
}: ScreenshotButtonProps) {
  const [isScreenshotLoading, setIsScreenshotLoading] = useState(false);

  async function printScreen() {
    setIsScreenshotLoading(true);
    setScreenshotBase64(
      (await html2canvas(document.querySelector("html")!)).toDataURL(
        "image/png"
      )
    );
    setIsScreenshotLoading(false);
  }

  if (screenshot) {
    return (
      <button
        className="border-transparent flex h-10 hover:text-zinc-100 items-end justify-end p-1 rounded-md text-zinc-400 transition-colors w-10"
        onClick={() => setScreenshotBase64(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
        type="button"
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      className=" bg-zinc-800 border-transparent focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 hover:bg-zinc-700 p-2 rounded-md transition-colors"
      onClick={printScreen}
      type="button"
    >
      {!isScreenshotLoading ? <Camera className="h-6 w-6" /> : <Loading />}
    </button>
  );
}

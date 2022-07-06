import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

import Feedback from "./feedback";

export default function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>
        <Feedback />
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 flex group h-12 items-center px-3 rounded-full text-white">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="duration-500 ease-linear group-hover:max-w-xs max-w-0 overflow-hidden transition-all">
          <span className="pl-2" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}

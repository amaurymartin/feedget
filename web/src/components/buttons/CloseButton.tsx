import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export default function CloseButton() {
  return (
    <Popover.Button
      className="absolute hover:text-zinc-100 right-5 text-zinc-400 top-5"
      title="Close"
    >
      <X className="h-4 w-4" weight="bold" />
    </Popover.Button>
  );
}

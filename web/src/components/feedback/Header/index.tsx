import { ArrowLeft } from "phosphor-react";

import CloseButton from "../../buttons/CloseButton";

interface HeaderProps {
  imgAlt?: string;
  imgSrc?: string;
  title: string;
  onReturn?: () => void;
}

export default function Header({
  imgAlt,
  imgSrc,
  title,
  onReturn,
}: HeaderProps) {
  return (
    <header>
      {onReturn && (
        <button
          className="absolute hover:text-zinc-100 left-5 text-zinc-400 top-5"
          onClick={onReturn}
          type="button"
        >
          <ArrowLeft className="h-4 w-4" weight="bold" />
        </button>
      )}

      <span className="flex gap-2 items-center leading-6 text-xl">
        {imgAlt && imgSrc && (
          <img alt={imgAlt} className="h-6 w-6" src={imgSrc} />
        )}
        {title}
      </span>

      <CloseButton />
    </header>
  );
}

Header.defaultProps = {
  imgAlt: null,
  imgSrc: null,
  onReturn: null,
};

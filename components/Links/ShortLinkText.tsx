import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const ShortLinkText = (props: Props) => {
  return (
    <Link
      href={props.href}
      className={`${props.className} italic text-zinc-400 hover:opacity-70 duration-200 text-sm`}
    >
      {props.children}
    </Link>
  );
};

export default ShortLinkText;

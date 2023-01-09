import React, { FC } from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const ShortLinkText: FC<Props> = (props) => {
  return (
    <Link href={props.href} className="underline text-zinc-400 text-sm">
      {props.children}
    </Link>
  );
};

export default ShortLinkText;

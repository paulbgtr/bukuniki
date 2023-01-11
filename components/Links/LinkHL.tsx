// Highlighted link component
import React, { FC } from "react";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LinkHL: FC<Props> = (props) => {
  return (
    <Link
      className={`${props.className} text-lg text-pink-300 no-underline font-bold duration-300 hover:text-white`}
      href={props.href}
    >
      {props.children}
    </Link>
  );
};

export default LinkHL;

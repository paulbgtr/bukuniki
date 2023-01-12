import React, { FC } from "react";
import Link from "next/link";

type Props = {
  author: string;
  title: string;
  href: string;
};

const Journal: FC<Props> = (props) => {
  return (
    <Link className="duration-200 hover:opacity-50" href={props.href}>
      <div className="rounded-xl p-10 md:p-20 shadow-2xl">
        <h5 className="mb-3">{props.author}</h5>
        <p>{props.title}</p>
      </div>
    </Link>
  );
};

export default Journal;

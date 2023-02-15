import Link from "next/link";
import React from "react";

type Props = {
  author: string;
  title: string;
  href: string;
};

const Journal = (props: Props) => {
  return (
    <Link className="duration-200 hover:opacity-50" href={props.href}>
      <div className="p-10 shadow-2xl rounded-xl md:p-20">
        <h5 className="mb-3">{props.author}</h5>
        <p>{props.title}</p>
      </div>
    </Link>
  );
};

export default Journal;

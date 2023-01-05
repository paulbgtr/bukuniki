import React from "react";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Text: FC<Props> = (props) => {
  return <p className={`${props.className} text-lg`}>{props.children}</p>;
};

export default Text;

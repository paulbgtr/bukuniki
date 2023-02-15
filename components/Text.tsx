import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Text = (props: Props) => {
  return <p className={`${props.className} text-lg`}>{props.children}</p>;
};

export default Text;

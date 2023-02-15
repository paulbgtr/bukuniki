import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Text = ({ children, className }: Props) => {
  return <p className={`${className} text-lg`}>{children}</p>;
};

export default Text;

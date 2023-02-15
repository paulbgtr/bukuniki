import React from "react";

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => {
  return <hr className={`${className} my-5`} />;
};

export default Divider;

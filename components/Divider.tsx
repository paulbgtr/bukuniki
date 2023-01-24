import React, { FC } from "react";

type Props = {
  className?: string;
};

const Divider: FC<Props> = ({ className }) => {
  return <hr className={`${className} my-5`} />;
};

export default Divider;

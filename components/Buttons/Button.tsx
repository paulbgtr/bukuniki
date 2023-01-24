import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onclick?: () => void;
  variant?: "outlined" | "filled";
}

const Button: FC<Props> = (props) => {
  let classes = "";

  switch (props.variant) {
    case "outlined":
      classes =
        "duration-300 py-3 px-5 rounded-xl border-2 border-pink-300 font-bold text-sm hover:opacity-70 bg-white-300";
      break;
    default:
      classes =
        "duration-300 py-3 px-5 rounded-xl border-2 border-pink-300 font-bold text-sm hover:opacity-70 bg-pink-300";
  }

  return (
    <button onClick={props.onclick} className={`${props.className} ${classes}`}>
      {props.children}
    </button>
  );
};

export default Button;

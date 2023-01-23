import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onclick?: () => void;
  variant?: "outlined" | "filled";
}

const Button: FC<Props> = (props) => {
  return (
    <>
      {props.variant === "outlined" ? (
        <button
          onClick={props.onclick}
          className={`${props.className} duration-300 py-3 px-5 rounded-xl font-bold border-2 text-sm hover:opacity-70 border-pink-300 bg-white-300`}
        >
          {props.children}
        </button>
      ) : (
        <button
          onClick={props.onclick}
          className={`${props.className} duration-300 py-3 px-5 rounded-xl border-2 border-pink-300 font-bold text-sm hover:opacity-70 bg-pink-300`}
        >
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;

import { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onclick?: () => void;
}

const Button: FC<Props> = (props) => {
  return (
    <button
      onClick={props.onclick}
      className={`${props.className} duration-300 py-3 px-5 rounded-xl font-bold text-lg hover:opacity-70 bg-pink-300`}
    >
      {props.children}
    </button>
  );
};

export default Button;

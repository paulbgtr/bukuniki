import { FC } from "react";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  className?: string;
  onclick?: () => void;
}

const Button: FC<Props> = (props) => {
  return (
    <button onClick={props.onclick} className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;

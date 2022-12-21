import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  return <button>{props.children}</button>;
};

export default Button;

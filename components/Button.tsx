import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className="btn btn-accent">
      {children}
    </button>
  );
};

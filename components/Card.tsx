import React from "react";
import { FC } from "react";

interface Props {
  title: string;
  id?: string;
  textSize?: string;
  children?: React.ReactNode;
  button?: boolean;
  buttonText?: string;
  onclick?: () => void;
}

const Card: FC<Props> = (props) => {
  return (
    <div id={props.id} className="block max-w-sm p-6 rounded-lg shadow-xl">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-300">
        {props.title}
      </h5>
      <div className={`text-${props.textSize} dark:text-gray-400`}>
        {props.children}
      </div>
      {props.button ? (
        <button
          className="duration-300 mt-3 py-2 px-3 rounded-xl font-bold text-md hover:opacity-70 bg-pink-300"
          onClick={props.onclick}
        >
          {props.buttonText}
        </button>
      ) : null}
    </div>
  );
};

export default Card;

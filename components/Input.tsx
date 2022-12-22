import { FC } from "react";

interface Props {
  type: string;
  className?: string;
  placeholder?: string;
  name?: string;
  id?: string;
}

const Input: FC<Props> = (props) => {
  return (
    <div>
      <input
        className={`${props.className} rounded-xl p-3 border-2 border-pink-300`}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        id={props.id}
      />
    </div>
  );
};

export default Input;

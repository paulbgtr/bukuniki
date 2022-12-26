// Main Container for pages' content
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = (props) => {
  return (
    <div className="mt-6 flex flex-nowrap gap-8 justify-center">
      {props.children}
    </div>
  );
};

export default Container;

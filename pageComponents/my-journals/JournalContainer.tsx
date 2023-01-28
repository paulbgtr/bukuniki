// a container component for all of the journal components on the page
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const JournalContainer: FC<Props> = (props) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-5 md:justify-items-center mt-6">
      {props.children}
    </div>
  );
};

export default JournalContainer;

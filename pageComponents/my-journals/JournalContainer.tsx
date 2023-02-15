// a container component for all of the journal components on the page
import React from "react";

type Props = {
  children: React.ReactNode;
};

const JournalContainer = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-6 md:grid-cols-4 md:justify-items-center">
      {children}
    </div>
  );
};

export default JournalContainer;

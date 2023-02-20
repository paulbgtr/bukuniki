import React from "react";

import { notify } from "../../utils/notify";

type AddJournalProps = {
  formFilled: () => boolean;
};

const AddJournal = ({ formFilled }: AddJournalProps) => {
  const handleClick = () => {
    if (formFilled()) {
      notify("Journal Added!");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 pt-1 pb-2 mt-5 text-3xl text-white duration-300 bg-pink-300 rounded-full hover:opacity-70"
    >
      +
    </button>
  );
};

export default AddJournal;

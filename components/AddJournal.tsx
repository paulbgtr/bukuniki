// Description: The Add Journal "+" button for the New Journal component.

import { notify } from "./NewJournalNotification";

const AddJournal = () => {
  return (
    <>
      <button
        onClick={notify}
        className="rounded-full bg-pink-300 px-4 pt-1 pb-2 text-3xl text-white hover:opacity-70 duration-300"
      >
        +
      </button>
    </>
  );
};

export default AddJournal;

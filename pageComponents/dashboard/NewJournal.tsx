import React, { useState } from "react";

import Card from "../../components/Card";
import Notification from "../../components/Notification";
import { notify } from "../../utils/notify";

type AddJournalProps = {
  formFilled: () => boolean;
};

// This is the "plus sign button" that appears in the NewJournal component.
const AddJournal = ({ formFilled }: AddJournalProps) => {
  const handleClick = () => {
    if (formFilled()) {
      notify("Journal Added!");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 pt-1 pb-2 text-3xl text-white duration-300 bg-pink-300 rounded-full hover:opacity-70"
    >
      +
    </button>
  );
};

const NewJournal = () => {
  const [state, setState] = useState({
    author: "",
    title: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFormFilled = () => {
    if (state.author && state.title) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTimeout(() => {
      setState({
        author: "",
        title: "",
      });
    }, 2100);
  };

  return (
    <Card title="New Journal">
      <form onSubmit={handleSubmit} action="">
        <div className="w-full">
          <input
            placeholder="Book's Author"
            className="w-full py-2 pl-3 mt-3 mb-3 border-2 border-pink-300 focus:outline-none rounded-xl"
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Book's Title"
            className="w-full py-2 pl-3 border-2 border-pink-300 focus:outline-none rounded-xl"
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-5">
          <AddJournal formFilled={isFormFilled} />
        </div>
      </form>
      {isFormFilled() && <Notification />}
    </Card>
  );
};

export default NewJournal;

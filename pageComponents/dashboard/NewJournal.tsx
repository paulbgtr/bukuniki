import React, { FC, useState } from "react";
import Notification from "../../components/Notification";
import Card from "../../components/Card";
import { notify } from "../../utils/notify";

type AddJournalProps = {
  formFilled: () => boolean;
};

// This is the "plus sign button" that appears in the NewJournal component.
const AddJournal: FC<AddJournalProps> = ({ formFilled }) => {
  const handleClick = () => {
    if (formFilled()) {
      notify("Journal Added!");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-pink-300 px-4 pt-1 pb-2 text-3xl text-white hover:opacity-70 duration-300"
    >
      +
    </button>
  );
};

const NewJournal: FC = () => {
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
            className="w-full border-2 mt-3 mb-3 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Book's Title"
            className="w-full border-2 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
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

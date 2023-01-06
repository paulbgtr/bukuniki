import React, { FC } from "react";
import Card from "./Card";
import { notify } from "./NewJournalNotification";
import { useState } from "react";
import NewJournalNotification from "./NewJournalNotification";

type AddJournalProps = {
  formFilled: () => boolean;
};

// This is the "plus sign button" that appears in the NewJournal component.
const AddJournal: FC<AddJournalProps> = (props) => {
  const handleClick = () => {
    if (props.formFilled()) {
      notify();
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
    }, 2000);
  };

  return (
    <div>
      <Card title="New Journal">
        <form onSubmit={handleSubmit} action="">
          <div className="flex-wrap flex justify-center">
            <input
              placeholder="Book's Author"
              className="w-80 border-2 mt-3 mb-3 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
              type="text"
              name="author"
              value={state.author}
              onChange={handleChange}
              required
            />
            <input
              placeholder="Book's Title"
              className="w-80 border-2 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
              type="text"
              name="title"
              value={state.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-5">
            <AddJournal formFilled={isFormFilled} />
            {isFormFilled() ? <NewJournalNotification /> : null}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewJournal;

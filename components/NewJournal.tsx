import Card from "./Card";
import AddJournal from "./AddJournal";
import { useState } from "react";
import NewJournalNotification from "./NewJournalNotification";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Card title="New Journal">
        <form onSubmit={handleSubmit} action="">
          <input
            placeholder="Book's Author"
            className="w-96 border-2 mt-3 mb-3 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Book's Title"
            className="w-96 border-2 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
            required
          />
          <div className="mt-5">
            <AddJournal />
            {state.author && state.title ? <NewJournalNotification /> : null}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewJournal;

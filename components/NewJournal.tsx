import Card from "./Card";
import AddJournal from "./AddJournal";

const NewJournal = () => {
  return (
    <div>
      <Card title="New Journal">
        <form action="">
          <input
            placeholder="Book's Author"
            className="w-96 border-2 mt-3 mb-3 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
            type="text"
            required
          />
          <input
            placeholder="Book's Title"
            className="w-96 border-2 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
            type="text"
            required
          />
          <div className="mt-5">
            <AddJournal />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewJournal;

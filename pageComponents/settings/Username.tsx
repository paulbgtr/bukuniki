import React, { FC } from "react";
import Button from "../../components/Buttons/Button";

const Username: FC = () => {
  return (
    <section className="mt-3">
      <h5 className="text-lg font-bold">Username</h5>
      <p>
        You can change your username only every thirty days. Your username must
        be alphanumeric and between 3 and 20 characters.
      </p>
      <form action="">
        <div className="inline-flex flex-col">
          <input
            type="text"
            className="mt-3 mb-3 text-black bg-white rounded-xl p-2"
            placeholder="New Username"
          />

          <Button variant="outlined">Update Username</Button>
        </div>
      </form>
    </section>
  );
};

export default Username;

// todo: add state management and form validation

import React, { FC } from "react";

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
          <button className="p-2 border border-pink-300 hover:opacity-75 rounded-lg">
            Update Username
          </button>
        </div>
      </form>
    </section>
  );
};

export default Username;

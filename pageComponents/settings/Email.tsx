import React, { FC } from "react";

const Email: FC = () => {
  return (
    <section>
      <h5 className="text-lg font-bold">Email</h5>
      <p>Here you can associate a new email with your account. </p>
      <form action="">
        <div className="inline-flex flex-col">
          <input
            type="text"
            className="mt-3 mb-3 bg-white rounded-xl text-black p-2"
            placeholder="New Username"
          />
          <input
            type="password"
            className="mt-3 mb-3 bg-white rounded-xl text-black p-2"
            placeholder="Password"
          />
          <button className="p-2 border border-pink-300 hover:opacity-75 rounded-lg">
            Update Username
          </button>
        </div>
      </form>
    </section>
  );
};

export default Email;

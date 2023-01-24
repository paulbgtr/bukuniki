import React, { FC } from "react";
import Button from "../../components/Buttons/Button";

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
          <Button variant="outlined">Update Email</Button>
        </div>
      </form>
    </section>
  );
};

export default Email;

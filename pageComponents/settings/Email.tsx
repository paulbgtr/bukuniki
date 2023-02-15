import React from "react";

import Button from "../../components/Buttons/Button";

const Email = () => {
  return (
    <section>
      <h5 className="text-lg font-bold">Email</h5>
      <p>Here you can associate a new email with your account. </p>
      <form action="">
        <div className="inline-flex flex-col">
          <input
            type="text"
            className="p-2 mt-3 mb-3 text-black bg-white rounded-xl"
            placeholder="New Username"
          />
          <input
            type="password"
            className="p-2 mt-3 mb-3 text-black bg-white rounded-xl"
            placeholder="Password"
          />
          <Button variant="outlined">Update Email</Button>
        </div>
      </form>
    </section>
  );
};

export default Email;

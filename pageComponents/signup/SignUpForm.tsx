import React, { useState } from "react";

import Button from "../../components/Buttons/Button";
import ShortLinkText from "../../components/Links/ShortLinkText";

const SignUpForm = () => {
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex justify-center w-2/5 shadow-2xl rounded-xl">
        <form className="flex flex-col justify-center mt-5 mb-5" action="">
          <h1 className="mb-3 text-lg font-bold text-center">
            Sign Up to bukuniki
          </h1>
          <input
            placeholder="Email"
            className="py-2 pl-3 mt-3 mb-3 border-2 border-pink-300 w-80 focus:outline-none rounded-xl"
            type="email"
            value={state.email}
            onChange={handleChange}
            name="email"
            id="email"
            required
          />
          <input
            placeholder="Username"
            className="py-2 pl-3 mt-3 mb-3 border-2 border-pink-300 w-80 focus:outline-none rounded-xl"
            type="text"
            value={state.username}
            onChange={handleChange}
            name="username"
            id="username"
            required
          />
          <input
            placeholder="Password"
            className="py-2 pl-3 mt-3 mb-3 border-2 border-pink-300 w-80 focus:outline-none rounded-xl"
            type="password"
            value={state.password}
            onChange={handleChange}
            name="password"
            id="password"
            required
          />
          <Button className="py-2 mt-3">Sign Up</Button>
          <ShortLinkText className="self-center mt-3" href="/login">
            Login
          </ShortLinkText>
          <ShortLinkText className="self-center mt-3" href="/privacy">
            why is my email address needed?
          </ShortLinkText>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;

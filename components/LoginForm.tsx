// todo implement email validation

import React, { useState, FC } from "react";
import Button from "./Button";
import ShortLinkText from "../components/ShortLinkText";

const LoginForm: FC = () => {
  const [state, setState] = useState({
    email: "",
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
    <div className="shadow-2xl rounded-xl flex justify-center w-2/5">
      <form className="flex justify-center flex-col mb-5 mt-5" action="">
        <h1 className="text-lg font-bold text-center mb-3">
          Login to bukuniki
        </h1>
        <input
          placeholder="Email"
          className="w-80 border-2 mt-3 mb-3 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
          type="email"
          value={state.email}
          onChange={handleChange}
          name="email"
          id="email"
          required
        />
        <input
          placeholder="Password"
          className="w-80 border-2 mt-3 mb-3 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
          type="password"
          value={state.password}
          onChange={handleChange}
          name="password"
          id="password"
          required
        />
        <Button className="mt-3 py-2">Login</Button>
        <ShortLinkText className="self-center mt-3" href="/signup">
          Sign Up
        </ShortLinkText>
      </form>
    </div>
  );
};

export default LoginForm;

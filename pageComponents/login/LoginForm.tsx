// todo implement email validation

import React, { useState } from "react";

import Button from "../../components/Buttons/Button";
import ShortLinkText from "../../components/Links/ShortLinkText";

const LoginForm = () => {
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
    <div className="flex justify-center w-2/5 shadow-2xl rounded-xl">
      <form className="flex flex-col justify-center mt-5 mb-5" action="">
        <h1 className="mb-3 text-lg font-bold text-center">
          Login to bukuniki
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
          placeholder="Password"
          className="py-2 pl-3 mt-3 mb-3 border-2 border-pink-300 w-80 focus:outline-none rounded-xl"
          type="password"
          value={state.password}
          onChange={handleChange}
          name="password"
          id="password"
          required
        />
        <Button className="py-2 mt-3">Login</Button>
        <ShortLinkText className="self-center mt-3" href="/signup">
          Sign Up
        </ShortLinkText>
      </form>
    </div>
  );
};

export default LoginForm;

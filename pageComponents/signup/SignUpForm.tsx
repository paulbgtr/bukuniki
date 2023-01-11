import React, { useState, FC } from "react";
import Button from "../../components/Buttons/Button";
import ShortLinkText from "../../components/Links/ShortLinkText";

const SignUpForm: FC = () => {
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
      <div className="shadow-2xl rounded-xl flex justify-center w-2/5">
        <form className="flex justify-center flex-col mb-5 mt-5" action="">
          <h1 className="text-lg text-center font-bold mb-3">
            Sign Up to bukuniki
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
            placeholder="Username"
            className="w-80 border-2 mt-3 mb-3 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
            type="text"
            value={state.username}
            onChange={handleChange}
            name="username"
            id="username"
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
          <Button className="mt-3 py-2">Sign Up</Button>
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

import React, { FC } from "react";
import Button from "./Button";
import ShortLinkText from "../components/ShortLinkText";

const LoginForm: FC = () => {
  return (
    <>
      <div className="shadow-xl flex justify-center w-2/5">
        <form className="flex justify-center flex-col mb-5 mt-5" action="">
          <input
            placeholder="Email"
            className="w-80 border-2 mt-3 mb-3 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
            type="email"
            name="email"
            id="email"
          />
          <input
            placeholder="Password"
            className="w-80 border-2 mt-3 mb-3 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
            type="password"
            name="password"
            id="password"
          />
          <Button className="mt-3 py-2">Login</Button>
          <ShortLinkText className="self-center mt-3" href="/signup">
            Sign Up
          </ShortLinkText>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

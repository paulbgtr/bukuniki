import React, { FC } from "react";
import Button from "../../components/Buttons/Button";

const ContactForm: FC = () => {
  return (
    <form action="">
      <div className="flex gap-5 flex-col">
        <input
          className="w-80 md:w-96 border-2 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="w-80 md:w-96 border-2 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="w-80 md:w-96 border-2 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          className="w-80 md:w-96 h-80 resize-none border-2 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
          name="message"
          placeholder="Message"
        />
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default ContactForm;

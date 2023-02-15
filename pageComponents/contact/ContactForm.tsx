// todo: implement react-hook-form

import React from "react";

import Button from "../../components/Buttons/Button";

const ContactForm = () => {
  return (
    <form action="">
      <div className="flex flex-col gap-5">
        <input
          className="py-2 pl-3 border-2 border-pink-300 w-80 md:w-96 focus:outline-none rounded-xl"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="py-2 pl-3 border-2 border-pink-300 w-80 md:w-96 focus:outline-none rounded-xl"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="py-2 pl-3 border-2 border-pink-300 w-80 md:w-96 focus:outline-none rounded-xl"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          className="py-2 pl-3 border-2 border-pink-300 resize-none w-80 md:w-96 h-80 focus:outline-none rounded-xl"
          name="message"
          placeholder="Message"
        />
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default ContactForm;

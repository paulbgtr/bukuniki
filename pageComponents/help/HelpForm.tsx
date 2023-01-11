import React, { FC } from "react";

const HelpForm: FC = () => {
  return (
    <div className="p-5 flex justify-center w-2/5">
      <form action="">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-center mb-3">
            Contact bukuniki
          </h1>
          <textarea
            className="md:w-96 border-2 resize-none mt-3 mb-3 border-pink-300 focus:outline-none p-3 rounded-xl"
            placeholder="Your Message"
            name="message"
            id="message"
            cols={30}
            rows={15}
          />
          <p>Type of Message</p>
          <div className="flex gap-1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Bug</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Bug</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HelpForm;

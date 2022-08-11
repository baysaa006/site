import React from "react";
import "./contact.css";

export const contact = () => {
  return (
    <section id="contact" class=" inline-block w-full h-screen ">
      <div class="w-full h-full flex justify-center bg-orange-3 gap-8 px-10 pt-10 ">
        {/* right */}
        <div class="w-80 h-full  flex flex-col justify-center items-center space-y-6  p-10">
          <div class="w-80 h-10 text-black ">
            <input
              type="text"
              name="number"
              class="w-80 focus:ring-blue-500  focus:border-blue-500 focus:ring-2 focus:outline-none h-full bg-gray-200 rounded-xl b-none  pl-2"
              placeholder="Enter Your phone number"
            />
          </div>
          <div class="w-80 h-10 bg-gray-200 rounded-3xl text-black ">
            <input
              name="email"
              class="w-full h-full bg-gray-200 rounded-xl b-none pl-2 focus:ring-blue-500 focus:outline-none focus:ring-2 "
              placeholder="Enter Your Email"
            />
          </div>
          <div class="w-80 h-2/5 block bg-gray-200 rounded-xl text-black  ">
            <textarea
              class="w-full  h-full bg-gray-200 rounded-xl b-none pl-2  focus:ring-blue-500 focus:outline-none focus:ring-2 "
              placeholder="Type your message"
            />
          </div>
          <div class="w-80 h-10 sum rounded-xl flex items-center justify-center cursor-pointer ">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default contact;

import React, { useRef } from "react";
import Heading from "../snippets/Heading";
import Pump from "../snippets/Pump";
import { useTheme } from "../Context/ThemeChange";

function Contact() {
  const {theme} = useTheme()
  const pump = useRef([]);
  return (
    <section>
      <div className="container">
        <Heading name="Contact:" />
        <div className="flex flex-col-reverse md:grid grid-cols-2 items-center h-[80vh] justify-center items-center">
          <div className="w-full">
            <h3
              ref={(el) => el && pump.current.push(el)}
              className="cursor-default text-[#ff6db3] text-[30px] leading-[45px] font-bold"
            >
              Send A Meassage
            </h3>
            <form className=" flex flex-col gap-3">
              <div className="w-full flex flex-col sm:flex-row items-center gap-3">
                <input
                  className={`hafeScale-anima w-full  transition-all duration-500 p-[7px_11px] text-[20px] leading-[30px] rounded font-walter ${theme ? "bg-gray-300":"bg-[#ffffff5d]"} text-[#ff6db3] placeholder:text-[gray] `}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className={`hafeScale-anima w-full  transition-all duration-500 p-[7px_11px] text-[20px] leading-[30px] rounded font-walter ${theme ? "bg-gray-300":"bg-[#ffffff5d]"} text-[#ff6db3] placeholder:text-[gray] `}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  className={`hafeScale-anima w-full  transition-all duration-500 p-[7px_11px] text-[20px] leading-[30px] rounded font-walter ${theme ? "bg-gray-300":"bg-[#ffffff5d]"} text-[#ff6db3] placeholder:text-[gray] `}
                  type="email"
                  placeholder="Email"
                />
                <input
                  className={`hafeScale-anima w-full outline-none border-none transition-all duration-500 p-[7px_11px] text-[20px] leading-[30px] rounded font-walter ${theme ? "bg-gray-300":"bg-[#ffffff5d]"} text-[#ff6db3] placeholder:text-[gray] `}
                  type="tel"
                  maxLength="13"
                  placeholder="Phone"
                />
              </div>
              <textarea
                className={`hafeScale-anima w-full  transition-all duration-500 p-[7px_11px] text-[20px] leading-[30px] rounded font-walter ${theme ? "bg-gray-300":"bg-[#ffffff5d]"} text-[#ff6db3] placeholder:text-[gray]`}
                placeholder="Message"
                id=""
              ></textarea>
              <button
                type="submit"
                ref={(el) => el && pump.current.push(el)}
                className="p-[7px_11px] text-[20px] leading-[30px] rounded font-walter transition-all duration-300 bg-[#ff6db4a2] hover:bg-[#ff6db3] text-white"
              >
                Submit
              </button>
            </form>
          </div>
          <img
            className="h-auto sm:h-[500px] hafeScale-anima"
            src={require(`../assets/svg/sent-pana.svg`).default}
            alt="contect-banner"
          />
        </div>
      </div>
      <Pump array={pump} />
    </section>
  );
}

export default Contact;

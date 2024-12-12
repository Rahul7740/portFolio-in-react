import React, { useRef } from "react";
import { useTheme } from "../Context/ThemeChange";
import Pump from "./../snippets/Pump";
import Heading from "../snippets/Heading";

function Profile() {
  const { theme } = useTheme();
  const pump = useRef([]);
  return (
    <section className="">
      <div className="container">
        <Heading name="About Me:" />
        <div className="flex flex-col-reverse md:grid grid-cols-2 lg:gap-8 items-center h-[80vh] justify-center">
          <div>
            <h1
              className={`text-[25px] lg:text-[30px] ${
                theme ? "text-black" : "text-white"
              } leading-[45px] lg:leading-[60px] font-walter cursor-default`}
            >
              My name is{"  "}
              <span
                className={`bg-gradient-to-r ${theme ? "from-[#7e021f] to-[#36010d]" : "from-[#7e021f] to-[#c4687e]"} bg-clip-text text-transparent relative
    before:content-[''] before:absolute before:bottom-[1px] before:rounded before:left-0 before:h-[2px] before:transition-all before:duration-300 before:w-full before:scale-100 before:opacity-0 before:-translate-y-1 hover:before:-translate-y-0 hover:before:opacity-100 before:bg-gradient-to-r before:from-[#7e021f] before:to-[#36010d]`}
              >
                Rahul.
              </span>{" "}
              I am a{" "}
              <span className={`bg-gradient-to-r ${theme ? "from-[#7e021f] to-[#36010d]" : "from-[#7e021f] to-[#c4687e]"} bg-clip-text text-transparent relative`}>
                Full-Stack-Developer.
              </span>{" "}
              <span ref={(el) => el && pump.current.push(el)}>
                I have completed my learning in HTML, CSS, JavaScript, and
                React, and I am currently studying Node.js. I am in the final
                year of my B.Com degree.
              </span>
            </h1>
          </div>
          <div className="w-full h-auto md:h-[500px] flex items-center justify-center p-[20px_20px]">
            <img className="hafeScale-anima w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] transition-all duration-300 drop-shadow-[0_0_20px_#FD5151] hover:drop-shadow-[0_0_50px_#FD5151]" src={require(`../assets/img/profile-pic.png`)} alt="Profile" />
          </div>
        </div>
      </div>
      <Pump array={pump} />
    </section>
  );
}

export default Profile;

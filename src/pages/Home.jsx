import React, { useEffect, useRef } from "react";
import { useTheme } from "../Context/ThemeChange";
import jsonData from "../json/socialMedia.json";

function Home() {
  const { theme } = useTheme();
  const pump = useRef(null);

  useEffect(() => {
    
    console.log(pump.current);
  }, []);

  return (
    <div className="grid grid-cols-2 items-center justify-center h-[100vh]">
      <div className="flex flex-col  w-full items-center h-full justify-center">
        <h1
          className={`text-[60px] font-black transition-all duration-500 ${
            theme === true ? "text-black" : "text-white"
          }`}
        >
          Hi , I'm{" "}
          <span
            ref={pump}
            className="bg-gradient-to-r from-[#7e021f] to-[#36010d] bg-clip-text text-transparent"
          >
            RAHUL
          </span>
        </h1>
        <h3
          ref={pump}
          className={`text-[20px] font-normal leading-6 tracking-[3px] transition-all duration-500 font-walter ${
            theme === true ? "text-black" : "text-white"
          }`}
        >
          Web Developer|Front-end Developer
        </h3>
        <div className="flex items-center gap-3 mt-5">
          {jsonData.map((item, index) => (
            <a
              key={index}
              title="Facebook"
              target="_blank"
              rel="noreferrer"
              href={item.link}
              className="text-[30px] w-[47px] h-[47px] flex items-center justify-center rounded-full  transition-all duration-500 hover:rotate-[360deg]  hover:shadow-[0_0_20px_#7e021f]"
            >
              <i
                className={`fab ${
                  item.name
                }  text-[30px] transition-all duration-500 ${
                  theme === true ? "text-black" : "text-white"
                }`}
              ></i>
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="transition-all duration-500 drop-shadow-[0_0_40px_#7e021f] hover:drop-shadow-[0_0_80px_#7e021f] cursor-pointer"
          src={require(`../assets/svg/main-benner.svg`).default}
          alt="main-banner"
        />
      </div>
    </div>
  );
}

export default Home;

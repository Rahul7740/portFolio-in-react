import React, { useRef } from "react";
import { useTheme } from "../Context/ThemeChange";
import jsonData from "../json/socialMedia.json";
import Pump from "../snippets/Pump";

function Home() {
  const { theme } = useTheme();
  const pump = useRef([]);  
    
  return (
    <section className="w-full md:h-[100vh] flex items-center justify-center">
      <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-[2fr_1fr] lg:grid-cols-2 items-center justify-center h-full">
        <div className="flex flex-col w-full items-center h-full justify-center scale-aniamtion">
          <h1
            className={`text-[50px] flex items-start justify-center flex-wrap sm:text-[60px] font-black transition-all duration-500 cursor-default ${
              theme ? "text-black" : "text-white"
            }`}
          >
            <span ref={(el) => el && pump.current.push(el)}>Hi, I'm </span>
            <span
              className="bg-gradient-to-r from-[#7e021f] to-[#36010d] bg-clip-text text-transparent relative
                          before:content-[''] before:absolute before:bottom-3 before:left-0 before:h-1 before:transition-all before:duration-300 before:w-full before:scale-100 md:before:scale-0 before:opacity-0 hover:before:opacity-100 hover:before:scale-100 before:bg-gradient-to-r before:from-[#7e021f] before:to-[#36010d]
                          "
            >
              Rahul 
            </span>
          </h1>

          <h3
            className={`text-[15px] flex items-center justify-center flex-wrap sm:text-[20px] font-normal leading-6 tracking-[3px] cursor-default transition-all duration-500 font-walter ${
              theme ? "text-black" : "text-white"
            }`}
          >
            <span ref={(el) => el && pump.current.push(el)}>
              Web Developer |
            </span>{" "}
            <span ref={(el) => el && pump.current.push(el)}>
              Front-end Developer
            </span>
          </h3>
          <div className="flex items-center gap-3 mt-5 delay-scale-aniamtion">
            {jsonData.map((item, index) => (
              <a
                key={index}
                title={item.name}
                target="_blank"
                rel="noreferrer"
                href={item.link}
                className="text-[30px] w-[47px] h-[47px] flex items-center justify-center rounded-full transition-all duration-500 hover:rotate-[360deg] hover:shadow-[0_0_20px_#7e021f]"
              >
                <i
                  className={`fab ${
                    item.name
                  } text-[30px] transition-all duration-500 ${
                    theme ? "text-black" : "text-white"
                  }`}
                ></i>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <img
            className="transition-all duration-500 drop-shadow-[0_0_40px_#7e021f] hover:drop-shadow-[0_0_80px_#7e021f] cursor-pointer"
            src={require(`../assets/svg/main-benner.svg`).default}
            alt="main-banner"
          />
        </div>
      </div>
      <Pump array={pump} />;
    </section>
  );
}

export default Home;

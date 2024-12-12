import React, { useRef } from "react";
import Heading from "../snippets/Heading";
import jsonData from "../json/Projects.json";
import { useTheme } from "../Context/ThemeChange";
import Pump from "../snippets/Pump";

function Projects() {
  const pump = useRef([]);
  const { theme } = useTheme();

  return (
    <section>
      <div className="container mx-auto py-10">
        <Heading name="Projects:" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 pb-14">
          {jsonData.map((item, index) => (
            <div
              key={index}
              className={`down-up-animaiton group flex flex-col p-4 rounded-2xl bg-opacity-60 backdrop-blur-lg transition-all duration-500 transform hover:scale-[1.05]  hover:backdrop-blur-none ${
                theme
                  ? "shadow-2xl bg-white  border-black"
                  : "bg-black border-white "
              }  relative overflow-hidden border-solid border-[1px] hover:border-[#E0443B]`}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={require(`../assets/img/${item.img}`)}
                  alt=""
                />
              </div>

              <div className="flex items-center justify-between mt-4 transform transition-all duration-500 group-hover:translate-y-[-10px]">
                <h3
                  ref={(el) => el && pump.current.push(el)}
                  className={`text-[18px] lg:text-[22px] font-bold leading-[25px] lg:leading-[30px] font-walter ${
                    theme ? "text-black" : "text-white"
                  } transition-all duration-500 cursor-default`}
                >
                  {item.name}
                </h3>

                <a
                  target="_blank"
                  rel="noreferrer"
                  ref={(el) => el && pump.current.push(el)}
                  href={item.link}
                  className={`mt-2 text-[18x] font-bold bg-transparent transition-all duration-300 p-[3px_10px] border-[1px] border-solid  hover:border-[#e0433b] rounded   hover:bg-[#e0433b] ${
                    theme ? "text-black border-black" : "text-white border-white"
                  } `}
                >
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pump array={pump} />
    </section>
  );
}

export default Projects;

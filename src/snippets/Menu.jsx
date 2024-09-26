import React, { useState } from "react";
import { useTheme } from "../Context/ThemeChange";
import jsonData from "../json/menu.json";
import { NavLink } from "react-router-dom";

function Menu() {
  const [indexx, setIndexx] = useState(0);
  const [menu, setMenu] = useState(false);
  const { theme } = useTheme();
  return (
    <div
      className={`inline-flex items-center flex-col md:flex-row gap-3 p-[20px_6px] md:p-[6px_20px] fixed bottom-2/4
        translate-y-2/4  ${
          menu === true ? "-translate-x-0" : "-translate-x-full"
        }  md:translate-y-0 md:bottom-0 left-0 md:left-2/4 md:-translate-x-2/4 rounded-[6px] transition-all duration-500 ${
        theme === false ? "bg-white" : "bg-black"
      } `}
    >
      {jsonData.map((item, index) => (
        <NavLink
          onClick={() => {
            setIndexx(index);
          }}
          key={index}
          to={item.to}
          className={`transition-all duration-300  ${
            indexx !== index && "hover:-translate-y-1"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={indexx === index ? "#ef4444" : "gray"}
            className="w-[45px] h-[45px] transition-all duration-300"
          >
            {item.secondPath && <path d={item.secondPath}></path>}
            <path fillRule="evenodd" d={item.path} clipRule="evenodd"></path>
          </svg>
        </NavLink>
      ))}
      <button
        onClick={() => {
          setMenu(menu === false ? true : false);
        }}
        className="block md:hidden absolute top-2/4 -translate-y-2/4 -right-[14px] rounded-r z-10  bg-red-800 p-[20px_4px]"
      >
        <img
          className={`transition-all duration-200 ${menu===true ? "rotate-180":"rotate-0"}`}
          src={require(`../assets/svg/right-arrow.svg`).default}
          alt="right-arrow"
        />
      </button>
    </div>
  );
}

export default Menu;

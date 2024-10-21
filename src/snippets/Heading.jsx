import React, { useRef } from "react";
import { useTheme } from "../Context/ThemeChange";
import Pump from './Pump';

function Heading(props) {
  const { theme } = useTheme();
  const pump = useRef([]); 
  
  return (
    <>
      <h1
        ref={(el) => el && pump.current.push(el)}
        className={`${
          theme ? "text-black" : "text-white"
        } text-[48px] font-bold cursor-default text-center heading-animation transition-all duration`}
      >
        {props.name}
      </h1>

      <Pump array={pump} />
    </>
  );
}

export default Heading;

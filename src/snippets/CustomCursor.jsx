import React, { useEffect } from "react";
import { gsap } from "gsap"

const FireCursor = () => {
  useEffect(() => {
    const $blip = document.querySelector('.cursor-blip');
    const $flare = document.querySelector('.cursor-flare');

    const moveCursor = (e) => {
      gsap.to($blip, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY
      });

      gsap.to($flare, {
        duration: 0.5,
        x: e.clientX ,
        y: e.clientY ,
        opacity: 1
      });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor-flare sm:inline-block hidden" />
      <div className="cursor-blip  hidden" />
    </>
  );
};

export default FireCursor;

import React, { useEffect, useRef } from "react";

function Pump(props) {
  useEffect(() => {
    const pump1 = document.querySelectorAll(".aabbcc");

    for (let i of pump1) {
      if (i) {
        // Split text into characters and wrap them in spans
        i.innerHTML = i.innerHTML
          .split("")
          .map(
            (char) =>
              char !== " "
                ? `<span class="animation inline-block pump">${char}</span>`
                : `<span class="space">${char}</span>` // Add a specific class for spaces if needed
          )
          .join("");

        // Get all spans within the current element
        const spans = i.querySelectorAll(".pump");

        spans.forEach((span) => {
          span.addEventListener("mouseover", () => {
            span.classList.add("hovered");
          });

          span.addEventListener("mouseout", () => {
            setTimeout(() => {
              span.classList.remove("hovered");
            }, 600); // Adjust timeout as needed
          });
        });
      }
    }
    return () => {
      pump1.forEach((i) => {
        const spans = i.querySelectorAll(".pump");
        spans.forEach((span) => {
          span.removeEventListener("mouseover", () => {
            span.classList.add("hovered");
          });
          span.removeEventListener("mouseout", () => {
            setTimeout(() => {
              span.classList.remove("hovered");
            }, 600);
          });
        });
      });
    };
  }, []);
}

export default Pump;

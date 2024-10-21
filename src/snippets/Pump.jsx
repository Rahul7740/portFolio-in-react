import { useEffect } from "react";

function Pump(props) {
  const pump = props.array;
 useEffect(() => {
    pump.current.forEach((e) => {
      if (e) {
        // Split the text and wrap each character in a span
        e.innerHTML = e.innerText
          .split("")
          .map((char) =>
            char !== " "
              ? `<span class="animation inline-block ">${char}</span>`
              : `<span>${char}</span>`
          )
          .join("");

        const spans = e.querySelectorAll(".animation");

        spans.forEach((span) => {
          span.addEventListener("mouseover", () => {
            span.classList.add("pump");
          });
          span.addEventListener("mouseout", () => {
            setTimeout(() => {
              span.classList.remove("pump");
            }, 600);
          });
        });
      }
    });

    pump.current.forEach((e) => {
      if (e) {
        const spans = e.querySelectorAll(".pump");
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
      }
    });
  }, [pump]);
}

export default Pump;

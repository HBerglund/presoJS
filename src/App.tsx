import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { slides, SlideType } from "./data";

function App() {
  const [current, setCurrent] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<SlideType[]>(slides);

  useEffect(() => {
    setTotalSlides(slides);
    window.addEventListener("keyup", (e: any) => {
      switch (e.key) {
        case "ArrowRight":
          console.log("ArrowRight");
          goForward();
          break;
        case "ArrowLeft":
          console.log("ArrowLeft");
          goBackward();
          break;
        case "ArrowUp":
          console.log("ArrowUp");
          break;
        case "ArrowDown":
          console.log("ArrowDown");
          break;
        case "Enter":
          console.log("Enter");
          break;
        default:
          console.log("Default");
      }
    });
  }, []);

  const goForward = () =>
    setCurrent((prev) => {
      if (prev !== totalSlides.length - 1) {
        return prev + 1;
      }
      return prev;
    });

  const goBackward = () =>
    setCurrent((prev) => {
      if (prev !== 0) {
        return prev - 1;
      }
      return prev;
    });

  return (
    <div>
      <div>{totalSlides[current]}</div>
      <div className={classNames("flex")}>
        <button
          className={classNames("bg-black text-white p-4")}
          onClick={goBackward}
        >
          Backward
        </button>
        <button
          className={classNames("bg-black text-white p-4")}
          onClick={goForward}
        >
          Forward
        </button>
      </div>
    </div>
  );
}

export default App;

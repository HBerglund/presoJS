import React, { FC, useEffect, useState } from "react";

import classNames from "classnames";
import { handleArrowClick } from "./helpers/arrowNavigation";
import { slides, SlideType } from "./data";

function App() {
  const [current, setCurrent] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<SlideType[]>(slides);

  useEffect(() => {
    window.addEventListener("keyup", (e: KeyboardEvent) => {
      handleArrowClick(e);
    });
  }, []);

  const onGoForward = () =>
    setCurrent((prev) => {
      if (prev !== totalSlides.length - 1) {
        return prev + 1;
      }
      return prev;
    });

  const onGoBackward = () =>
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
          onClick={onGoBackward}
        >
          Backward
        </button>
        <button
          className={classNames("bg-black text-white p-4")}
          onClick={onGoForward}
        >
          Forward
        </button>
      </div>
    </div>
  );
}

export default App;

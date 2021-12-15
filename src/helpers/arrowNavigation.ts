import { KeyboardEvent } from "react";

export const handleArrowClick = (e: KeyboardEvent) => {
  if (e.key === "ArrowRight") {
    console.log("ArrowRight");
  }
};

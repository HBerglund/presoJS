import { KeyboardEvent } from "react";

export const handleArrowClick = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    console.log("Enter");
  }
};

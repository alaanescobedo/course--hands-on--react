import { useState } from "react";

export type setMouseDownStatus = () => void;
export type setMouseUpStatus = () => void;

export const useMouse = (): [boolean, setMouseDownStatus, setMouseUpStatus] => {
  const [mouseDown, setMouseDown] = useState(false);

  // useDebugValue(
  //   `mouseDown: ${mouseDown}`,
  //   (str) => `${str} ${new Date().toISOString()} `
  // );

  const onMouseDown = () => setMouseDown(true);
  const onMouseUp = () => setMouseDown(false);

  return [mouseDown, onMouseDown, onMouseUp];
};

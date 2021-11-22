import styled from "@emotion/styled";
import { FC, useState } from "react";

export interface ResetProps {
  /**
   * Reset action handler
   */
  onReset: () => void;
}

export const Reset: FC<ResetProps> = ({ onReset }) => {
  const [mouseDown, setMouseDown] = useState(false);

  const onMouseDown = () => setMouseDown(true);
  const onMouseUp = () => setMouseDown(false);

  return (
    <Button
      onClick={onReset}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {mouseDown ? "😮" : "🙂"}
    </Button>
  );
};

const Button = styled.button`
  font-size: 1.5vw;
  cursor: pointer;
  font-size: 700;
  border-width: 0.15vw;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: #fff #9e9e9e9e #9e9e9e9e #fff;
`;

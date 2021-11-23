import { FC } from "react";
import { Scoreboard } from "./components/Scoreboard";
import { Top } from "./components/Top/Top";

const App: FC = () => {
  return (
    <>
      <Top feature="Flag" firstAction="Ctrl" secondAction="Click">
        Minesweeper
      </Top>
      <Scoreboard
        time="000"
        levels={["Begginer", "Intermediate", "Expert"]}
        mines="010"
        onReset={() => null}
      />
    </>
  );
};

export default App;

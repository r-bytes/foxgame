import { createContext, useContext, useState } from "react";
import { RankListItem } from "../../typings";

type Props = {
  children: React.ReactNode;
};
interface InitialState {
  score: number;
  addScore: () => void;
  subScore: () => void;
  resetScore: () => void;
  nameState: string;
  changeNameHandler: React.ChangeEventHandler | undefined;
  scoreboard: RankListItem[];
  updateScoreboard: (currentScore: RankListItem) => void;
}

const Context = createContext<InitialState>({
  score: 0,
  addScore: () => {},
  subScore: () => {},
  resetScore: () => {},
  nameState: "",
  changeNameHandler: () => {},
  scoreboard: [],
  updateScoreboard: () => {},
});

export const StateContext = ({ children }: Props) => {
  const [score, setScore] = useState(0);
  const [nameState, setNameState] = useState<string>("");
  const [scoreboard, setScoreboard] = useState<RankListItem[]>([]);

  const addScore = () => {
    setScore((prevState) => prevState + 1);
  };

  const subScore = () => {
    setScore((prevState) => prevState - 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setNameState(enteredName);
  };

  const updateScoreboard = (currentScore: RankListItem) => {
    // sort by score
    setScoreboard((prevArr) =>
      [...prevArr, currentScore].sort((a, b) => {
        return b.score - a.score;
      })
    );
  };

  return (
    <Context.Provider
      value={{
        score,
        addScore,
        subScore,
        resetScore,
        nameState,
        changeNameHandler,
        scoreboard,
        updateScoreboard,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/StateProvider";
import useFoxGame from "../hooks/useFoxGame";

function Scoreboard() {
  const { scoreboard, resetScore } = useStateContext();
  const navigateTo = useNavigate();

  const handleReset = () => {
    resetScore();
    navigateTo("/play");
  };

  const [
    started,
    setStarted,
    startGame,
    endGame,
    timeRemaining,
    timeIsRunning,
    animalState,
    setAnimalState,
    shuffleArray,
    handleClick,
    isLoading,
    setIsLoading,
  ] = useFoxGame();

  return (
    <div className="bg-zinc-900 rounded shadow-2xl w-2/3 max-w-3xl mx-auto h-5/6 text-white flex flex-col justify-between px-20 overflow-y-scroll">
      <table>
        <thead>
          <tr className="border-b flex justify-between items-center p-10">
            <th className="text-left w-24"> Rank </th>
            <th className="text-left flex-1"> Name </th>
            <th className="text-left flex-1"> Date </th>
            <th className="text-left w-12"> Score </th>
          </tr>
        </thead>
        <tbody>
          {scoreboard?.map((score, index) => (
            <tr
              className="h-1 overflow-hidden text-left flex justify-between items-center py-8 px-14"
              key={index}
            >
              <td className="w-20"> {score.rank} </td>
              <td className="flex-1"> {score.name} </td>
              <td className="flex-1"> {score.date} </td>
              <td className="w-8"> {score.score} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex space-x-10 place-self-center mb-10">
        <button
          className="bg-teal-500 hover:bg-teal-700 mt-20 py-3 px-7 rounded"
          onClick={() => navigateTo("/")}
        >
          {" "}
          Home{" "}
        </button>
        <button
          className="bg-teal-500 hover:bg-teal-700 mt-20 py-3 px-7 rounded"
          onClick={handleReset}
        >
          {" "}
          Play{" "}
        </button>
      </div>
    </div>
  );
}

export default Scoreboard;

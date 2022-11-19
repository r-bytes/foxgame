import { PlayView, Scoreboard, WelcomeView } from "./components/";
import useFoxGame from "./hooks/useFoxGame";
import { Routes, Route } from "react-router-dom";

function App() {
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

  const animals = [...animalState];

  return (
    <div className="bg-zinc-500 h-screen w-screen flex items-center justify-center">
      <Routes>
        <Route path="/play" element={<PlayView animals={animals} />} />
        <Route path="/" element={<WelcomeView />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
      </Routes>
    </div>
  );
}

export default App;

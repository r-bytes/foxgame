import PlayView from "./components/PlayView";
import WelcomeView from "./components/WelcomeView";
import useFoxGame from "./hooks/useFoxGame"
import { Routes, Route } from "react-router-dom"

function App() {
    const [nameState, setNameState, started, setStarted, startGame, endGame, timeRemaining, timeIsRunning, animalState, setAnimalState] = useFoxGame()
    const animals = [...animalState];

    return (
        <div className="bg-zinc-500 h-screen w-screen flex items-center justify-center">
            <Routes>
                <Route
                    path="/play"
                    element={<PlayView animals={animals} />}
                />
                <Route
                    path="/"
                    element={<WelcomeView />}
                />
            </Routes>
        </div>
    );
}

export default App;

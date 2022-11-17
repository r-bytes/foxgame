import { useEffect } from "react";
import AnimalGrid from "./AnimalGrid";
import useFoxGame from "../hooks/useFoxGame";
import { AnimalProps } from "../../typings"
import Loading from "./Loading";
import { useStateContext } from "../context/StateProvider";

const PlayView = ({ animals }: AnimalProps) => {
    const [nameState, setNameState, started, setStarted, startGame, endGame, timeRemaining, timeIsRunning, animalState, setAnimalState, userClick, setUserClick, shuffleArray, handleClick, isLoading, setIsLoading] = useFoxGame()
    const { score } = useStateContext()

    useEffect(() => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            startGame()
        }, 1000);
    }, [])
    

    return (
        <div className="bg-zinc-900 rounded shadow-2xl p-10 flex flex-col justify-center items-center w-2/3 max-w-3xl mx-auto h-5/6 text-white text-center">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <h1 className="text-3xl p-10 mt-4" > Click the Fox! Game</h1>
                {timeIsRunning && 
                (<div className="flex justify-between items-between w-2/3 h-2/3 mx-auto pb-10">
                    <span> Score: {score} </span>
                    <span> Time left: {timeRemaining} </span>
                </div>)}
       
                {isLoading ? (
                    // render loading component
                    <div className="flex justify-center items-center">
                        <Loading />
                    </div>
                ) : timeIsRunning ? (
                    // render grid component
                    <AnimalGrid animals={animalState} />
                ): (
                    // !TODO show scroreboard
                    "SCOREBOARD"
                )}          
            </div>
        </div>
    )
}

export default PlayView
import useFoxGame from "../hooks/useFoxGame";
import { useNavigate } from 'react-router-dom'

const WelcomeView = () => {
    const [
        nameState,
        setNameState,
        started,
        setStarted,
        startGame,
        endGame,
        timeRemaining,
        timeIsRunning,
        animalState,
        setAnimalState,
        userClick,
        setUserClick,
        shuffleArray,
        handleClick,
        isLoading,
        setIsLoading
    ] = useFoxGame()
    
    const navigateTo = useNavigate()

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setNameState(enteredName);
    };

    return (
        // Initial welcome screen
        !started ? (
            <div className="bg-zinc-900 rounded shadow-2xl p-4 flex flex-col justify-center items-center w-2/3 max-w-3xl mx-auto h-5/6 text-white text-center">
                <h1 className="text-3xl pt-10" > Click the Fox! Game</h1>
                <form className="mt-4">
                    <label id="name" className="">
                        Name:
                        <input
                            className="text-black w-36 rounded px-1 m-4"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={nameState}
                            onChange={inputHandler}
                        />
                    </label>
                </form>
                {nameState.length ? (
                    <button className="bg-teal-500 hover:bg-teal-700 mt-20 py-3 px-7 rounded" onClick={() => setStarted(true)}> PLAY </button>
                    ) : (
                        <button className="border-2 border-teal-500 mt-20 py-3 px-7 rounded cursor-not-allowed" disabled={true}> PLAY </button>
                    )}
                
            </div>
        ) : (
            // Second welcome screen
            <>
                <div className="bg-zinc-900 rounded shadow-2xl p-4 flex flex-col justify-center items-center w-2/3 max-w-3xl h-5/6 mx-auto text-white text-center">
                    <h1 className="text-3xl pt-10" > Click the Fox! Game</h1>
                    <label id="name" className="flex flex-col items-center justify-center md:flex-row md:items-baseline">
                        {/* Username */}
                        <span className="mt-12"> Hello </span>
                        <input
                            className="text-white bg-zinc-800 focus:bg-zinc-700 w-36 rounded px-1 my-4 mx-2 outline-none cursor-pointer text-center md:text-left"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={nameState}
                            onChange={inputHandler}
                            />
                    </label>
        
                    {/* Buttons */}
                    <div className="flex gap-2">
                        <button className="bg-teal-500 hover:bg-teal-700 mt-20 py-3 px-7 rounded" onClick={() => endGame()}> EXIT </button>
                        <button className="bg-teal-500 hover:bg-teal-700 mt-20 py-3 px-7 rounded" onClick={() => navigateTo("/play")}> START </button>
                    </div>
                </div>
            </>
        )
    )
}
export default WelcomeView
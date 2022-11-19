// import { AnimalsListProps } from "../../typings"
import Loading from "./Loading";
import useFoxGame from "../hooks/useFoxGame";
import { AnimalProps } from "../../typings";

const AnimalGrid = ({ animals }: AnimalProps) => {
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

  const animalArr = animals.map((animal) => (
    <img
      height={100}
      width={100}
      className={
        "w-40 h-40 object-cover cursor-pointer hover:ring-4 hover:ring-teal-600 rounded"
      }
      onClick={(e) => handleClick(e)}
      key={animal.title}
      src={animal.url}
      alt={animal.title}
    />
  ));

  return isLoading ? (
    <div className="flex justify-center items-center">
      <Loading />
    </div>
  ) : (
    <div className="grid grid-cols-3 grid-row-3 gap-4 mx-auto mb-20">
      {animalArr}
    </div>
  );
};

export default AnimalGrid;

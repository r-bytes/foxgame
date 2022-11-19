import { useEffect, useState } from "react";
import { useStateContext } from "../context/StateProvider";
import { Animal } from "../../typings";
import { useNavigate } from "react-router-dom";

export default function useFoxGame(startingTime = 30) {
  const [started, setStarted] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(startingTime);
  const [timeIsRunning, setTimeIsRunning] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigateTo = useNavigate();

  const { score, addScore, subScore, nameState, scoreboard, updateScoreboard } =
    useStateContext();

  const shuffleArray = (arr: Animal[]) => {
    //shuffle logic here
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleClick = (e: React.MouseEvent) => {
    setIsLoading(true);

    // wait 1 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // get clicked target
    const clickedCharacter = e.currentTarget.attributes[2].nodeValue?.slice(
      0,
      e.currentTarget.attributes[2].nodeValue?.length - 1
    );

    // calculate score based on cicked image
    if (clickedCharacter === "fox") {
      addScore();
    } else {
      subScore();
    }
  };

  const [animalState, setAnimalState] = useState([
    { title: "dog1", url: "", type: "dog" },
    { title: "dog2", url: "", type: "dog" },
    { title: "dog3", url: "", type: "dog" },
    { title: "dog4", url: "", type: "dog" },
    { title: "fox1", url: "", type: "fox" },
    { title: "cat1", url: "", type: "cat" },
    { title: "cat2", url: "", type: "cat" },
    { title: "cat3", url: "", type: "cat" },
    { title: "cat4", url: "", type: "cat" },
  ]);

  useEffect(() => {
    async function getAnimals(): Promise<any> {
      // get four random dogs
      const dogResponse: Response = await fetch(
        "https://dog.ceo/api/breeds/image/random/10"
      );
      var dogResult = await dogResponse.json();

      // get four random cats
      // NOTE: &size=small query string isn't working, even with api key
      const catResponse: Response = await fetch(
        `https://api.thecatapi.com/v1/images/search?format=json&limit=4`
      );
      var catResult = await catResponse.json();

      // get a random fox
      const foxResponse: Response = await fetch("https://randomfox.ca/floof");
      const foxResult = await foxResponse.json();

      // copy animal state
      const animalArr = [...animalState];

      // set urls based on type
      animalArr.forEach((element, index) => {
        if (element.type === "dog") {
          element.url = dogResult.message[index];
        } else if (element.type === "cat") {
          element.url = catResult[index].url;
        } else if (element.type === "fox") {
          element.url = foxResult.image;
        }
        return element;
      });

      const shuffledArr = shuffleArray(animalArr);

      // update state with copy array
      setAnimalState(shuffledArr);
    }
    getAnimals();
    // shuffle the animals array
    const shuffledArr = shuffleArray([...animalState]);

    // update state
    setAnimalState(shuffledArr);
  }, [score]);

  const startGame = (): void => {
    setStarted(true);
    setTimeIsRunning(true);
    setTimeRemaining(startingTime);
  };

  const endGame = (): void => {
    navigateTo("/scoreboard");

    setStarted(false);
    setTimeIsRunning(false);
    updateScoreboard({
      name: nameState,
      rank: 0,
      date: new Date().toLocaleTimeString(),
      score: score,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      // we need to know the prevTime
      if (timeIsRunning && timeRemaining > 0) {
        setTimeRemaining((time) => time - 1);
      } else if (timeRemaining === 0) {
        endGame();
      }
    }, 1000);
  }, [timeRemaining, timeIsRunning]);

  return [
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
  ] as const;
}

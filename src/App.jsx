import { Game, Board, Card, Score } from "./components/Game.jsx";
import shuffleArray from "./utils/shuffleArray.js";

import { useState } from "react";

function App({ fetchedAnimals }) {
  let [animals, setAnimals] = useState(fetchedAnimals);
  let [score, setScore] = useState(0);
  let [clickedImages, setClicked] = useState([]);

  return (
    <>
      <Game>
        <Score score={score} />
        <Board>
          {animals
            ? animals.slice(0,9).map(({ url }, index) => {
                return (
                  <Card
                    key={index}
                    url={url}
                    onClick={() => {
                      if (!clickedImages.includes(url)) {
                        setScore(score + 1);
                        setClicked([...clickedImages, url]);
                      } else {
                        setScore(0);
                        setClicked([]);
                      }
                      setAnimals(shuffleArray(animals));
                    }}
                  />
                );
              })
            : null}
        </Board>
      </Game>
    </>
  );
}

export default App;

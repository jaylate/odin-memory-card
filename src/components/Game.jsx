import { useState, useEffect } from "react";
function Card({ url, onClick }) {
  return <img src={url} onClick={onClick} />;
}

function Board(props) {
  return <div id="board">{props.children}</div>;
}

function Score({ score }) {
  let [s, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    setScore(score);
    if (score > bestScore) setBestScore(score);
  }, [score]);
  return (
    <p>
      Score: {s} Best score: {bestScore}
    </p>
  );
}

function Game(props) {
  return <div id="game">{props.children}</div>;
}

export { Card, Board, Game, Score };

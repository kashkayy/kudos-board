import { useEffect, useState } from "react";
import Board from "../components/Board.jsx";
import { fetchBoards } from "../api.js";
import { createBoard } from "../api.js";
export default function BoardContainer() {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetchBoards().then((data) => setBoards(data.results));
  }, []);
  const boardElements = boards.map((board, id) => (
    <Board key={id} board={board}/>
  ));
  return (
    <>
      <div className="boards-container">
        {boardElements}
      </div>
    </>
  );
}

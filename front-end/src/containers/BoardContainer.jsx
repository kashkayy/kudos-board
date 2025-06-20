import { useEffect, useState } from "react";
import Board from "../components/Board.jsx";
import BoardModal from "../components/BoardModal.jsx";
import { fetchBoards, createBoard, deleteBoard, fetchBoardsByTitle } from "../api.js";
export default function BoardContainer({selectedCategory, showModal, onCloseModal, searchQuery, searchTriggered, setSearchTriggered}) {
  const [boards, setBoards] = useState([]);
  const [filteredboards, setFilteredBoards] = useState([])
  useEffect(() => {
    fetchBoards().then((data) => setBoards(data.results));
  }, []);
  useEffect(() => {
    if(searchTriggered){
      fetchBoardsByTitle(searchQuery).then((data) => setFilteredBoards(data.results))
      setSearchTriggered(false)
    }else{let filtered =[...boards];
      if(selectedCategory ==="All"){
        filtered = boards
      }
      else if(selectedCategory ==="Recent"){
        filtered = [...boards].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
      }else{
        filtered = boards.filter((board) => board.category.toLowerCase() === selectedCategory.toLowerCase())
      }
      setFilteredBoards(filtered)
    }
  }, [boards, selectedCategory, searchQuery, searchTriggered])
  function onDeleteClick(id){
    deleteBoard(id).then((data) => setBoards(data.results))
  } 
  function handleCreateBoard(newBoard){
    createBoard(newBoard).then((data) => setBoards(data.results));
    onCloseModal()
  } 
  const boardElements = filteredboards.map((board, id) => (
    <Board key={id} board={board} onDeleteClick={onDeleteClick}/>
  ));
  return (
    <>
      <div className="boards-container">
        {boardElements}
        {showModal && <BoardModal newBoard={handleCreateBoard} onClose={onCloseModal}/>}
      </div>
    </>
  );
}

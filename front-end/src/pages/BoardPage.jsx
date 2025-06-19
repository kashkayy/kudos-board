import { useState } from 'react';
import Search from '../components/Search.jsx'
import Category from '../components/Category.jsx'
import BoardContainer from '../containers/BoardContainer.jsx'
import BoardModal from '../components/BoardModal.jsx';
export default function BoardPage(){
  const [showModal, setShowModal] = useState(false);
  function handleClick(){
      setShowModal(true)};
  return(
    <>
      <Search/>
      <Category/>
      <button id='new-board-btn' onClick={handleClick}>Create new board</button>
      {showModal && <BoardModal/>}
      <BoardContainer/>
    </>
  )
}
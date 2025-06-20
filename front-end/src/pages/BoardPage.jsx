import { useState } from 'react';
import Search from '../components/Search.jsx'
import Category from '../components/Category.jsx'
import BoardContainer from '../containers/BoardContainer.jsx'
export default function BoardPage(){
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchTriggered, setSearchTriggered] = useState(false)
  function handleClick(){
      setShowModal(true)};
  function handleSearch() {
    setSearchTriggered(true)
  }
  return(
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch}/>
      <Category selected={selectedCategory} onCategoryClick={setSelectedCategory}/>
      <button id='new-board-btn' onClick={handleClick}>Create new board</button>
      <BoardContainer selectedCategory={selectedCategory} showModal={showModal} onCloseModal={() => setShowModal(false)} searchQuery={searchQuery} searchTriggered={searchTriggered} setSearchTriggered={setSearchTriggered}/>
    </>
  )
}
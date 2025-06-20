import { useState } from "react"
export default function Search({searchQuery, setSearchQuery, onSearch}){
  function handleClear(){
    setSearchQuery("")}
  // }
  // function handleInputChange(event){
  //   const value = event.target.value
  //   setSearchQuery(value)
  // }
  // }
  // function searchResult(){
  //   onQueryChange(input)
  // }
  return(
    <>
      <div id="board-search">
        <input type="text" placeholder="Looking for..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
        <div className="search-btns">
          <button onClick={onSearch}>Search</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    </>
  )
}
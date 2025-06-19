import { useState } from "react"

export default function Search(){
  const [input, setInput] = useState("")
  function handleClear(){
    setInput("")
  }
  function searchResult(event){
    const value = event.target.value
    return setInput(value)
  }
  return(
    <>
      <div id="board-search">
        <input type="text" placeholder="Looking for..." value={input} onChange={searchResult}/>
        <div className="search-btns">
          <button>Search</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    </>
  )
}
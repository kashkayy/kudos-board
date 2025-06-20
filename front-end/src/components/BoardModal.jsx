import { useState } from "react";
export default function BoardModal({newBoard, onClose}){
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [category, setCategory] = useState("")
  function handleSubmit(event){
    event.preventDefault();
    newBoard({title, category, author})
    setTitle("")
    setAuthor("")
    setCategory("")
    onClose()
  }
  return(
    <>
      <div className="modal">
        <div className="modal-content-container">
          <button className="close-btn" onClick={onClose}>X</button>
          <div className="modal-content">
            <h2><strong>Create a new board</strong></h2>
            <form onSubmit={handleSubmit} id="new-board-form">
              <label>
                Title:<input type="text" placeholder="Enter a title..." value={title} onChange={(event) => setTitle(event.target.value)} required/>
              </label>
              <label>
                Category: 
                <select value={category} onChange={(event) => setCategory(event.target.value)} required>
                  <option value="">Choose a category</option>
                  <option value="celebration">Celebration</option>
                  <option value="Thank You">Thank You</option>
                  <option value="inspiration">Inspiration</option>
                </select>
              </label>
              <label>
                Author:<input type="text" placeholder="Who created this?(optional)" value={author} onChange={(event) => setAuthor(event.target.value)}/>
              </label>
              <button type="submit" id="create-board">Generate Board</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
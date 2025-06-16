export default function BoardModal(){
  return(
    <>
      <div className="modal">
        <div className="modal-content-container">
          <div className="modal-content">
            <h2><strong>Create a new board</strong></h2>
            <span>Title: </span>
            <input type="text"></input>
            <span>Category: </span>
            <select>
              <option>Celebration</option>
              <option>Thank You</option>
              <option>Inspiration</option>
            </select>
            <span>Author: </span>
            <input type="text"></input>
            <button id="create-btn">Create Board</button>
          </div>
        </div>
      </div>
    </>
  )
}
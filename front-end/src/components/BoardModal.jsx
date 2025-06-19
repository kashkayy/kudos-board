export default function BoardModal(){
  return(
    <>
      <form action="/" method="post">
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
        <input type="submit" value="Create" id="create-board"></input>
        </div>
        </div>
      </form>
    </>
  )
}
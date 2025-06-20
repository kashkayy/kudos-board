import {Link} from "react-router"
export default function Board({board, onDeleteClick}){
  return(
    <>
      <article className="board-card">
        <div className="board-card-info">
          <div className="board-image-container">
            <img className="board-image" src='https://picsum.photos/200/300'/>
          </div>
          <div className="board-info">
            <h2 className="board-title"><strong>Title: </strong>{board.title}</h2>
            <p className="board-category"><strong>Category: </strong>{board.category}</p>
          </div>
          <div className="view-and-delete">
            <Link to={`/boards/${board.id}/cards`}><button>View board</button></Link>
            <button onClick={() => onDeleteClick(board.id)}>Delete board</button>
          </div>
        </div>
      </article>
    </>
  )
}
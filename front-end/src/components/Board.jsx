import {Link} from "react-router"
export default function Board({board}){
  return(
    <>
      <article className="board-card">
        <div className="board-card-info">
          <div className="board-image-container">
            <img className="board-image" src='https://picsum.photos/200/300'/>
          </div>
          <div className="board-info">
            <h2 className="board-title">{board.title}</h2>
            <p className="board-category">{board.category}</p>
          </div>
          <div className="view-and-delete">
            <Link to="/boards/:id/cards"><button>View board</button></Link>
            <button>Delete board</button>
          </div>
        </div>
      </article>
    </>
  )
}
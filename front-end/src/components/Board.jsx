export default function Board(){
  return(
    <>
      <article className="board-card">
        <div className="board-image-container">
          <img className="board-image"/>
        </div>
        <div className="board-info">
          <h2 className="board-title">{board.title}</h2>
          <p className="board-category">{board.category}</p>
        </div>
        <div className="view-and-delete">
          <button>View board</button>
          <button>Delete board</button>
        </div>
      </article>
    </>
  )
}
export default function KudoCard({card, onDelete, onUpvote }){
  return(
    <>
      <article className="kudo-card">
        <h2>Title: {card.title}</h2>
        <p><strong>Message: </strong>{card.description}</p>
        <img src={card.gifUrl} alt="cardGif"/>
        <div className="card-actions">
          <button id="upvote" onClick={() => onUpvote(card.id)}>Upvote:{card.upvotes}</button>
          <button onClick={() => onDelete(card.id)}>Delete</button>
         </div>
        <p><strong>Owner:</strong> {card.owner}</p>
      </article>
    </>
  )
}
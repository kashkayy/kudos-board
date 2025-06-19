export default function KudoCard({card}){
  return(
    <>
      <article className="kudo-card">
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <img src="" alt="cardGif"/>
        <div className="card-actions">
          <button id="upvote">Upvote</button>
          <button>Delete</button>
        <p>{card.owner}</p>
        </div>
      </article>
    </>
  )
}
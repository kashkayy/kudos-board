export default function KudoCard(){
  return(
    <>
      <article className="kudo-card">
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <img src=""/>
        <div className="card-actions">
          <button id="upvote">Upvote</button>
          <button>Delete</button>
        </div>
      </article>
    </>
  )
}
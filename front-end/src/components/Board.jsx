export default function Board(){
  return(
    <>
      <article className="movie-card" onClick={clicked}>
        <div className="image-container">
          <span className="watched" onClick={watched}>{isWatched? "👁️":"🫣"}</span>
          <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-image-overlay">
            <span className="heart-color" onClick={favorited}>{isLiked? "❤️":"🤍"}</span>
          </div>
        </div>
        <div className="movie-info">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-rating">⭐️rating: {movie.vote_average}</p>
        </div>
      </article>
    </>
  )
}
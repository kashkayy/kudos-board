import { useState } from "react"
export default function CardModal({newCard, onClose, boardId}){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [owner, setOwner] = useState("")
  const [gifUrl, setGifUrl] = useState("")
  const [gifSearch, setGifSearch] = useState("")
  const [gifResults, setGifResults] = useState([])
  async function handleGifSearch(){
    const API_KEY = import.meta.env.VITE_API_KEY
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=${API_KEY}&limit=4`);
    const gifs = await response.json()
    setGifResults(gifs.data)
  }
  console.log(gifResults)
  function handleSubmit(event){
    event.preventDefault();
    newCard({title, description, owner, gifUrl}, boardId)
    setTitle("")
    setOwner("")
    setDescription("")
    setGifUrl("")
    onClose()
  }
  return(
    <>
      <div className="modal">
        <div className="modal-content-container">
          <button className="close-btn" onClick={onClose}>X</button>
          <div className="modal-content">
            <h2><strong>Create a new card</strong></h2>
            <form onSubmit={handleSubmit} id="new-board-form">
              <label>
                Title:<input type="text" value={title} onChange={(event) => setTitle(event.target.value)} required/>
              </label>
              <label>
                Message:<input type="text" value={description} onChange={(event) => setDescription(event.target.value)} required/>
              </label>
              <input type="text" placeholder="search GIFs" value={gifSearch} onChange={(event) => setGifSearch(event.target.value)}/>
              <div className="gif-results">
                {gifResults.map((gif) => (
                  <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} onClick={() => setGifUrl(gif.images.fixed_height.url)}/>))}
              </div>
              <button type="button" onClick={handleGifSearch}>Search</button>
              <label>
                Card GIF:<input type="text" value={gifUrl} required/>
              </label>
              <label>
                Author:<input type="text" value={owner} onChange={(event) => setOwner(event.target.value)}/>
              </label>
              <button type="submit" id="create-card">Generate Card</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
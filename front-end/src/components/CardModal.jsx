import { useState } from "react"
export default function CardModal({newCard, onClose}){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [owner, setOwner] = useState("")
  const [gifUrl, setGifUrl] = useState("")
  function handleSubmit(event){
    event.preventDefault();
    newCard({title, description, owner, gifUrl})
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
              <label>
                Cover:<input type="text" value={gifUrl} onChange={(event) => setGifUrl(event.target.value)} required/>
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
export default function CardModal(){
  return(
    <>
      <div className="modal">
        <div className="modal-content-container">
          <div className="modal-content">
            <input type="text" placeholder="Enter a card title..."/>
            <input type="text" placeholder="Enter card description..."/>
            <input type="text" placeholder="Search GIFs..."/>
            <button>Search</button>
            <input type="text" placeholder="Enter GIF URL"/>
            <button>Copy GIF URL</button>
            <button id="create-btn">Create Card</button>
          </div>
        </div>
      </div>
    </>
  )
}
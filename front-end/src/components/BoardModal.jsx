export default function BoardModal(closeModal){
  return(
    <>
      <div id="modal" onClick={closeModal}>
        <div id="modal-content-container">
          <div id="modal-content">
            <span><strong>Create a new board</strong></span>
            <span>Title</span>
            <input type="text"></input>
            <span>Category</span>
            <select type="text"></select>
            <button id="create-btn">Create Board</button>
          </div>
        </div>
      </div>
    </>
  )
}
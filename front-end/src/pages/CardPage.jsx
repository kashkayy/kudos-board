import { useState } from "react"
import CardContainer from "../containers/CardContainer"
import { useParams, useLocation } from "react-router";
export default function CardPage(){
  const {boardId} = useParams()
  const location = useLocation()
  const [showModal, setShowModal] = useState(false);
  function handleClick(){
      setShowModal(true)};
  return(
    <>
      <p id="card-page-title"><u><strong>Board Title: </strong></u>{location.state.title}</p>
      <button id='new-card-btn' onClick={handleClick}>Create new card</button> 
      <CardContainer boardId={boardId} showModal={showModal} onCloseModal={() => setShowModal(false)}/>
    </>
  )
}
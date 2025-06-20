import { useState } from "react"
import CardContainer from "../containers/CardContainer"
import { useParams } from "react-router";
export default function CardPage(){
  const {boardId} = useParams()
  const [showModal, setShowModal] = useState(false);
  function handleClick(){
      setShowModal(true)};
  return(
    <>
      <button id='new-card-btn' onClick={handleClick}>Create new card</button>
      <CardContainer boardId={boardId} showModal={showModal} onCloseModal={() => setShowModal(false)}/>
    </>
  )
}
import { useState, useEffect } from 'react';
import KudoCard from '../components/Card'
import { fetchCards, createCard } from "../api.js";
import CardModal from '../components/CardModal.jsx';
export default function CardContainer({boardId,showModal,onCloseModal}){
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetchCards(boardId).then((data) => setCards(data.results));
  }, [boardId]);
  function handleCreateCard(newCard){
    createCard(newCard, boardId).then((data) => setCards(data.results));
    onCloseModal()
  } 
    const cardElements = cards.map((card, id) => (
      <KudoCard key={id} card={card}/>))
  return(
    <>
      <div className='cards-container'>
        {cardElements}
        {showModal && <CardModal newCard={handleCreateCard} onClose={onCloseModal}/>}
      </div>
    </>
  )
}
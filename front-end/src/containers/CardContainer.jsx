import { useState, useEffect } from 'react';
import KudoCard from '../components/Card'
import { fetchCards, createCard, deleteCard,updateCard } from "../api.js";
import CardModal from '../components/CardModal.jsx';
export default function CardContainer({boardId,showModal,onCloseModal}){
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetchCards(boardId).then((data) => setCards(data.results));
  }, [boardId]);
  function handleCreateCard(newCard, boardId){
    createCard(newCard, boardId).then((data) => setCards(data.results));
    onCloseModal()
  }
  function handleDelete(cardId){
    deleteCard(boardId, cardId).then((data) => setCards(data.results))
  }
  function handleUpvote(cardId) {
    updateCard(boardId, cardId).then((updatedCard) => {
      setCards((prevCards) => prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card)));
  });
}
    const cardElements = cards.map((card, id) => (
      <KudoCard key={id} card={card} onDelete={handleDelete} onUpvote={handleUpvote}/>))
  return(
    <>
      <div className='cards-container'>
        {cardElements}
        {showModal && <CardModal newCard={handleCreateCard} onClose={onCloseModal} boardId={boardId}/>}
      </div>
    </>
  )
}
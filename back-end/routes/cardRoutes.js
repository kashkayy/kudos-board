import express from 'express'
import {getCards, deleteCard, createCard, updateCard} from '../prismaClient.js'
const router = express.Router()
//This will show all cards
router.get('/:boardId/cards', async (req,res) => {
  const {boardId} = req.params
  try{
       const cards = await getCards(boardId);
       res.status(200).json({results: cards})
     } catch (err){
       res.status(500).json({message: 'Failed to fetch cards'})
     }
})
//This will allow user create a new card
router.post('/:boardId/cards', async (req,res) => {

})
//This will allow user delete card
router.delete('/:boardId/cards/:id', async (req,res) => {
  const {boardId, id} = req.params
  if (!boardId){
    return res.status(400).json({message: 'Error!'})
  }
  try{
    await deleteCard(id)
    const cards = await getCards(boardId)
    res.status(200).json({results: cards})
  }catch(err){
    res.status(500).json({message: 'Failed to delete the card.'})
  }
})
//This handles the upvotes
router.put('/:boardId/cards/:id', async (req, res) => {
const {id} = req.params
try{
    const updated = await updateCard(id)
    res.status(200).json(updated)
  }catch(err){
    res.status(500).json({message: 'Failed to delete the card.'})
  }
export default router
import express from 'express'
import {getBoards, createBoard, delBoard} from '../prismaClient.js'
const router = express.Router()
//This will show all boards
router.get('/', async (req,res) => {
  try{
    const boards = await getBoards();
    res.json(boards)
  } catch (err){
    res.status(500).json({message: 'Failed to fetch boards'})
  }
  
})
//This will allow user create a new board
router.post('/', async (req,res) => {
  const {title, category, author} = req.body
  if(!title || !category || !author){
    res.status(400).json({message: 'Fill all required fields.'})
  }
  try{
    const newBoard = await createBoard(title, category, author);
    res.status(201).json(newBoard)
  }catch(err){
    res.status(500).json({message: 'Failed to create new board.'})
  }
})
//This will allow user delete board
router.delete('/:id', async (req,res) => {
  if(!id){
    res.status(400).json({message: 'Fill all required fields.'})
  }
  try{
    await delBoard(id);
    res.status(204).end()
  }catch(err){
    res.status(500).json({message: 'Failed to delete board.'})
  }
})
export default router
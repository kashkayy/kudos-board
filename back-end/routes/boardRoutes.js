import express from 'express'
import {getBoards, createBoard, deleteBoard, getBoardsByTitle} from '../prismaClient.js'
const router = express.Router()
//This will show all boards
router.get('/', async (req,res) => {
  try{
    const boards = await getBoards();
    res.json({results: boards})
  } catch (err){
    res.status(500).json({message: 'Failed to fetch boards'})
  } 
})
//This allows user search for board
router.get('/:title', async (req, res) => {
  const {title} = req.params;
  try{
    const boards = await getBoardsByTitle(title);
    res.json(boards)
  } catch (err){
    res.status(404).json({message: 'Board does not exist :('})
  } 
})
//This will allow user create a new board
router.post('/', async (req,res) => {
  const {title, category, author} = req.body
  if(!title || !category || !author){
    res.status(400).json({message: 'Fill all required fields.'})
  }
  try{
    await createBoard(title, category, author);
    const updatedBoards = await getBoards()
    res.status(201).json({results : updatedBoards})
  }catch(err){
    res.status(500).json({message: 'Failed to create new board.'})
  }
})
//This will allow user delete board
router.delete('/:id', async (req,res) => {
  const {id} = req.params;
  try{
    await deleteBoard(id);
    const updatedBoards = await getBoards()
    res.status(200).json({results: updatedBoards})
  }catch(err){
    res.status(500).json({message: 'Failed to delete board.'})
  }
})
export default router
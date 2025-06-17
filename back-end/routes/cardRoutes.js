import express from 'express'
import prisma from '../prismaClient.js'
const router = express.Router()
//This will show all cards
router.get('/', async (req,res) => {
   
})
//This will allow user create a new card
router.post('/', async (req,res) => {
  const {title, category, author} = req.body
})
//This will allow user delete card
router.delete('/:id', async (req,res) => {
  
})
export default router
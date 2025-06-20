import { PrismaClient } from "./generated/prisma/index.js";
const prisma = new PrismaClient();
export async function createBoard(title, category, author){
  return await prisma.board.create({
    data: {
      title,
      category,
      author,
    }
  })
}
export async function getBoards(){
  return await prisma.board.findMany({
      include: {
      cards: true
    }
  });
}
export async function getBoardsByTitle(title){
  return await prisma.board.findMany({
    where : {title: title},
    include: {
      cards: true
    }
  });
}
export async function deleteBoard(id){
  return await prisma.board.delete({
    where : {id: Number(id)}
  });
}
export async function createCard(title, description, owner, gifUrl, boardId){
  return await prisma.card.create({
    data: {
      title,
      description,
      owner,
      gifUrl,
      boardId,
    }
  })
}
export async function getCards(boardId){
  return await prisma.card.findMany({
    where : {boardId: Number(boardId)}
  });
}
export async function deleteCard(id){
  return await prisma.card.delete({
    where : {id: Number(id)}
  });
}
export async function updateCard(id){
  return await prisma.card.update({
    where: {id: Number(id)},
    data: {upvotes: {increment : 1}}
  })
}
export default prisma
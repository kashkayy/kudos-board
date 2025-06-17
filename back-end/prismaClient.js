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
  });
}
export async function delBoard(id){
  return await prisma.board.delete({
    where : {id: Number(id)}
  });
}
export default prisma

















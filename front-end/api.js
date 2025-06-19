const BASE_URL = "http://localhost:5502"
export async function fetchBoards(){
  const res = await fetch(`${BASE_URL}/boards`)
  const data = await res.json()
  return data
}
export async function fetchCards(){
  const res = await fetch (`${BASE_URL}/boards/:boardId/cards`)
  const data = await res.json()
  return data
}
export async function createBoard(){
  const res = await fetch(`${BASE_URL}/boards`)
  const data = await res.json()
  return data
}
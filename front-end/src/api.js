const BASE_URL = "http://localhost:5502"
export async function fetchBoards(){
  const res = await fetch(`${BASE_URL}/boards`)
  const data = await res.json()
  return data
}
export async function fetchCards(boardId){
  const res = await fetch (`${BASE_URL}/boards/${boardId}/cards`)
  const data = await res.json()
  return data
}
export async function createBoard(newboard){
  const res = await fetch(`${BASE_URL}/boards`, {method:"POST", headers: {"Content-Type": "application/json", }, body: JSON.stringify(newboard)})
  const data = await res.json()
  return data
}
export async function deleteBoard(id){
  const res = await fetch(`${BASE_URL}/boards/${id}`, {method: "DELETE"})
  const data = await res.json()
  return data
}
export async function fetchBoardsByTitle(title){
  const res = await fetch(`${BASE_URL}/boards/${title}`)
  const data = await res.json()
  return data
}
export async function createCard(newcard, boardId){
  const res = await fetch(`${BASE_URL}/boards/${boardId}/cards`, {method:"POST", headers: {"Content-Type": "application/json", }, body: JSON.stringify(newcard)})
  const data = await res.json()
  return data
}
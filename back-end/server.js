import express from "express"
const app = express()
const PORT = 5502;
let pets = [
  { id: 0, age: 3, name: "Luna", type: "dog", adopted: false },
  { id: 1, age: 2, name: "Milo", type: "cat", adopted: false },
  { id: 2, age: 1, name: "Bubbles", type: "fish", adopted: false },
  { id: 3, age: 5, name: "Coco", type: "parrot", adopted: false },
  { id: 4, age: 15, name: "Bicho", type: "dog", adopted: true },
];
let filteredData = pets
console.log(filteredData)
app.get('/pets', (req,res) => {
  return res.json(filteredData)
})
app.get('/pets/:id', (req,res) => {
  const {id} = req.params 
  filteredData = pets.filter((pet) => {
    return pet['id'] === parseInt(id);

  })
  console.log(filteredData)
  res.json(filteredData)
})
app.post('/pets', (req, res) => {

})
app.listen(PORT, console.log(`Successful connection to ${PORT}`))

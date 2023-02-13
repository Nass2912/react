import './App.css'
import { useState } from "react"
import AnimalShow from "./AnimalShow"

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"]
  const randomIndex = Math.floor(Math.random() * animals.length)
  return animals[randomIndex]
}
function App(){
  const [animals, setAnimals] = useState([])
  const [totalClicks, setTotalClicks] = useState(0)

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const handleTotalClick = () => {
    setTotalClicks(totalClicks + 1)
  }

  const renderedAnimals = animals.map((element, index) =>{
    return <AnimalShow key={index} animal={element} />
  })

  return(
    <>
      <div className="app" style={{ display: "flex", alignItems: "center" }}>
        <button className="button is-primary" onClick={handleClick}>Add Animal</button>
        <h1 style={{ paddingLeft: '15px' }}>Number of clicks : {totalClicks}</h1>
      </div>
      <div className="box animal-list" onClick={handleTotalClick}>
        {renderedAnimals}
      </div>
    </>   
  )
}

export default App
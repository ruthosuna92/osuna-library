

import './App.css'
import Tarjeta from './componentes/Tarjeta'

function App() {
  let favorite = false;
  
  const handleFavorite = (isFav) => {
    favorite = isFav
  }

  
  let character = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1"
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z"
  }

  return (
    <>
    <Tarjeta onClick={() => console.log('clicked!')}/>
    </>
  )
}

export default App

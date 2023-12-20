import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Navbar from "./componentes/NavBar";
import CharacterList from "./componentes/ListaPersonagens";

function App() {
  const [characters, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container py-5">
        <CharacterList characters={characters} />
      </div>
    </>
  );
}

export default App;

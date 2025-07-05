import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import Addcard from './component/Addcard';
import CardDetailsShow from './component/CardDetailsShow';

const STORAGE_KEY = 'POKEMON_CARDS';

const App = () => {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};         
  });
  const [selectPokemon, setSelectPokemon] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  const handleCard = (pokemon) => {
    setList((prev) => {
      if (prev[pokemon.id]) {
        Swal.fire('Oops!', 'That Pokémon is already saved.', 'info');
        return prev;
      }
      Swal.fire('Added!', 'The Pokémon has been saved.', 'success');
      return { ...prev, [pokemon.id]: pokemon };
    });
  };

  const handleDeleteCard = (cardId) => {
    setList((prev) => {
      const updated = { ...prev };
      delete updated[cardId];
      Swal.fire('Deleted!', 'The Pokémon has been removed.', 'success');
      return updated;
    });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home setSelectPokemon={setSelectPokemon} />} />
        <Route path="/cardDetails"element={<CardDetailsShow selectPokemon={selectPokemon} addCard={handleCard} />}/>
        <Route path="/addcard" element={<Addcard list={list} onDelete={handleDeleteCard} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

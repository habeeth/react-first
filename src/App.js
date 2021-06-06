import axios from 'axios';
import React, { useState } from 'react';
import NumberList from './NumberList';

function App() {
  const [name, setName] = useState([])
  axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(nam => {
    console.log(nam.data);
    setName(nam.data.results.map(i => { return i.name }))
  })

  return (
    <div className="App">
      <NumberList namess={name}></NumberList>
    </div>
  );
}

export default App;

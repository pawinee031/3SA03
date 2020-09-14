import React from 'react';
import WordCard from './WordCard';
// import CharacterCard from './CharacterCard';
import logo from './logo.svg';
import './App.css';

const word = "Hello";

function App() {
  return (
    <div className="App">
      {/* <CharacterCard value="h"/>
      <CharacterCard value="i"/> */}
      <WordCard value="hello"/>
    </div>
  );
}

export default App;

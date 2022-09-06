import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Number from './views/Number';
import Word from './views/Word';
import WordColor from './views/WordColor'

//localhost3000/home:home page w/ "Welcome" heading
//localhost3000/4: display the number 4 or any other #
//localhost3000/hello: display hello or any other word
//localhost3000/hello/blue/red: hello in blue text w/ read background, should work w/ any other word/colors


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/:num" element={ <Number/> }/>
        <Route path="/:word" element={ <Word/> }/>
        <Route path="/:word/:background/:color" element={ <WordColor/> }/>
      </Routes>
    </div>
  );
}

export default App;

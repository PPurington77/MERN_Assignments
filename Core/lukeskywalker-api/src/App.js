
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Person from './components/Person';
import Planet from './components/Planet';

function App() {
  return (
    <div className='body'>
      <div>
        <Form/>
      </div>
      <Routes>
        <Route path='/people/:id' element = { <Person/> } />
        <Route path='/planets/:id' element = { <Planet/> } />
      </Routes>
    </div>
  );
}

export default App;

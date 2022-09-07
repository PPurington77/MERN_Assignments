
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Person from './components/Person';
import Planet from './components/Planet';
import Error from './components/Error'

function App() {
  return (
    <div className='body'>
      <div>
        <Form/>
      </div>
      <Routes>
        <Route path='/people/:id' element = { <Person/> } />
        <Route path='/planets/:id' element = { <Planet/> } />
        <Route path="*" element ={ <Error/> } />
      </Routes>
    </div>
  );
}

export default App;

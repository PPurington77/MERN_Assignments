
import './App.css';
import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <div className='body'>
      <div>
        <Form/>
      </div>
    </div>
  );
}

export default App;

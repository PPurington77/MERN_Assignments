
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { AllJokes } from './views/AllJokes'; //for specific import
// import AllJokes from './views/AllJokes'; //for importing everthing
import { OneJoke } from './views/OneJoke';
import { NewJoke } from './views/NewJoke';

function App() {
  return (
    <div className="container">
      {/* navbar later */}
      <Routes>
        {/* Redirect Ex */}
        <Route path="/" element={ < Navigate to="/jokes" replace /> } />
        <Route path="/jokes" element={ <AllJokes /> } />
        {/* <Route path="/jokes/:id/edit" element {<EditJoke /> } /> */}
        <Route path="/jokes/new" element={ <NewJoke /> } />
      </Routes>
    </div>
  );
}

export default App;

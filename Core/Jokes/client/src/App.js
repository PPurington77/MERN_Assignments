
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { AllJokes } from './views/AllJokes'; //for specific import
// import AllJokes from './views/AllJokes'; //for importing everthing
import { OneJoke } from './views/OneJoke';
import { NewJoke } from './views/NewJoke';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Jokes Creator</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/jokes"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            All Jokes
          </Link>
          <Link
            to="/jokes/new"
            className="btn btn-sm btn-outline-info mx-1"
          >
            New Joke
          </Link>
        </div>
      </nav>
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

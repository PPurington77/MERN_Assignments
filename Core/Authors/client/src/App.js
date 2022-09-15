import './App.css';
import { AllAuthors } from './views/AllAuthors';
import { Navigate, Routes, Route, Link } from 'react-router-dom';
import { NewAuthor } from './views/NewAuthor';
import { EditAuthor } from './views/EditAuthor';

function App() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Favorite Authors</h1>
      </nav>
      <Routes>
        <Route path="/" element = { <Navigate to="/authors" replace /> } />
        <Route path="/authors" element = { <AllAuthors /> } />
        <Route path="/authors/new" element = { <NewAuthor />} />
        <Route path="/authors/:id/edit" element= { <EditAuthor />} />
      </Routes>
    </div>
  );
}

export default App;

import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AllProducts } from './views/AllProducts';

function App() {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
      <h1 className="navbar-brand mb-0">Product Creator</h1>
      <div className="navbar-nav justify-content-between">
        <Link
          to="/products"
          className="btn btn-sm btn-outline-primary mx-1"
        >
          Products
        </Link>
        <Link
          to="/products/new"
          className="btn btn-sm btn-outline-info mx-1"
        >
          New Product
        </Link>
      </div>
    </nav>
    <Routes>
      {/* Redirect Ex */}
      <Route path="/" element={ < Navigate to="/products" replace /> } />
      <Route path="/products" element={ <AllProducts /> } />
      {/* <Route path="/jokes/:id/edit" element {<EditJoke /> } /> */}
      {/* <Route path="/jokes/new" element={ <NewJoke /> } /> */}
    </Routes>
  </div>
  );
}

export default App;

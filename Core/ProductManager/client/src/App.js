import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import EditProduct from './views/EditProduct';
import OneProduct from './views/OneProduct';
import Products from './views/Products';

function App() {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
      <h1 className="navbar-brand mb-0">Product Creator</h1>
    </nav>
    <Routes>
      {/* Redirect Ex */}
      <Route path="/" element={ < Navigate to="/products" replace /> } />
      <Route path="/products" element={ <Products /> } />
      <Route path="/products/:id" element={<OneProduct />} />
      <Route path="/products/:id/edit" element={ <EditProduct />} />
    </Routes>
  </div>
  );
}

export default App;

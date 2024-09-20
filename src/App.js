import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Food from './pages/Food';
import Home from './pages/Home';
import FoodDetail from './pages/FoodDetail';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main container with Bootstrap's container class */}
      <div className="container mt-4">
        <Routes>
          <Route path="/create-food" element={<Food />} />
          <Route path="/" element={<Home />} />
          <Route path="/food-detail/:id" element={<FoodDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

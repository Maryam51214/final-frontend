
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
      <Navbar/>

      <Routes>
        <Route path = "/create-food" element = {<Food/>}/>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/food-detail/:id" element = {<FoodDetail/>}/>
      </Routes>
    </>
  );
}

export default App;

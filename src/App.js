import './App.css';
import Home from './Home';
import NavBar from './NavBar'
import RestaurantList from './RestaurantList'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantList />} />
       
      </Routes>
      
     
    </div>
  );
}

export default App;

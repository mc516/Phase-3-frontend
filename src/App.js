import './App.css';
import Home from './Home';
import NavBar from './NavBar'
import Restaurants from './Restaurants'
import {Routes, Route} from "react-router-dom"
import {useEffect} from 'react'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
       
      </Routes>
      
     
    </div>
  );
}

export default App;

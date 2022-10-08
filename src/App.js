import './App.css';
import Home from './Home';
import NavBar from './NavBar'
import Restaurants from './Restaurants'
import {Routes, Route} from "react-router-dom"
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
    
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

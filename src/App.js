import './App.css';
import Home from './Home';
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
      <Routes>
        <Route path="/" element={<Home />} />
          
       
      </Routes>
      
     
    </div>
  );
}

export default App;

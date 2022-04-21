import React,{useState,useEffect} from 'react'
import Home from './components/Home';
import NavBar from './components/Navbar';
import ListVacations from './components/Vacations/ListVacations';
import NewVacation from './components/Vacations/NewVacation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App=()=> {
  const [vacations,setVacations]=useState([])

  useEffect(()=>{

    const fetchVacations=()=>{
      fetch("http://localhost:3001/vacations")
      .then(res=>res.json())
      .then(data=>setVacations(data))
    }

    fetchVacations();

  },[])

  

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/vacations" element={<ListVacations vacations={vacations}/>}/>
        <Route path="/vacations/new" element={<NewVacation/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;

import React,{useState,useEffect} from 'react'
import Home from './components/Home';
import NavBar from './components/Navbar';
import MainContainer from './components/MainContainer';
import NewVacation from './components/Vacations/NewVacationForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const App=()=> {
  
  

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/vacations" element={<MainContainer/>}/>
        <Route path="/vacations/new" element={<NewVacation/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;

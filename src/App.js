import React,{useState,useEffect} from 'react'
import Home from './components/Home';
import NavBar from './components/Navbar';
import MainContainer from './components/MainContainer';
import NewVacation from './components/Vacations/NewVacationForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const App=()=> {
    const[vacations,setVacations]=useState([])
    const[sortVacations,setSortVacations]=useState('')
    const[filter,setFilter]=useState('All')    

  useEffect(()=>{

      fetch("http://localhost:8000/vacations")
      .then(res=>res.json())
      .then(data=>setVacations(data))
  },[])


  function addVacation(vacation){
    setVacations([...vacations,vacation])

}

  const displayVacations=()=>{
    if(filter==='All'){
           if(sortVacations==="Alphabetically"){
            return [...vacations].sort((a,b)=> a.country > b.country ? 1 : -1)
           }
           return [...vacations]

    }
    else{
      const filterVacations=[...vacations].filter(vacation=>vacation.continent===filter)
        if(sortVacations==="Alphabetically"){
         return filterVacations.sort((a,b)=> a.country > b.country ? 1 : -1)
        }
        return filterVacations

    }
    // if(filter!=="All"){
    //     const filterVacations=[...vacations].filter(vacation=>vacation.continent===filter)
    //     if(sortVacations==="Alphabetically"){
    //      return filterVacations.sort((a,b)=> a.country > b.country ? 1 : -1)
    //     }
    //     return filterVacations
    // }
    // else{
    //     if(sortVacations==="Alphabetically"){
    //         return [...vacations].sort((a,b)=> a.country > b.country ? 1 : -1)
    //        }
    //        return [...vacations]
    // }
  }


const updateSort = (vacation) => {
  setSortVacations(vacation);
};


const updateFilter=(vacation)=>{
  setFilter(vacation)
}


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/vacations/new" element={<NewVacation addVacation={addVacation}/>}/>
        <Route path="/vacations" element={<MainContainer 
        vacations={displayVacations()} 
        updateFilter={updateFilter}
        updateSort={updateSort}
        setSortVacations={setSortVacations} 
        setFilter={setFilter}/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;

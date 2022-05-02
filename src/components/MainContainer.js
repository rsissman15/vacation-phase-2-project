import React, {useEffect,useState} from 'react'
import Search from './Search'
import ListVacationsContainer from './Vacations/ListVacationsContainer'
import NewVacation from './Vacations/NewVacationForm'

const MainContainer = ({vacations,updateSort,updateFilter}) => {
  return (
    <div>
        <Search 
        updateSort={updateSort}
        updateFilter={updateFilter}
        />
        <ListVacationsContainer vacations={vacations}/>  
    </div>
  )
}

export default MainContainer
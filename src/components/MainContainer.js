import React from 'react'
import Search from './Search'
import ListVacationsContainer from './Vacations/ListVacationsContainer'


const MainContainer = ({vacations,updateSort,updateFilter,filter}) => {
  return (
    <div>
        <Search 
        updateSort={updateSort}
        updateFilter={updateFilter}
        filter={filter}
        />
        <ListVacationsContainer vacations={vacations}/>  
    </div>
  )
}

export default MainContainer
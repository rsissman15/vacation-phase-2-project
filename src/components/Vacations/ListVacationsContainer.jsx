import React,{useState} from 'react'
import VacationCard from './VacationCard'
import Card from '@material-ui/core/List';




const ListVacations = ({vacations}) => {

  const renderVacation= vacations.map(vacation=><VacationCard key={vacation.id} vacation={vacation}/>)

  return (
    <div>
        <Card component="nav" aria-label="secondary mailbox folders">
          {renderVacation}
      </Card>
    </div>
  )
}

export default ListVacations
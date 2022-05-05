import React from 'react'
import VacationCard from './VacationCard'
import Grid from '@mui/material/Grid';


const ListVacations = ({vacations}) => {

  const renderVacation= vacations.map(vacation=><VacationCard key={vacation.id} vacation={vacation}/>)



  return (
    <div>
      <Grid container>
          {renderVacation}
      </Grid>
    </div>
  )
}

export default ListVacations
import React from 'react'

const Search = ({updateSort,updateFilter,filter}) => {
  return (
    <>
      <div style={{textAlign: "center"}}>
        <strong>Sort by:</strong>
          <label>
          <input
            type="radio"
            value="Alphabetically"
            name="sort"
            checked={null}
            onChange={e=>updateSort(e.target.value)}
          />
          Alphabetically
        </label>
      
      </div>

      <div style={{textAlign: "center"}}>
      <label>
      <strong>Filter Countires by Continent:</strong>
      <select value={filter} onChange={(e)=>updateFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Antartica">Antartica</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>
      </label>
    

      </div>
      
    </>
  )
}

export default Search
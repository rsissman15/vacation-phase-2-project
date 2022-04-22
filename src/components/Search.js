import React from 'react'

const Search = ({updateSort,updateFilter}) => {
  return (
    <>
      <div>
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

      <label>
      <strong>Filter:</strong>
      <select onChange={(e)=>updateFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Antartica">Antartica</option>
        <option value="Asia">Asia</option>
        <option value="Australia">Australia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>
      </label>
    
    </>
  )
}

export default Search
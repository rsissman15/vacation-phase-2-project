import React,{useState} from 'react'


const NewVacation = ({addVacation}) => {
  const [formData,setFormData]=useState({
    country:'',
    continent:'',
    flights:'',
    cities:'',
    activities:'',
    image:''
  })


  function handleChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedFormData = {...formData}
    console.log(updatedFormData)
    fetch("http://localhost:8000/vacations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedFormData)
    })
    .then(resp => resp.json())
    .then(data => addVacation(data))
    
  }


  return (
    <div className="new-plant-form">
    <h2>New Vacation</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange}/>
      <input type="text" name="continent" placeholder="Continent" value={formData.continent} onChange={handleChange} />
      <input type="text" name="flights" placeholder="Flights URL" value={formData.flights} onChange={handleChange} />
      <input type="text" name="cities" placeholder="Cities" value={formData.cities} onChange={handleChange} />
      <input type="text" name="activities" placeholder="Activities"value={formData.activities} onChange={handleChange} />
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <button type="submit">Add Vacation</button>
    </form>
  </div>
  );
}
export default NewVacation
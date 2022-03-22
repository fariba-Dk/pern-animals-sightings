import { useState } from 'react';

const Form = (props) => {
  const [animal, setAnimal] = useState({
    commonname: '',
    scientificname: '',
    total_wild: 0,
    creation_timestamp: new Date(),
    healthy: '',
  });

  //create functions that handle the event of the user typing into the form
  const handleCommonnameChange = (event) => {
    const commonname = event.target.value;
    setAnimal((animal) => ({ ...animal, commonname }));
  };

  const handleScientificnameChange = (event) => {
    const scientificname = event.target.value;
    setAnimal((animal) => ({ ...animal, scientificname }));
  };
  const total_wild= (event) =>{
      setAnimal((animal) => ({...animal, total_wild}))
  }

  //A function to handle the post request
  const postAnimal = (newAnimal) => {
    return fetch('http://localhost:5005/api/animals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAnimal),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('From the post ', data);
        props.addAnimal(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAnimal(animal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Animal Common Name</label>
        <input
          type='text'
          id='add-user-name'
          placeholder='Common Name'
          required
          value={animal.name}
          onChange={handleCommonnameChange}
        />
        <label>Animal Scientific Name</label>
        <input
          type='text'
          id='add-animal-scientificname'
          placeholder='Scientific name'
          required
          value={animal.scientificname}
          onChange={handleScientificnameChange}
        />
      </fieldset>
      <button type='submit'>Add</button>
    </form>
  );
};

export default Form;

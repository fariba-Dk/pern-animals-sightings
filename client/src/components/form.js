import React, { useState } from 'react';
import '../App.css';

const Form = () => {
  //HOOKS

  const [animal, setAnimal] = useState({});

  //handle submit ...
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { animal };
      const response = fetch('http:localhost:5005/animals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: 'JSON.stringify(body)',
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  //create functions that handle the event of the user typing into the form
  const handleNameSubmit = (event) => {
    const commonname = event.target.value;
    setAnimal((animal) => ({ ...animal, commonname }));
  };

  

  return (
    <div>

      <h1 className='text-center mt-3'>What Did You Spot?</h1>

      <form className='d-flex mt-5'>
        <fieldset>
          <label>Animal Name</label>
          <input
            type='text'
            className='form-control mt-5'
            id='add-animal-name'
            placeholder='Animal Common Name'
            required
            value={animal.name}
            onChange={handleNameSubmit}
          />

        </fieldset>
        <button className='btn btn-success' type='submit'>
          Add Animal
        </button>
      </form>
    </div>
  );
};

export default Form;

/*const [animal, setAnimal] = useState({
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


*/

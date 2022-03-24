import React, { useState } from 'react';
import '../App.css';

const Form = () => {
  //HOOKS

  const [animal, setAnimal] = useState({});
  //handle submit ...
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if(!animal) return;
    // const animal = e.target.value;
    try {
      const body = { animal: animal };
      //look at server side line 37 re.body
      const response = await fetch('http://localhost:5005/animals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className='fieldset'>
        <fieldset>
          <h1 className='text-center'>What Did You Spot Today? 🐘 </h1>
          {/* {' '}
            {animal.commonname} {animal.scientificname}
            {animal.total_wild}
            {animal.creation_timestamp}
            {animal.healthy} */}
          <input
            type='text'
            className='form-control'
            placeholder='Animal Name'
            required
            value={animal.commonmname}
            onChange={(e) => setAnimal({...animal, commonname: e.target.value})}
          />
          <br />
          <input
            type='date'
            className='form-control'
            id='add-animal-name'
            value={animal.creation_timestamp}
            onChange={handleSubmit}
          />
          <br/>
          <input type='type'
          placeholder="Does Animal seems healthy?"
          value={animal.healthy} />
          <br/>
          <input type='type'
          placeholder="Y"
          value={animal.healthy} />
          <input type='type'
          placeholder="N"
            value={animal.health}
          />
          <br/>

          <button onClick={() => e => handleSubmit} className='button' type='submit'>
            Add
          </button>
        </fieldset>
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
SELECT * FROM animals INNER JOIN users ON animals_id = users_id;
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

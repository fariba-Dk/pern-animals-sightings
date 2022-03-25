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
      const response = await fetch('http://localhost:8080/api/animals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(response),
      })

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
          <input
            type='text'
            className='form-control'
            placeholder='Animal Name'
            required
            value={animal.commonmname}
            onChange={(e) =>
              setAnimal({ ...animal, commonname: e.target.value })
            }
          />
          <br />
          <input
            type='text'
            className='form-control'
            placeholder='Scientific Name'
            required
            value={animal.scientificname}
            onChange={(e) =>
              setAnimal({ ...animal, scientificname: e.target.value })
            }
          />
          <br />
          <input
            type='date'
            className='form-control'
            id='add-animal-name'
            value={animal.creation_timestamp}
            onChange={(e) =>
              setAnimal({ ...animal, creation_timestamp: e.target.value })
            }
          />
          <br />
          <input
            type='type'
            placeholder='Is Animal healthy?'
            value={animal.healthy}
            onChange={(e) => setAnimal({ ...animal, healthy: e.target.value })}
          />
          <br />
          <input type='checkbox' placeholder='Y' value={animal.healthy} />
          <input type='type' placeholder='Yes!' value={animal.healthy} />
          <input type='checkbox' placeholder='Y' value={animal.healthy} />
          <input type='type' placeholder='No!' value={animal.healthy} />
          <br/>

          <textArea className='textarea' type="text" placeholder="Additional notes... "> Please Add Additional Notes here...
          </textArea>
          <br />
          <button
            onClick={() => (e) => handleSubmit}
            className='button'
            type='submit'
          >
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


};


*/

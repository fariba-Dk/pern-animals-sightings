import React, { useState, useEffect } from 'react';
import '../App.css';

function Animals() {
  const [animalsData, setAnimalsData] = useState([]);

  //HOOK makes a fetch request REST API everytime this component is rendered and
  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    try {
      const response = await fetch('http://localhost:8080/animals');

      const data = await response.json();

      setAnimalsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  //DELETE FUNCTION
  const deleteAnimal = async (id) => {
    try {
      const deleteAnimal = await fetch(`http://localhost:5002/animals/` + id, {
        method: 'DELETE',
      });
      console.log('this item just got deeeeeeeeleted', deleteAnimal);
      //to take the deleted animals out
      setAnimalsData(animalsData.filter((animal) => animal.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='app'>
      <table>
        <tr>
          <th>Common-Name</th>
          <th>Scientific-Name</th>
          <th>Total-In-Wild</th>
          <th>Location-Found</th>
          <th>Healthy</th>
          <th>Notes</th>
        </tr>

        {animalsData.map((animal) => (
          <tr key={animal.id}>
            <td>{animal.commonname}</td>
            <td>{animal.scientificname}</td>
            <td>{animal.total_wild}</td>
            <td>{animal.location}</td>
            <td>{animal.healthy}</td>{' '}
            <td>{' '}</td>
            <td>{' '}</td>
            <td>
              <input type='text' placeholder='Notes...' />
            </td>
            <td>
              <button onClick={() => deleteAnimal(animal.id)}>Update</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Animals;

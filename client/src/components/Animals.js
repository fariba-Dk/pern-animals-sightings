import React, { useState, useEffect } from 'react';
import '../App.css';
import Form from './Form';

function Animals() {
  const [animalsData, setAnimalsData] = useState([]);

  //HOOK makes a fetch request REST API everytime this component is rendered and
  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    try {
      const response = await fetch('http://localhost:5005/animals');
      const data = await response.json();
      setAnimalsData(data);

      console.log('this is data', animalsData);
    } catch (error) {
      console.error(error);
    }
  };

  //DELETE FUNCTION
  const deleteAnimal = async (id) => {
    try {
      const deleteAnimal = await fetch(
        `http://localhost:5005/animals/` +id,
        {
          method: 'DELETE',
        }
      );
      console.log('this item just got deeeeeeeeleted', deleteAnimal);
      //to take the deleted animals out
      setAnimalsData(animalsData.filter(animal=>animal.id !== id))

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <table className='table mt-2 text-center'>
        <tbody>
          {animalsData.map((animal) => (
            <tr
              key={animal.id}>
              <td>{animal.commonname}</td>
              <td>{animal.scientificname}</td>

              <td>
                <button onClick={() => deleteAnimal(animal.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Animals;


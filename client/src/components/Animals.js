import React, { useState, useEffect } from 'react';
import '../App.css';
import Form from './Form';

function Animals() {
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
  const [animalsData, setAnimalsData] = useState([]);

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div>
      <div>
        <h1 className='a'> 🦍 🐢 🦁 🦃 🦅 🦝 🐅 🐪 🦁 🐘 🐒 🦃 🦖 🦍 </h1>
        <div>
          <h1 className='a'> 🦍 🐢 🦁 🦃 🦅 🦝 🐅 🐪 🦁 🐘 🐒 🦃 🦖 🦍 </h1>
        </div>
      </div>

      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th>Animal Common Name</th>
            <th>Animal Scientific Name</th>
            <th>Date of Sighting</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Animal Name</td>
            <td>Add</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>  *** mdn table syntax*/}
          {animalsData.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.commonname}</td>
              <td>Add</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            {' '}
            {animal.commonname} {animal.scientificname}
            {animal.total_wild}
            {animal.creation_timestamp}
            {animal.healthy}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Animals;

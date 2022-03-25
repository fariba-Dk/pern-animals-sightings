import React, { useState, useEffect } from "react";
import "../App.css";

function Animals(props) {
  const { animalsData, setAnimalsData } = props;
  // useEffect(() => {}, [animalsData])

  //DELETE FUNCTION
  const deleteAnimal = async (id) => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:8080/animals/${id}`,
        {
          method: "DELETE",
        }
      );
      if (deleteResponse.status === 200) {
        //to take the deleted animals out
        setAnimalsData(animalsData.filter((animal) => animal.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="app">
      <table>
        <thead>
          <tr>
            <th>Common-Name</th>
            <th>Scientific-Name</th>
            <th>Total-In-Wild</th>
            <th>Location-Found</th>
            <th>Healthy</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {animalsData.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.commonname}</td>
              <td>{animal.scientificname}</td>
              <td>{animal.total_wild}</td>
              <td>{animal.location}</td>
              <td>{animal.healthy}</td> <td> </td>
              <td> </td>
              <td>
                <input
                  type="text"
                  placeholder="Notes..."
                  value={animal.notes} // we haven't stored notes in db, so need to create column to do so
                />
              </td>
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

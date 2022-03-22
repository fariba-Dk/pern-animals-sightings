import { useState, useEffect } from "react";
import Form from "./Form";

function Animals() {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5005/api/animals")
        .then((response) => response.json())
        .then(students =>{
            //setStudents((students[3]));
            //console.log("Testing", typeof students);
            for (let index in animals){
               if( index !== "3"){
                setAnimals(animals);
               }
            };
        })

    }, []);



    const addAnimal = (newAnimal) => {
        //console.log(newStudent);
        //postStudent(newStudent);
        setAnimals((animals) => [...animals, newAnimal]);
    }


    return (
      <div className="animals">
        <h2> List of Animals </h2>
        <ul>
            {animals.map(animal =>
                <li key={animal.id}> {animal.commonname} {animal.scientificname}{animal.total_wild}
                {animal.creation_timestamp}
                {animal.healthy}</li>)}
        </ul>
        <Form addStudent={addAnimal} />
      </div>
    );
  }

  export default Animals;

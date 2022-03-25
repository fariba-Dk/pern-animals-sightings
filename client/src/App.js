import React, { useState, useEffect } from "react";

import "./App.css";
import Animals from "./components/Animals";
import Form from "./components/Form";
import Seekers from "./components/Seekers";

function App() {
  const [animalsData, setAnimalsData] = useState([]);

  //HOOK makes a fetch request REST API everytime this component is rendered and
  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    console.log("getting animals");
    try {
      const response = await fetch("http://localhost:8080/animals");

      const data = await response.json();

      setAnimalsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form onSubmit={getAnimals} />
      <Seekers />
      <Animals
        className="app"
        animalsData={animalsData}
        setAnimalsData={setAnimalsData}
      />
    </>
  );
}

export default App;

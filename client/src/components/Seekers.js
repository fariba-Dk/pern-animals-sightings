import React, { useState, useEffect } from 'react';

function Seekers() {
  const [seekers, setSeekers] = useState([]);

  useEffect(() => {
    getSeekers();
  }, []);

  const getSeekers = async () => {
    try {
      const response = await fetch('http://localhost:8080/users');

      const data = await response.json();

      setSeekers(data);
    } catch (error) {
      console.error(error);
    }
  };

  function createSeeker() {
    let name = prompt('Enter seeker name');
    let nick_name = prompt('Enter seeker nick_name');
    let email = prompt('Enter seeker email');
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, nick_name, email }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getSeekers();
      });
  }
  // function deleteSeeker() {
  //   let id = prompt('Enter seeker id');
  //   fetch(`http://localhost:8080/users/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getSeekers();
  //     });
  // }
  return (
    <div>
    
      {seekers.map((seeker) => (
        <li key={seeker.id}>
          {seeker.name} {seeker.nick_name} {seeker.email}
        </li>
      ))}
      <br />
      <button onClick={createSeeker}>Add Seeker</button>
      <br />
      {/* <button onClick={deleteSeeker}>Delete Seeker</button> */}
    </div>
  );
}
export default Seekers;

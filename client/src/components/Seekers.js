import React, { useState, useEffect } from 'react';

function Seekers() {
  const [seekers, setSeekers] = useState(false);
  useEffect(() => {
    getSeekers();
  }, []);

  function getSeekers() {
    fetch('http://localhost:5002')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setSeekers(data);
      });
  }
  function createSeeker() {
    let name = prompt('Enter seeker name');
    let nick_name = prompt('Enter seeker nick_name');
    let email = prompt('Enter seeker email');
    fetch('http://localhost:5002/seekers', {
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
  function deleteSeeker() {
    let id = prompt('Enter seeker id');
    fetch(`http://localhost:5002/seeker/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getSeekers();
      });
  }
  return (
    <div>
      {seekers ? seekers : 'There is no seekers data available'}
      <br />
      <button onClick={createSeeker}>Add Seeker</button>
      <br />
      <button onClick={deleteSeeker}>Delete Seeker</button>
    </div>
  );
}
export default Seekers;

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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Nick Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {seekers.map((seeker) => (
            <tr key={seeker.id}>
              <td>{seeker.name}</td>
              <td>{seeker.nick_name}</td>
              <td>{seeker.email}</td>

              <td>
                <button onClick={() => setSeekers(seeker.id)}>Update</button>
              </td>
            </tr>
          ))}

          {/* <button onClick={deleteSeeker}>Delete Seeker</button> */}
        </tbody>
      </table>
    </div>
  );
}
export default Seekers;

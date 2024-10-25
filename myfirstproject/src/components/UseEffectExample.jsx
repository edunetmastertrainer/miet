import React, { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [users, setUsers] = useState([]); // State variable users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); // <--- empty dependency array
  return (
    <>
      {" "}
      <h1>Users</h1>
      <table border={3} width={100}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>phone</th>
        </tr>
        {users.map((user) => {
          return (
            <>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
}

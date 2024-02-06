import React from "react";

const List = () => {
  const users = [
    {
      name: "Pak Secondta",
      username: "Tata",
      email: "email@gmail.com",
    },
    {
      name: "Dani Aja",
      username: "Dani",
      email: "email@gmail.com",
    },
    {
      name: "Bintangan",
      username: "Bintang",
      email: "email@gmail.com",
    },
    {
      name: "Cenna",
      username: "Ave",
      email: "email@gmail.com",
    },
  ];

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;

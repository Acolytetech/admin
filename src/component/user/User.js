import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users'); // Updated to correct port
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {users.map(user => (
          <li key={user._id} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-xl font-bold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default User;

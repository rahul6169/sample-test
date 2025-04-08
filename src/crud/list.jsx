import React from 'react';
import { api } from './api';

export const UserList = ({ users, onEdit, onUserChanged }) => {
  const deleteUser = async (id) => {
    await api.delete(`/${id}`);
    onUserChanged();
  };

  return (
    <div>
      <h3>User List</h3>
      <table>
        <thead>
            <th>Name</th>
            <th>Actions</th>
        </thead>
        <tbody>
          {users.length === 0 ? (
              <td colSpan="2">No users found.</td>
          ) : (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  <button onClick={() => onEdit(user)}>Edit</button>
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

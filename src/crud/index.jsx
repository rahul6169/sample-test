import React, { useEffect, useState } from 'react';
import { api } from './api';

export const UserForm = ({ onUserSaved, editingUser }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
    }
  }, [editingUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;

    try {
      if (editingUser) {
        await api.put(`/${editingUser._id}`, { name });
      } else {
        await api.post('/', { name });
      }
      setName('');
      onUserSaved();
    } catch (err) {
      console.error('Error saving user:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">{editingUser ? 'Update' : 'Create'} </button>
    </form>
  );
};

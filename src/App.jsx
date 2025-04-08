import React, { useEffect, useState } from 'react';
import { api } from './crud/api';
import { UserForm } from './crud/index';
import { UserList } from './crud/list';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await api.get('/');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserSaved = () => {
    fetchUsers();
    setEditingUser(null);
  };

  return (
    <div>
      <UserForm
        onUserSaved={handleUserSaved}
        editingUser={editingUser}
      />
      <UserList
        users={users}
        onEdit={(user) => setEditingUser(user)}
        onUserChanged={handleUserSaved}
      />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface Password {
  _id: string;
  name: string;
  username: string;
  password: string;
  description: string;
}

interface AppProps {
  // empty props
}

const App: React.FC<AppProps> = () => {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [newPassword, setNewPassword] = useState<Password>({
    _id: '',
    name: '',
    username: '',
    password: '',
    description: '',
  });
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleRegister = async () => {
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data) {
        setIsLogged(true);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetPasswords = async () => {
    try {
      const response = await fetch(`${API_URL}/api/passwords`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setPasswords(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreatePassword = async () => {
    try {
      const response = await fetch(`${API_URL}/api/passwords`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPassword),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetPasswordById = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/api/passwords/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePassword = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/api/passwords/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPassword),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePassword = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/api/passwords/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Gestor de contraseñas</h1>
      <form>
        <label>Username:</label>
        <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
        <label>Password:</label>
        <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button type="button" onClick={handleRegister}>Register</button>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      {isLogged && (
        <div>
          <h2>Passwords</h2>
          <ul>
            {passwords.map((password) => (
              <li key={password._id}>
                <p>{password.name}</p>
                <p>{password.username}</p>
                <p>{password.password}</p>
                <p>{password.description}</p>
                <button type="button" onClick={() => handleGetPasswordById(password._id)}>Get</button>
                <button type="button" onClick={() => handleUpdatePassword(password._id)}>Update</button>
                <button type="button" onClick={() => handleDeletePassword(password._id)}>Delete</button>
              </li>
            ))}
          </ul>
          <form>
            <label>Name:</label>
            <input type="text" value={newPassword.name} onChange={(e) => setNewPassword({ ...newPassword, name: e.target.value })} />
            <label>Username:</label>
            <input type="text" value={newPassword.username} onChange={(e) => setNewPassword({ ...newPassword, username: e.target.value })} />
            <label>Password:</label>
            <input type="password" value={newPassword.password} onChange={(e) => setNewPassword({ ...newPassword, password: e.target.value })} />
            <label>Description:</label>
            <input type="text" value={newPassword.description} onChange={(e) => setNewPassword({ ...newPassword, description: e.target.value })} />
            <button type="button" onClick={handleCreatePassword}>Create</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
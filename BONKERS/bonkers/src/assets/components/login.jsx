


import React, { useState } from 'react';
import './login.css';

function Login({ show, setShow }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter username and password.');
      return;
    }
    alert(`Logging in as ${username}`);
    setShow(false);
    setUsername('');
    setPassword('');
  };

  if (!show) return null;

  return (
    <div className="backdrop" onClick={() => setShow(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header>
          <h2>Sign In</h2>
          <button className="close" onClick={() => setShow(false)}>✕</button>
        </header>

        <form onSubmit={handleLogin} className="form">
          <label>Username or Email</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <div className="actions">
            <button type="submit" className="login-btn">Login</button>
            <button type="button" className="cancel" onClick={() => setShow(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;


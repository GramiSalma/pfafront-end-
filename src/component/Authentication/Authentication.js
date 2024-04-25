import React, { useState } from 'react';
import './Authenticaton.css';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Authentication = () => {
  let navigate = useNavigate();
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/absences/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Rediriger vers la page AddConge si l'authentification réussie
        navigate('/AddConge');
        console.log('Authentification réussie');
      }
    } catch (error) {
      // Gérer les erreurs de l'authentification
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='b'>
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <button type="submit">Login</button>
        <div className="register-link"></div>
      </form>
    </div>
    </div>
  );
};

export default Authentication;

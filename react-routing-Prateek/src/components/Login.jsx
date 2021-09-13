import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = () => {
    const userData = {
      username,
      password,
    };

    axios
      .post('http://localhost:3000/auth/v1/', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isAuthenticated', true);
        history.push('/');
      });
  };

  if (localStorage.getItem('isAuthenticated') === 'true') {
    history.push('/');
  }

  return (
    <div>
      <div className='container mt-4'>
        <h2>Login</h2>
        <div className='row mt-3'>
          <div className='col-md-4'>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control'
                id='username'
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={loginSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  const [form, setForm] = useState({
    credentials: {
      username: '',
      password: '',
    },
  });

  const handleChange = (e) => {
    setForm({
      credentials: {
        ...form.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', form.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        // redirect the user to app's main logged in page
        props.history.push('/protected');
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type='text'
          name='username'
          value={form.credentials.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          value={form.credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;

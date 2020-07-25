import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../features/auth/authSlice';
import { apiCall } from '../services/apiCall';

export function Signup() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await apiCall(
      '/auth/signup',
      'post',
      JSON.stringify({
        email,
        password,
        firstName,
        lastName,
      })
    );
    const json = await res.json();
    console.log(json);
    dispatch(setAuth(json));
  };

  return (
    <div>
      <h3>Signup</h3>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

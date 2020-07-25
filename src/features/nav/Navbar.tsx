import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../auth/authSlice';
import OrganizationPicker from './OrganizationPicker';

export function Navbar() {
  const user = useSelector(selectUser);
  return (
    <nav>
      <OrganizationPicker />
      {user && <p>Logged in as {user.email}</p>}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/org">Org</Link>
        </li>
      </ul>
    </nav>
  );
}

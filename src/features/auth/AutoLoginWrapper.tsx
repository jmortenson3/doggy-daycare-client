import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiCall } from '../../services/apiCall';
import { setAuth } from './authSlice';

export function AutoLoginWrapper(props: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await apiCall('/users/me', 'get');
        const json = await res.json();
        dispatch(setAuth(json));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <>{props.children}</>;
}

export default AutoLoginWrapper;

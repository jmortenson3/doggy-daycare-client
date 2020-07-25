import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './features/nav/Navbar';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Organizations } from './pages/Organizations';
import { Signup } from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/org">
          <Organizations />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

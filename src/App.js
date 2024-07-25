import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import EmployeesList from './components/EmployeesList';
import EmployeeDetails from './components/EmployeeDetails';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Credit Card Admin Portal</h1>
          {!loggedIn && (
            <Link to="/login" className="login-button">Admin Login</Link>
          )}
        </header>
        <Routes>
          <Route path="/" element={<Dashboard loggedIn={loggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/industry/:id" element={<EmployeesList />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

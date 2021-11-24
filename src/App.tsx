import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from './page/About';
import Users from './page/Users';
import UsersDetail from './page/UsersDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <h3><Link to ="">Logo</Link></h3>
        <ul className="nav-links">
          <li><Link to ="/about">About</Link></li>
          <li><Link to ="/users">Users</Link></li>
        </ul> 
      </div>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UsersDetail/>}/>
      </Routes>
    </Router>
  );
}




export default App;

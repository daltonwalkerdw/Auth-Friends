import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch }  from "react-router-dom"
import './App.css';
import Login from "./components/Login"
import FriendsList from './components/FriendsList';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/login">Login</Link>
    <Switch>
      <ProtectedRoute exact path="/protected" component={FriendsList} />
      <Route path="/login" component={Login} />
    </Switch>
    
      
    </div>
    </Router>
  );
}

export default App;

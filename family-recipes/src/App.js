import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';

import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import { DataContext } from './context/data'
import Nav from './components/Nav'
import AddRecipe from './components/AddRecipe';
import Register from './components/Register'

function App() {

  const [data, setData] = useState([])

  return (
    <Router>
      <div className="App">
        {/* <Route exact path="/" component={AddRecipe} /> */}

        <DataContext.Provider value={{data}}>
          <Nav />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard}/>
        </DataContext.Provider>
      </div>
    </Router>
  );
}

export default App;

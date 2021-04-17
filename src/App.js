import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home/Home"
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import Admin from './components/Admin/Admin/Admin';
import Login from './components/Login/Login/Login';
import Order from './components/Order/Order/Order';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedService, setSelectedService] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, selectedService, setSelectedService]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/place-order">
          <Order></Order>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

import Routing from './Routing/Routing'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import jwtDecode from "jwt-decode"
import { useState } from 'react'
import setAuthToken from './axios/setAuthToken';

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


let logUser;
if(localStorage.token){
  const jwt =localStorage.getItem("token");
  setAuthToken(jwt)
  logUser = jwtDecode(jwt);
}

function App() {
  const [user, setUser]= useState(logUser);
  
  console.log(user)

  return (
    <Router>
      <div>
          <NavBar user={user}/>
          <div>
            <Routing user={user}/>
          </div>
          <div>
            <ToastContainer/>
          </div>
      </div>
    </Router>
  )
}

export default App

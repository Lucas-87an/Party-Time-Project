import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = ({user})=>{
    return(
        <nav id="navbar">
            <h2>Party Time</h2>
            {!user && (
               <ul>
                  <li>
                     <> <NavLink className="btns" to="/">Home</NavLink>
                        <NavLink className="btns" to="/login">Login</NavLink>
                        <NavLink className="btns" to="/register">Register</NavLink>
                        <NavLink className="bottom" to="/login">Criar festa</NavLink>
                     </>
                  </li>
               </ul> 
            )}
            {user && (
               <ul>
                  <li>
                     <>
                        <NavLink className="btns" to="/">Home</NavLink>
                        <NavLink className="bottom" to="/party/new">Criar festa</NavLink>
                        <NavLink className="btns" to="/logout">Logout</NavLink>
                        <NavLink className="btns" to="/profile">Profile</NavLink>
                     </>
                  </li>
               </ul>
            )}
        </nav>
    )
};

export default NavBar;
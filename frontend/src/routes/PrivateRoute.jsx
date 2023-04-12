import React from 'react'
import { Outlet,Navigate } from 'react-router'
const PrivateRoute = ({user}) => {
  return user ? <Outlet/> : <Navigate to="/login"/>  
}

export default PrivateRoute
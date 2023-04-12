import React from "react";
import { Routes, Route } from "react-router-dom";



import Login from "../routes/Login";
import Register from "../routes/Register";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import PrivateRoute from "../routes/PrivateRoute";
import Logout from "../routes/Logout";
import CreateParty from "../routes/CreateParty";
import Party from "../routes/Party";
import EditParty from "../routes/EditParty";

const Routing = ({user}) => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login user={user} />} />
            <Route path='/register' element={<Register user={user} />} />
            <Route element={<PrivateRoute user={user}/>}>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/party/new" element={<CreateParty/>}/>
                <Route path="/party/:id" element={<Party/>}/>
                <Route path="/party/edit/:id" element={<EditParty/>}/>
            </Route>
        </Routes>
    );
};

export default Routing;
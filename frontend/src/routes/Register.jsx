import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loading from "../axios/config"

import "./Register.css"

const Register = ({ user }) => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(-1);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await loading.post("/user", userDetails);
            localStorage.setItem("token", JSON.stringify(data));
            navigate("/login");
            
        } catch (error) {
            
            if (error.response && error.response.status === 400) {
                setError(error.response.data);
            }
        }
    };
    return (
        <div className="login-card">
            <div className="card-header">
                <div className="reg">Register</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label className="label">Name</label>
                    <input className="input" type='text' name='name' onChange={handleChange} />   
                    
                </div >
                <div className="input-group">
                    <label className="label">Email</label>
                    <input className="input" type='email' name='email' onChange={handleChange} />
                    
                </div>
                <div className="input-group">
                    <label className="label">Password</label>
                    <input className="input" type='password' name='password' onChange={handleChange} />
                    
                </div>
                {error && (
                    <div className='error_container'>
                        <p className='form_error'>{error}</p>
                    </div>
                )}
                <button className="btn" type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axios/config";
import "./Login.css"


const Login = ({ user }) => {
    const [userDetails, setUserDetails] = useState({
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
            const { data } = await instance.post("/auth", userDetails);
            localStorage.setItem("token", JSON.stringify(data));
            window.location = "/profile";
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 400) {
                setError(error.response.data);
            }
        }
    };
    return (
        <div className="login-card">
            <div className="card-header">
                <div className="reg">Login</div>
            </div>
            <form className='signup_form' onSubmit={handleSubmit}>
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
                <button className="btn" type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
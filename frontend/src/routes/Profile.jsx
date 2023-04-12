import React, {useEffect} from 'react'
import instance from "../axios/config"
const Profile = () => {

    useEffect(()=>{
        getUserProfile();
    },[])


    const getUserProfile = async ()=>{
        const response = await instance.get("/user");
        console.log(response)
    }
  return (
    <div>Profile</div>
  )
}

export default Profile
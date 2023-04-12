import React,{useEffect} from 'react'

const Logout = () => {
    useEffect(()=>{
        localStorage.removeItem('token')
        window.location = "/"
    },[])
  return (
    <div>Logout</div>
  )
}

export default Logout
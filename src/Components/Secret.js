import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import authContext from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Secret = () => {

let [message, setMessage] = useState("")
let [name, setName] = useState("")
let [error, setError] = useState("")



 let {token, setToken} = useContext(authContext)

    let navigate = useNavigate()


useEffect(()=>{
      axios.get("http://localhost:5000/api/auth/secret1", {
          headers: {
            Authorization : `Bearer ${token}`
          }
      })
      .then(response => {
            setMessage(response.data.message)
            setName(response.data.data.name)
            setError("")    
            
      })
           
        .catch(err => {
            setError(err.response.data.error)
            setName("")
            setMessage("")
        })
},[])

function implementLogout(){

     axios.delete("http://localhost:5000/api/auth/logout", {
        headers: {
            Authorization : `Bearer ${token}`
          }

     })
     .then(response => {
            setToken("")
            setError("")
            setName("")
            setMessage(response.data.message)
            navigate("/login")
            
     })
        .catch(err => {
            setError(err.response.data.error)
            setName("")
            setMessage("")
        })
    
}


    return(
        <div>
             {
                name && <h1>Hi {name}</h1>
             }
             {
                    message && <h2>{message}</h2>
             }
             {
                    error && <h2>{error}</h2>
             }
             <button onClick={implementLogout}> Logout </button>
        </div>
    )
}

export default Secret;

import {useState, useContext} from "react";

import axios from "axios";

import authContext from "../context/authContext";
import {useNavigate} from "react-router-dom";

const Login = () =>{
   const [user,setUser] = useState({email:"", password:""})
   const [error, setError] = useState("")
   const [success, setSuccess] = useState("")

   const {setToken} = useContext(authContext)

   const {email,password} = user

    const navigate = useNavigate()



    function implementLogin(e){
        e.preventDefault();

        if(!email && !password) {
            return setError("All fields are required")
        }

        axios.post("http://localhost:5000/api/auth/login", {email,password})
        .then(response => {
               setSuccess(response.data.message)
               setToken(response.data.data.token)
               setError("")
               alert("Login Successful")
                navigate("/secret")

        })
        .catch(err =>  {
            setError(err.response.data.error)
            setSuccess("")
        
        })


        
    }


    return(
        <div>
            <form onSubmit={implementLogin}>
                <input type="email" placeholder="Enter email" 
                    onChange={e => setUser({...user, email:e.target.value})}
                />
                <input type="password" placeholder="Enter password" 
                    onChange={e => setUser({...user, password:e.target.value})}
                />
                <button type="submit">Login</button>
            </form>

            {
                error && <span>{error}</span>
             }
             {
                success && <span>{success}</span>
             }
        </div>
    )
}

export default Login;
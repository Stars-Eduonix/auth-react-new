
import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authApi from "../apis/authApis";


const SignUp = () => {

    const [user,setUser] = useState({
        name:"", email:"", password:"", confirmPassword:""
    })
    const {name,email,password, confirmPassword} = user
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    let navigate = useNavigate();

    function implementSignup(e){
         e.preventDefault();

         if(!name || !email && !password && !confirmPassword) {
            setSuccess("")
             return setError("All fields are required")
         }

            if(password !== confirmPassword) {
                setSuccess("")
                return setError("Password do not match")
            }

            // axios.post("http://localhost:5000/api/auth/signup", {name, email,password})

            authApi.post("/signup", {name, email,password})
            .then(response => {
                  console.log(response)
                  console.log(response.data)
                  setSuccess(response.data.message)
                  setError("")
                  alert("You have successfully signed up")
                  navigate("/login")
            })

            .catch(error => {
               console.log(error.response.data.error)
               setError(error.response.data.error)
               
            })
       

    }

    return(
        <div>
             <form onSubmit={implementSignup}>
                    <input type="text" placeholder="Enter name" 
                         onChange={e => setUser({...user, name:e.target.value})}
                    />
                    <input type="email" placeholder="Enter email" 
                          onChange={e => setUser({...user, email:e.target.value})}
                    />
                    <input type="password" placeholder="Enter password" 
                            onChange={e => setUser({...user, password:e.target.value})}
                    />
                    <input type="password" placeholder="Confirm password" 
                            onChange={e => setUser({...user, confirmPassword:e.target.value})}
                    />
                    <button type="submit">Sign Up</button>
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

export default SignUp;





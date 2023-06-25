import {useState} from "react";
import authContext from "./authContext";

const AuthProvider = (props) =>{
    
    let [token, setToken] = useState("");


    return(
        <authContext.Provider value={{token, setToken}}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthProvider;
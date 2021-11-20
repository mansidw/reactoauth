import React from 'react'
import { useGoogleAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom"
import '../assets/css/login.css'
import '../assets/css/tailwind.css'



const Logout = () => {
    const navigate = useNavigate()
    const { signOut } = useGoogleAuth();
    return (
        <div className='App'>
            <button
                className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button" onClick={signOut}
            >
                <img
                alt="..."
                className="w-5 mr-1"
                src={require("../assets/img/google.svg").default}
                />          
            </button> 
        </div>
    )
}

export default Logout

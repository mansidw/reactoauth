import React from 'react'
import {Link} from 'react-router-dom'
import { useGoogleAuth } from './contexts/AuthContext';


const Landing = () => {
    const { isSignedIn } = useGoogleAuth();
    return (
        <div>
            <h1>landing page</h1>
            {isSignedIn && <><p>We are logged in!</p> <Link to="/home">Home</Link></>}
        </div>
    )
}

export default Landing

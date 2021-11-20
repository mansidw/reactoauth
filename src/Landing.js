import React from 'react'
import { useGoogleAuth } from './contexts/AuthContext';


const Landing = () => {
    const { isSignedIn } = useGoogleAuth();
    return (
        <div>
            <h1>landing page</h1>
            {isSignedIn && <p>We are logged in!</p>}
        </div>
    )
}

export default Landing

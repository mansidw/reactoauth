//the react router dom version 6

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useGoogleAuth } from "./contexts/AuthContext"


// const PrivateRoute = () => {
//     const { isSignedIn } = useGoogleAuth() // determine if authorized, from context or however you're doing it
//     alert(isSignedIn)
//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return isSignedIn ? <Outlet/> : <Navigate to="/login"/>;
// }
//  export default PrivateRoute;

//the react router dom version purana
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useGoogleAuth } from "./contexts/AuthContext";

export default function PrivateRoute({component: Component, ...rest}) {

    const { isSignedIn } = useGoogleAuth();
    console.log(isSignedIn)

    return (
        <Route {...rest}
        render={props => {
            return isSignedIn ? <Component {...props} /> : <Redirect to="/login" />
        }}
        ></Route>
            
    );
};

// export default PrivateRoute;
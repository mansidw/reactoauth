//naya react router dom
// import React,{Fragment} from "react"
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Landing from './Landing'
// import Login from './SignGoogle/Login'
// import Logout from "./SignGoogle/Logout"
// import PrivateRoute from './PrivateRoute'
// import { GoogleAuthProvider } from './contexts/AuthContext'


// function App() {
//   return (
//     <Router>
//       <GoogleAuthProvider>
//       <Fragment>
//       <Routes>
//         <Route exact path="/logout" element={<Logout/>} />
//         {/* <Route exact path="/" element={<Landing/>} /> */}
//         <Route exact path="/login" element={<Login/>} />
//         <Route exact path='/' element={<PrivateRoute/>}>
//             <Route exact path='/' element={<Landing/>}/>
//         </Route>
//         {/* <Route exact path='/logout' element={<PrivateRoute/>}>
//             <Route exact path='/logout' element={<Logout/>}/>
//         </Route> */}
//         {/* <PrivateRoute exact path="/logout" element={<Logout/>} /> */}
//         {/* <PrivateRoute exact path="/" element={<Landing/>} /> */}
//         {/* <Route path="*" element={<NotFound/>}/> */}
//       </Routes>
//       </Fragment>
//       </GoogleAuthProvider>
//     </Router>
//   );
// }

// export default App;

//purana react router dom
import React from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from './Landing'
import Login from './SignGoogle/Login'
import Logout from "./SignGoogle/Logout"
import Home from './SignGoogle/Home'
import PrivateRoute from './PrivateRoute'
import { GoogleAuthProvider } from './contexts/AuthContext'


function App() {
  return (
    <Router>
      <GoogleAuthProvider>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
      </GoogleAuthProvider>
    </Router>
  );
}

export default App;
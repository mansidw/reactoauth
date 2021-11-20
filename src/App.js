import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './Landing'
import Login from './SignGoogle/Login'
import Logout from "./SignGoogle/Logout"



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/logout" element={<Logout/>} />
        <Route exact path="/" element={<Landing/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;

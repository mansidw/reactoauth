import React from 'react';
import '../assets/css/login.css'
import '../assets/css/tailwind.css'
import { useHistory } from "react-router-dom"
import { useGoogleAuth } from '../contexts/AuthContext';

const Login = () => {
  const history = useHistory()
  const { signIn } = useGoogleAuth();


  async function onSignIn(){
    await signIn()
    history.push('/')
  }

  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
  );
  
  
  const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Log in"/>
   </div>
  );
  
  const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
  );
  
  const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
  );
  
  const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Google />
    </div>
  </div>
  );
  
  
  const Google = props => (
      <button
        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
        type="button" onClick={onSignIn}
      >
        <img
        alt="..."
        className="w-5 mr-1"
        src={require("../assets/img/google.svg").default}
        />          
    </button>  
  );
  
  return (
    <div id="loginform">
      <FormHeader title="Login" />
      <Form />
      <OtherMethods/>
    </div>
  )
}

export default Login




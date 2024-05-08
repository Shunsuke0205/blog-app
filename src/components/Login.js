import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        localStorage.setItem("isAuthenticated", true);
        setIsAuthenticated(true);
        navigate("/");
      })

  }
  return (
    <div>
      <p>Login to start</p>
      <button onClick={loginWithGoogle}>Login with Goolge</button>
      Login
    </div>
  )
}

export default Login
import React from 'react';
import {useNavigate} from "react-router-dom";

const Home:React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1> this is home</h1>
      <p>Welcome to simple sign up, singn in and survey project using React, TypeScript, SASS, HTML. <br/>
      Sign in to start the survery if you are a returning user. <br/>
      Sign up if it's your first time here.
      </p>
      <button onClick={()=>{navigate("/sign-up")}}>Sign Up</button>
      <button onClick={()=>{navigate("/sign-in")}}>Sign In</button>


    </div>
  )
}

export default Home;

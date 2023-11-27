import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Home.scss";

const Home:React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h1> Welcome,</h1>
      <p> This is a simple sign up, singn in and survey project using React, TypeScript, SASS, HTML</p> 
      <p><button onClick={()=>{navigate("/sign-in")}}>Sign In</button> to start the survery if you are a returning user.</p>
      <p><button onClick={()=>{navigate("/sign-up")}}>Sign Up</button> if it's your first time here.</p>
      
      


    </div>
  )
}

export default Home;

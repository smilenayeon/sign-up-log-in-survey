import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Header.scss";

const Header:React.FC= () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="header-title" onClick={()=>{navigate("/")}}>Simple Survey</h1>

    </div>
  )
}

export default Header;
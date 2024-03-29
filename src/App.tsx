import React from 'react';
import './App.scss';
import Header from './components/layout/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import SignUp from './components/pages/sign-up/SignUp';
import SignIn from './components/pages/sign-in/SignIn';
import Footer from './components/layout/footer/Footer';
import {AuthenticationProvider} from "./components/utilities/authentication/AuthenticationContext";


const App:React.FC = ()=>{
  return (
    <div className="App">
      
      <BrowserRouter>
      <AuthenticationProvider>
      <Header/>
      <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="sign-up" element={<SignUp/>} />
      <Route path="sign-in" element={<SignIn/>} />
      </Routes>
       <Footer/>
       </AuthenticationProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

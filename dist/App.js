import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.scss';
import Header from './components/layout/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import SignUp from './components/pages/sign-up/SignUp';
import SignIn from './components/pages/sign-in/SignIn';
import Footer from './components/layout/footer/Footer';
import { AuthenticationProvider } from "./components/utilities/authentication/AuthenticationContext";
const App = () => {
    return (_jsx("div", { className: "App", children: _jsx(BrowserRouter, { children: _jsxs(AuthenticationProvider, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "sign-up", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "sign-in", element: _jsx(SignIn, {}) })] }), _jsx(Footer, {})] }) }) }));
};
export default App;

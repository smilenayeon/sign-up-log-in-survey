import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
const Home = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: "home-page", children: [_jsx("h1", { children: " Welcome," }), _jsx("p", { children: " This is a simple sign up, singn in and survey project using React, TypeScript, SASS, HTML" }), _jsxs("p", { children: [_jsx("button", { onClick: () => { navigate("/sign-in"); }, children: "Sign In" }), " to start the survery if you are a returning user."] }), _jsxs("p", { children: [_jsx("button", { onClick: () => { navigate("/sign-up"); }, children: "Sign Up" }), " if it's your first time here."] })] }));
};
export default Home;

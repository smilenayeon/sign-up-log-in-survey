import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { children: [_jsx("h1", { children: " this is home" }), _jsxs("p", { children: ["Welcome to simple sign up, singn in and survey project using React, TypeScript, SASS, HTML. ", _jsx("br", {}), "Sign in to start the survery if you are a returning user. ", _jsx("br", {}), "Sign up if it's your first time here."] }), _jsx("button", { onClick: () => { navigate("/sign-up"); }, children: "Sign Up" }), _jsx("button", { onClick: () => { navigate("/sign-in"); }, children: "Sign In" })] }));
};
export default Home;

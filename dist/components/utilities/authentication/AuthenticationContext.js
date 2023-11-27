import { jsx as _jsx } from "react/jsx-runtime";
// AuthenticationContext.tsx
import { createContext, useContext, useState } from 'react';
const UserInfoContext = createContext(undefined);
const useAuthProvider = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginStatus, setLoginStatus] = useState(false);
    const registerUser = (newEmail, newPassword) => {
        setEmail(newEmail);
        setPassword(newPassword);
    };
    const loginUser = (inputEmail, inputPassword) => {
        if (inputEmail === email && inputPassword === password) {
            setLoginStatus(true);
            alert(`Welcome ${email}`);
        }
        else {
            setLoginStatus(false);
            alert("Login failed. Incorrect email or password.");
        }
    };
    return {
        email,
        password,
        loginStatus,
        registerUser,
        loginUser,
    };
};
export const AuthenticationProvider = ({ children }) => {
    const authState = useAuthProvider();
    return (_jsx(UserInfoContext.Provider, { value: authState, children: children }));
};
export const useAuth = () => {
    const context = useContext(UserInfoContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthenticationProvider');
    }
    return context;
};
export default AuthenticationProvider;

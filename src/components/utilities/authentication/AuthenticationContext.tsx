// AuthenticationContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { UserInfoContextData, AuthenticationProviderProps } from './AuthTypes';

const UserInfoContext = createContext<UserInfoContextData | undefined>(undefined);

const useAuthProvider = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [loginStatus, setLoginStatus] = useState(false);

  const registerUser = (newEmail: string, newPassword: string) => {
    setEmail(newEmail);
    setPassword(newPassword);
  };

  const loginUser = (inputEmail: string, inputPassword: string) => {
    if (inputEmail === email && inputPassword === password) {
      setLoginStatus(true);
      alert(`Welcome ${email}`);
    } else {
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

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children }) => {
  const authState = useAuthProvider();

  return (
    <UserInfoContext.Provider value={authState}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthenticationProvider');
  }
  return context;
};

export default AuthenticationProvider;


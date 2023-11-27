// AuthTypes.ts
export type UserInfoContextData = {
    email: string | undefined;
    password: string | undefined;
    loginStatus: boolean;
    registerUser: (email: string, password: string) => void;
    loginUser: (email: string, password: string) => void;
  };
  
  export type AuthenticationProviderProps = {
    children: React.ReactNode;
  };
  


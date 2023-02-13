import { createContext, FC, useContext, useState } from 'react';

export const AuthContext = createContext({} as ValueProp);

interface AuthProviderProps {
  children: React.ReactNode;
}

interface ValueProp {
  user: string | null;
  logIn: (newUser: string, callback: () => void) => void;
  logOut: (callback: () => void) => void;
}

export const useAuth = () => useContext<ValueProp>(AuthContext);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const logIn = (newUser: string, callback: () => void) => {
    setUser(newUser);
    callback();
  };

  const logOut = (callback: () => void) => {
    setUser(null);
    callback();
  };

  const value = {
    user,
    logIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

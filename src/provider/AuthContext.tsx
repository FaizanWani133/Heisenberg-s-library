import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import supabase from "../supabase";

// Define the type for the AuthContext
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Define the User type
interface User {
  [key:string]:string
}

// Create a default context value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);


  const login = async (email: string, password: string) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data) {
      setUser(data.user);
      console.log(data);
      return;
    }
    throw error;
  };

  const logout = async () => {
    let { error } = await supabase.auth.signOut();
    setUser(null);
    if (error) {
      throw error;
    }
    // Add logic for clearing persisted state
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
        if(session){
            setUser(session.user)
        }else{
            setUser(null)
        }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
        if(session){
            setUser(session.user)
        }else{
            setUser(null)
        }

    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

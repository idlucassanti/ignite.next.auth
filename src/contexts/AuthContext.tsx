import { createContext, ReactNode } from "react";
import { api } from "../services/api";

type ICredencial = {
  email: string;
  password: string;
}

type IAuthContext = {
  autenticar(credenciais: ICredencial): Promise<void>;
  isAuthenticated: boolean;
}

type IAuthProvider = {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const isAuthenticated = false;

  async function autenticar({ email, password }: ICredencial) {
    try {
      const response = await api.post('autenticacao', {
        email,
        password
      });
  
      console.log(response.data);
      
    } catch (error) {
      console.log(error)
    }
  }
  
  return(
    <AuthContext.Provider value={{ autenticar, isAuthenticated}}>
      {children}
    </AuthContext.Provider>  
  );
}
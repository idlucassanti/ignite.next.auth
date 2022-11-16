import { createContext, ReactNode } from "react";

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
    console.log('Autenticar')
    console.log({email, password});
  }
  
  return(
    <AuthContext.Provider value={{ autenticar, isAuthenticated}}>
      {children}
    </AuthContext.Provider>  
  );
}
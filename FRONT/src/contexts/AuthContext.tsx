import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api, { Endpoints, Tokens } from "../services/api";

interface IAuthProviderProps {
  children: React.ReactNode;
}

interface IAuthContextData {
  token: string;
  signIn: (signInData: ISignInData) => Promise<Boolean>;
  clearToken: () => void;
}

interface ISignInData {
  login: string;
  senha: string;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem(Tokens.BEARER);

    if (token) return token;

    return "";
  });

  const clearToken = () => {
    setToken("");
  };
  const signIn = useCallback(
    async ({ login, senha }: ISignInData): Promise<Boolean> => {
      const { data, status } = await api.post(Endpoints.LOGIN, {
        login,
        senha,
      });

      if (status > 400) {
        return false;
      }

      localStorage.setItem(Tokens.BEARER, data);

      setToken(data);

      return true;
    },
    []
  );

  return (
    <AuthContext.Provider value={{ token, signIn, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

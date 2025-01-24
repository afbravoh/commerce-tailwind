import { createContext, ReactNode } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { User } from "../../types/user.type";
import { useNavigate } from "react-router-dom";

interface LoginContextProps {
  user: User;
  isLogged: boolean;

  handleLogin(credentials: User): void;

  handleRegister(credentials: User): void;

  handleLogout(): void;
}

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext<LoginContextProps>(
  {} as LoginContextProps,
);

const LOGIN_KEY = "logged";
const USERS_KEY = "users";
const USER_KEY = "userLogged";

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [isLogged, setIsLogged] = useLocalStorage<boolean>(LOGIN_KEY, false);
  const [users, setUsers] = useLocalStorage<User[]>(USERS_KEY, []);
  const [user, setUser] = useLocalStorage<User>(USER_KEY, null!);

  const navigate = useNavigate();

  const handleLogin = (credentials: User) => {
    if (!credentials.pwd || !credentials.username) return;
    const user = users.find(
      (saved) =>
        saved.pwd === credentials.pwd &&
        saved.username === credentials.username,
    );
    if (!user) {
      console.log("invalid credentials");
      return;
    }
    setUser(user);
    setIsLogged(true);
    navigate("/");
  };

  const handleLogout = () => {
    setUser(null!);
    setIsLogged(false);
  };

  const handleRegister = (credentials: User) => {
    if (!credentials.pwd || !credentials.username) return;
    setUsers([...users, credentials]);
    navigate("/login");
  };

  return (
    <LoginContext.Provider
      value={{
        isLogged,
        user,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

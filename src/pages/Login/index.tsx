import { useState } from "react";
import { User } from "../../types/user.type";
import { useLoginContext } from "../../hooks/useLoginContext.ts";

const Login = () => {
  const [credentials, setCredentials] = useState<User>({
    username: "",
    pwd: "",
  });

  const { handleLogin } = useLoginContext();

  return (
    <>
      <div className="flex w-80 items-center relative justify-center mb-4">
        <h1 className="font-medium text-xl">Login</h1>
      </div>
      <form id="login-form" className="flex flex-col items-center">
        <input
          id="username"
          name="username"
          required
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          type="text"
          value={credentials.username}
          placeholder="Username"
          onChange={(event) =>
            setCredentials((prev) => ({
              ...prev,
              username: event.target.value,
            }))
          }
        />
        <input
          id="pwd"
          name="pwd"
          required
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          type="text"
          value={credentials.pwd}
          placeholder="Pwd"
          onChange={(event) =>
            setCredentials((prev) => ({ ...prev, pwd: event.target.value }))
          }
        />
        <button
          type="submit"
          form="login-form"
          className="w-60 bg-black py-3 text-white rounded-lg"
          onClick={(e) => {
            e.preventDefault();
            handleLogin(credentials);
          }}
        >
          Login
        </button>
        <a className="underline hover:font-bold" href="/signUp">
          Sign Up
        </a>
      </form>
    </>
  );
};

export { Login };

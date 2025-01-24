import { useState } from "react";
import { User } from "../../types/user.type.ts";
import { useLoginContext } from "../../hooks/useLoginContext";

const SignUp = () => {
  const [credentials, setCredentials] = useState<User>({
    username: "",
    pwd: "",
  });

  const { handleRegister } = useLoginContext();

  return (
    <>
      <div className="flex w-80 items-center relative justify-center mb-4">
        <h1 className="font-medium text-xl">Sign Up</h1>
      </div>
      <form id="signUp-form" className="flex flex-col items-center">
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
          form="signUp-form"
          className="w-60 bg-black py-3 text-white rounded-lg"
          onClick={() => handleRegister(credentials)}
        >
          Sign Up
        </button>
        <a className="underline hover:font-bold" href="/login">
          Login
        </a>
      </form>
    </>
  );
};

export { SignUp };

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authSlice from "../../store/auth-slice";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    if (email && password) {
      dispatch(authSlice.actions.login({ email, password }));
      setError(null);
    } else {
      setError("please fill all inputs");
    }
  };
  return (
    <>
      <h1 className="text-center text-2xl my-4">Login</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-full px-5 sm:w-full mx-auto text-center gap-4"
      >
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">email</label>
          <input
            placeholder="email"
            className="px-2 py-1"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="password">password</label>
          <input
            className="px-2 py-1"
            type="password"
            placeholder="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error ? <p className="text-red-500">{error}</p> : null}
        <button
          className="bg-violet-600 py-2 rounded-md text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default AuthForm;

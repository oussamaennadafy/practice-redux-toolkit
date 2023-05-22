import { useState } from "react";
import { useDispatch } from "react-redux";
import authSlice from "../../store/auth-slice";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const fetchUser = async (email, password) => {
    setLoader(true);
    fetch(`http://localhost:8000/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          dispatch(
            authSlice.actions.login({
              id: data.body.user._id,
              firstName: data.body.user.firstName,
              lastName: data.body.user.lastName,
            })
          );
        } else {
          throw new Error(data.message);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoader(false));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) return setError("please fill all inputs");
    setError(null);
    fetchUser(email, password);
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
          {loader ? "loading..." : "login"}
        </button>
      </form>
    </>
  );
}

export default AuthForm;

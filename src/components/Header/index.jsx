import React from "react";
import { useSelector, useDispatch } from "react-redux";
import authSlice from "./../../store/auth-slice";

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);

  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
  };

  const handleLogin = () => {
    // dispatch(authSlice.actions.logout());
  };

  const navbar = auth.isLoggedIn ? (
    <nav>
      <ul className="flex items-center justify-between gap-2">
        <li>
          <button className="px-4 py-2 rounded-md transition-all hover:bg-violet-600">
            My products
          </button>
        </li>
        <li>
          <button className="px-4 py-2 rounded-md transition-all hover:bg-violet-600">
            My sales
          </button>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-md transition-all bg-amber-500"
          >
            log out
          </button>
        </li>
      </ul>
    </nav>
  ) : (
    <button
      onClick={handleLogin}
      className="px-4 py-2 rounded-md transition-all bg-amber-500"
    >
      log in
    </button>
  );

  return (
    <header className="w-screen px-10 py-7 bg-violet-500 flex items-center justify-between">
      <a className="text-xl lg:text-2xl text-white" href="#">
        redux toolkit practice
      </a>
      {navbar}
    </header>
  );
}

export default Header;

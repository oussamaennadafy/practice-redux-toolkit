import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { email, password } = action.payload;
      if ((email, password))
        return {
          isLoggedIn: true,
          user: {
            email,
            password,
          },
        };
      else return initialState;
    },
    logout() {
      return initialState;
    },
  },
});

export default authSlice;

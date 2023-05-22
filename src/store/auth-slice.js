import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(_, action)
    {
      const { id, firstName, lastName } = action.payload;
      if (id, firstName, lastName)
        return {
          isLoggedIn: true,
          user: {
            id, firstName, lastName
          },
        };
      else return initialState;
    },
    logout()
    {
      return initialState;
    },
  },
});

export default authSlice;

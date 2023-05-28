import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: "",
};

export const fetchUser = createAsyncThunk(
  "auth/login",
  ({ email, password }, something) => {
    return fetch(`http://localhost:8000/api/v1/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "success") throw new Error(data.message);
        return data.body;
      });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login(state, action) {
    //   const { id, firstName, lastName } = action.payload;
    //   console.log(action);
    //   // if ((id, firstName, lastName))
    //   //   return {
    //   //     ...state,
    //   //     isLoggedIn: true,
    //   //     user: {
    //   //       id,
    //   //       firstName,
    //   //       lastName,
    //   //     },
    //   //   };
    //   // else return initialState;
    // },
    logout() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice;

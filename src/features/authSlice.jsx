import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate: false,
  user: {},
};

// check localstorage for existing user authenticate
const savedUser = localStorage.getItem("user");
const savedAuth = localStorage.getItem("isAuthenticate");

const initialStateFromStorage =
  savedAuth && savedUser
    ? {
        isAuthenticate: JSON.parse(savedAuth),
        user: JSON.parse(savedUser),
      }
    : initialState;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialStateFromStorage,
  reducers: {
    login: (state, action) => {
      state.isAuthenticate = true;
      state.user = action.payload;

      //   save user data and auth status to LocalStorage
      localStorage.setItem("isAuthenticate", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticate = false;
      state.user = null;

      // Clear user data and auth status from localStorage
      localStorage.removeItem("isAuthenticate");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

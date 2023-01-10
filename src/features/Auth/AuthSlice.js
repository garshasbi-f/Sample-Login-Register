import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogin: false,
  errorMessage: null,
  isLoading: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.isLogin = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLogin = false;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setIsloadin: (state) => {
      state.isLoading = !state.isLoading
    }
  },
});

export const { addUser, logout, setErrorMessage , setIsloadin } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsLogin = (state) => state.auth.isLogin;
export const selectErrorMessage = (state) => state.auth.errorMessage;
export const selectIsLoading = (state) => state.auth.isLoading;


export default authSlice.reducer;

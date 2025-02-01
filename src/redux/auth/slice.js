import { createSlice } from "@reduxjs/toolkit"
import { registerThunk, loginThunk, logoutThunk } from "./operations";

const initialState = {
  user: {
    name: null, 
    email: null,
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};





const authSlice = createSlice ({
  name: 'auth',
  initialState,
  extraReducers: builder =>
  {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      })
     .addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
     })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
    })
    
  }
})

export const authReducer = authSlice.reducer
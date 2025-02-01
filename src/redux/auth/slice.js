import { createSlice } from "@reduxjs/toolkit"
import { regisrerThunk, loginThunk } from "./operations";

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
      .addCase(regisrerThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      })
     .addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      })
    
  }
})

export const authReducer = authSlice.reducer
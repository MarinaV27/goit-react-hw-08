import { createSlice } from "@reduxjs/toolkit"
import { registerThunk, loginThunk, logoutThunk, refreshUserThunk } from "./operations";

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
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
    .addCase(refreshUserThunk.pending, (state) => {
        state.isRefreshing = true;
    })
    .addCase(refreshUserThunk.rejected, (state) => {
        state.isRefreshing = false;
    })
    
  }
})

export const authReducer = authSlice.reducer
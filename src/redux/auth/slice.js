import { createSlice } from "@reduxjs/toolkit"

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
  initialState
})

export const authReducer = authSlice.reducer
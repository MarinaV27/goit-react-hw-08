import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"




axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('auth/register', credentials)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('users/login', credentials)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logoutThunk = createAsyncThunk('auth/logout', async (__dirname, thunkAPI) => {
    const token = thunkAPI.getState().auth.token
     try {
         const { data } = await axios.post('users/logout',
             {}, {
             headers: {
                 Authorization: `Bearer ${token}`
             }
         });
         return data;
     } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
     }
 })
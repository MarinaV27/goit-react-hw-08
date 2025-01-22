import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



axios.defaults.baseURL = 'https://67913471af8442fd73796799.mockapi.io/';


export const fetchData = createAsyncThunk('contacts/fetchData', async () => {
    try {
        const { data } = await axios.get('/cotacts');
        return data
    } catch (error) {}
})
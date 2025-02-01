import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {goitApi} from '../auth/operations'



axios.defaults.baseURL = 'https://67913471af8442fd73796799.mockapi.io/';


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const { data } = await goitApi.get('contacts');
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await goitApi.delete(`contacts/${id}`);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
    try {
        const { data } = await goitApi.post('contacts', newContact);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}) 
import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts, deleteContact, addContact } from "./operations.js"
import { logoutThunk } from "../auth/operations.js"
//import { selectNaneFilter } from "./operations.js"



const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false;
            })
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload.id)
            })
            .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload)
            })
            .addCase(logoutThunk.fulfilled, state => {
                state.items = [];
                state.loading = false;
                state.error = null;
        })

    }
})


export default contactsSlice.reducer
//export const { addContact} = contactsSlice.actions

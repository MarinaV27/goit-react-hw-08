import { createSlice } from "@reduxjs/toolkit"
import { fetchData } from "./contactsOps"
    


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },

    extraReducers: builder => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.items = action.payload
                state.loading = false;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false;
            })
            .addCase(fetchData.pending, (state) => {
                state.loading = true
                state.error = false
        })

    }
})


export default contactsSlice.reducer
export const { addContact, deleteContact } = contactsSlice.actions
export const selectContacts = state => state.contacts.items
export const selectLoading = state => state.contacts.loading
export const selectError = state => state.contacts.error



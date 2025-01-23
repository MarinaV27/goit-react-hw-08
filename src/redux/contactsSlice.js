import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts } from "./contactsOps"
import { deleteContact } from "./contactsOps"  
import { addContact } from "./contactsOps"  


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

    }
})


export default contactsSlice.reducer
//export const { addContact} = contactsSlice.actions
export const selectContacts = state => state.contacts.items
export const selectLoading = state => state.contacts.loading
export const selectError = state => state.contacts.error



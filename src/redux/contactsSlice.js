import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers:{}
})


export default contactsSlice.reducer
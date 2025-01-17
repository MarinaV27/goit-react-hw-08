import { configureStore } from "@reduxjs/toolkit";
import contactReduser from './contactsSlice'
import filtersReduser from './filtersSlice'

export const store = configureStore({
    reducer: {
        contacts: contactReduser,
        filters: filtersReduser,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import  contactReduser from './contactsSlice.js'
import  filtersReduser from './filtersSlice.js'

export const store = configureStore({
    reducer: {
        contacts: contactReduser,
        filters: filtersReduser
    }

})





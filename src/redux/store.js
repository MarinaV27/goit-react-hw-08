import { configureStore } from "@reduxjs/toolkit";
import  contactReduser from './contacts/slice.js'
import  filtersReduser from './filters/slice.js'

export const store = configureStore({
    reducer: {
        contacts: contactReduser,
        filters: filtersReduser
    }

})





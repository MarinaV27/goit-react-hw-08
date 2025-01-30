import { configureStore } from "@reduxjs/toolkit";
import  contactsReduser from './contacts/slice.js'
import  filtersReducer from './filters/slice.js'
import { authReducer } from "./auth/slice.js";

export const store = configureStore({
    reducer: {
        contacts: contactsReduser,
        auth: authReducer,
        filters: filtersReducer,
    }

})





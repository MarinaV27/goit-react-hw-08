import { configureStore } from "@reduxjs/toolkit";
import  contactsReduser from './contacts/slice.js'
import  filtersReducer from './filters/slice.js'
import { authReducer } from "./auth/slice.js";


import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'auth',
  whitelist: ['token'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
    reducer: {
        contacts: contactsReduser,
        auth: persistedReducer,
        filters: filtersReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store);




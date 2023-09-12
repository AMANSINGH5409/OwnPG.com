import { configureStore } from '@reduxjs/toolkit'
import userReducers from "./state/userSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducers);

export const store = configureStore({
    // reducer : {
    //     userRed : userReducers,
    // }    
    reducer: { userRed: persistedReducer },
})


export const persistor = persistStore(store)
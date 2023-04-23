import { configureStore } from '@reduxjs/toolkit'
import userReducers from "./state/userSlice"

export const store = configureStore({
    reducer : {
        userRed : userReducers,
    }
})

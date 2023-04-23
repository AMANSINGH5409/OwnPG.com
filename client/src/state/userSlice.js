import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    mode: "light",
    token: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            // localStorage.setItem('userProfile', JSON.stringify(action.payload.user));
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
            // localStorage.clear();
        },

    }
})

export const { setMode, setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
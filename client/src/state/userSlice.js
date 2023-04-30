import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    mode: "light",
    token: null,
    message : ""
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
            localStorage.setItem('userProfile', JSON.stringify(action.payload.user));
            localStorage.setItem('token', JSON.stringify(action.payload.token));
        },
        // this is in place of redux-persist because everytime page refreshes store resets to initial state so use this in useEffect of every page to set the store again
        setLoggedInUser: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token;
        },
        setSignup: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            localStorage.setItem('userProfile', JSON.stringify(action.payload.user));
            localStorage.setItem('token', JSON.stringify(action.payload.token));
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.clear();
        },
        setMessage: (state, action) => {
            state.message = action.payload.msg ;
        }
    }
})

export const { setMode, setLogin, setLogout, setLoggedInUser, setSignup, setMessage } = userSlice.actions;

export default userSlice.reducer;
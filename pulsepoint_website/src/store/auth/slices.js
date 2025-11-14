import {createSlice} from "@reduxjs/toolkit";
import {Register,login, logout} from "./authSlice.js";


const initialAuthState = {
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
}

const authSlice = createSlice({
    name: 'AUTHENTICATION',
    initialState: initialAuthState,
    reducers: {
        Register,
        login,
        logout

    }
})


export const authActions = authSlice.actions;

export default authSlice.reducer;
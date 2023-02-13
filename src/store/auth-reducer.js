import { createSlice } from "@reduxjs/toolkit";

const initialIdToken = localStorage.getItem('idToken');
const initialEmail = localStorage.getItem("email");
const initalAuthState = {
    idToken: initialIdToken,
    email: initialEmail,
    isLogin: !!initialIdToken
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initalAuthState,
    reducers: {
        login(state, action) {
            state.idToken = action.payload.idToken;
            state.email = action.payload.email;
            state.isLogin = action.payload.idToken;
            localStorage.setItem('idToken', state.idToken);
            localStorage.setItem('email', state.email);
        }
    }
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
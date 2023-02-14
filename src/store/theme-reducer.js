import { createSlice } from "@reduxjs/toolkit";

const initalThemeState = {
    darkTheme: false
};

const themeSlice = createSlice(
    {
        name: 'theme',
        initialState: initalThemeState,
        reducers:{
            onThemeChange(state) {
                console.log('theme');
                state.darkTheme = !state.darkTheme;
                console.log('onthemeChange');
            }
        }
    }
)

export const ThemeAction = themeSlice.actions;

export default themeSlice.reducer;
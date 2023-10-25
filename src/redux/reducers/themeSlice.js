import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'darkTheme',
    initialState: false,
    reducers: {
        switchTheme: (state) => {
            return !state
        }
    },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;

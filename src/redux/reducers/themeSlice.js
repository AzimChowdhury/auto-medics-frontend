import { getFromLocalStorage, parser } from '@/utils/local-storage';
import { createSlice } from '@reduxjs/toolkit';

const savedDarkTheme = getFromLocalStorage('darkTheme');

savedDarkTheme && parser(savedDarkTheme)
// console.log(savedDarkTheme)
const themeSlice = createSlice({
    name: 'darkTheme',
    initialState: savedDarkTheme ? savedDarkTheme : false,
    reducers: {
        switchTheme: (state) => {
            return !state;
        }
    },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;

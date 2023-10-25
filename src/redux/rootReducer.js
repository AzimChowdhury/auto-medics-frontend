import { baseApi } from "./api/baseApi";
import themeReducer from './reducers/themeSlice'


export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  darkTheme: themeReducer,
};

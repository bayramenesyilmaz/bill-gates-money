import { configureStore } from "@reduxjs/toolkit";
import productsSliceReducer from "./productsSlice";

export const store = configureStore({
    reducer: {
        products: productsSliceReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/productsSlice";

export default configureStore({
    reducer: {
        products: productsSlice
    }
})
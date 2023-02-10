import { createSlice } from '@reduxjs/toolkit'
const initialState = [];

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        ADD: (state, action) => {
            return [...state, action.payload]
        },
        DELETE: (state, action) => {
            return state.filter(p => p.id !== action.payload)
        }
    }
});

export const { ADD, DELETE } = productsSlice.actions;

export default productsSlice.reducer
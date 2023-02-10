import React, { createContext, useReducer } from 'react';
import { productsReducer } from '@/reducers';

export const store = createContext({
    products: [],
    dispatchProducts: () => { }
});


export const ContextsProvider = ({ children }) => {
    const [products, dispatchProducts] = useReducer(productsReducer, []);

    return (
        <store.Provider value={{
            products, dispatchProducts
        }}>
            {children}
        </store.Provider>
    )
}
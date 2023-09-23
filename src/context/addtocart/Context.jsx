import React, { createContext, useReducer } from 'react'
import { reducer } from './Reducer'


const initialData = {
    cart: [
        "sumaim"
    ]
}

export const CartContext = createContext("Initial Value");


export default function CartContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialData)

    return (
        <div>
            <CartContext.Provider value={{ state, dispatch }}>
                {children}
            </CartContext.Provider>
        </div>
    )
};

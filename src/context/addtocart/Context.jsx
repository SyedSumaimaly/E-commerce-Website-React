import React, { createContext, useReducer } from 'react'
import { reducer } from './Reducer'


const initialData = [
    "sumaim"
]

export const CartContext = createContext("Initial Value");


export default function ContextProvider({children}) {
    
    const [state, dispatch] = useReducer(reducer, initialData)

  return (
    <div>
      <CartContext.Provider value={{state, dispatch}}>
        {children}
      </CartContext.Provider>
    </div>
  )
};

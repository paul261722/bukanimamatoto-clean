import React, { createContext, useReducer } from 'react';


// Initial state
const initialState = {
  cartItems: [],
  totalPrice: 0,
};

// Reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.product_cost * action.payload.quantity,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
        totalPrice: 0,
      };
    default:
      return state;
  }
}

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      cartItems: state.cartItems,
      totalPrice: state.totalPrice,
      addToCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
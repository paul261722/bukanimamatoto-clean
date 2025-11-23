import React from 'react';
import { useCart } from '../context/CartProvider'; // Fixed path

const CartIcon = () => {
  const { itemCount } = useCart();

  return (
    <div className="position-relative">
      <i className="bi bi-cart fs-4 text-white"></i>
      {itemCount > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
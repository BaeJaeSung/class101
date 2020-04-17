import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './ShoppingList.css';
import CartItem from './CartItem';

const CartItemList = ({cartItemResult}) => {
// reform array from n to 5 * k
  return(
    <div className="ShoppingList">

      {cartItemResult.map(cartItem => (
        <CartItem cartItem={cartItem} />
      ))}


    </div>
  );
};

export default CartItemList;

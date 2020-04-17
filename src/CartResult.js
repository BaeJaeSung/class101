import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import './ShoppingList.css';


const CartResult = ({hap}) => {


  return(
    <div className="CartResult">
      합계 : {hap}

    </div>
  )
};

export default CartResult;

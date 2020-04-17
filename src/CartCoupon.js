import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import './ShoppingList.css';
import CartItem from './CartItem';


const CartCoupon = ({Coupon}) => {
  return(
    <div className="Coupon">
      쿠폰명 : {Coupon.title} <br/>
      {Coupon.type=='rate'? "할인율 : " + Coupon.discountRate : "할인액 : " + Coupon.discountAmount}
    </div>
  );
}
export default CartCoupon;

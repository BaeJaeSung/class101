import React from 'react';
import './CartResult.css';

const CartResult = ({hap, prevHap, minusAmount}) => {
  return(
    <div className="CartResult">
      {hap>0? "결제 금액 : " + prevHap + " - " + minusAmount + " = " + hap : "상품을 선택해 주세요."}
    </div>
  )
};

export default CartResult;

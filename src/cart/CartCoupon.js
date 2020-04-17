import React, {useState} from 'react';
import './CartCoupon.css';
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';


const CartCoupon = ({coupon, onCouponChange}) => {
  const [applied, setApplied] = useState(false);
  return(
    <div className="Coupon">
      <div className="CouponContents">
        쿠폰명 : {coupon.title} <br/>
        {coupon.type=='rate'? "할인율 : " + coupon.discountRate : "할인액 : " + coupon.discountAmount}
        <div onClick={() => {onCouponChange(coupon); setApplied(!applied)}}>
          {applied? <MdCheckBox size="30" /> : <MdCheckBoxOutlineBlank size="30" />}
        </div>
      </div>
    </div>
  );
}
export default CartCoupon;

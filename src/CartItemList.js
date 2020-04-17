import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import './ShoppingList.css';
import CartItem from './CartItem';
import CartCoupon from './CartCoupon';
import CartResult from './CartResult';

const CartItemList = ({cartItemResult, onChecked, itemChecked}) => {
  const [hap, setHap] = useState(0);

  const couponExcluded = ['CNCwXwHP7FUip83z5VEH']
  // coupons.js
  const coupons = [
    {
      type: 'rate',
      title: '10% 할인 쿠폰',
      discountRate: 10,
    },
    {
      type: 'amount',
      title: '10,000원 할인 쿠폰',
      discountAmount: 10000,
    }
  ];

  const [idAndAmount, setIdAndAmount] = useState([]);

  cartItemResult.map(item => {
    if(!idAndAmount.find(elm => elm.id == item.id))
      setIdAndAmount(idAndAmount.concat({
        id : item.id,
        price : item.price,
        Amount : 1
      }))
  })

  console.log("here");
  console.log(idAndAmount);

  const onPlus = useCallback(
    id => {
      const arrIndex = idAndAmount.findIndex(item => item.id==id);
      const newIdAndAmount = idAndAmount;
      newIdAndAmount[arrIndex].Amount += 1;
      setIdAndAmount(newIdAndAmount);
      setHap(0);
    }
  )
  const onMinus = useCallback(
    id => {
      const arrIndex = idAndAmount.findIndex(item => item.id==id);
      const newIdAndAmount = idAndAmount;
      newIdAndAmount[arrIndex].Amount -= 1;
      if(newIdAndAmount[arrIndex].Amount < 1)
        newIdAndAmount[arrIndex].Amount = 1;
      setIdAndAmount(newIdAndAmount);
      setHap(0);
    }
  )
  console.log(cartItemResult);

  var newHap = 0
  idAndAmount.map(item => {
    if(itemChecked.find(itemId => itemId == item.id)){
      console.log(item.price + " : " + item.Amount);
      newHap += parseInt(item.price) * parseInt(item.Amount);
    }
  })

  var minusAmount = 0;
  coupons.map(coupon => {
    console.log("happy coupon")
      if(coupon.type == "amount"){
        minusAmount += coupon.discountAmount;
      } else if(coupon.type == "rate"){
        idAndAmount.map(item => {
          console.log("happy coupon2")
          console.log(item)
          console.log(itemChecked)
          if(itemChecked.find(itemId => itemId == item.id)){
            console.log("happy coupon2")
            console.log(item.price + " : " + item.Amount);
            if(!couponExcluded.find(itemId => itemId == item.id)){
              minusAmount += parseInt(item.price) * parseInt(item.Amount) * coupon.discountRate / 100;
            }
          }
        })
      }
    }
  )
  
  console.log("minus : " + minusAmount);
  const prevHap = newHap;
  newHap = newHap - parseInt(minusAmount);
  if(hap !== newHap)
    setHap(newHap);


  return(
    <div className="ShoppingList">

      {cartItemResult.map(cartItem => (
        <CartItem cartItem={cartItem} onPlus={onPlus} onMinus={onMinus} idAndAmount={idAndAmount} onChecked={onChecked}/>
      ))}

      {console.log("coupon" + coupons)}
      {coupons.map(item => (
        <CartCoupon Coupon={item} />
      ))}

      <CartResult hap={newHap} prevHap={prevHap} minusAmount={minusAmount} />



    </div>
  );
};

export default CartItemList;

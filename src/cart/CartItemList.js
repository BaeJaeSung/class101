import React, {useState, useCallback} from 'react';
import CartItem from './CartItem';
import CartCoupon from './CartCoupon';
import CartResult from './CartResult';
import './CartItemList.css';

const CartItemList = ({cartItemResult, onChecked, itemChecked}) => {
  const [hap, setHap] = useState(0);
  const [couponApplied, setCouponApplied] = useState([]);

  /* you can choose item which is excluded from coupon by product ID*/
  const couponExcluded = ['CNCwXwHP7FUip83z5VEH']
  // coupons.js
  const coupons = [
    {
      type: 'rate',
      title: '10% 할인 쿠폰',
      discountRate: 10,
      id : 1
    },
    {
      type: 'amount',
      title: '10,000원 할인 쿠폰',
      discountAmount: 10000,
      id : 2
    }
  ];

  /* which one and how many amount to buy*/
  const [idAndAmount, setIdAndAmount] = useState([]);

  cartItemResult.map(item => {
    if(!idAndAmount.find(elm => elm.id == item.id))
      setIdAndAmount(idAndAmount.concat({
        id : item.id,
        price : item.price,
        Amount : 1
      }))
  })

  /* change amount */
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
  const onCouponChange = useCallback(
    coupon => {
      console.log(coupon);
      if(couponApplied.find(coup => coup.id == coupon.id)){
        var newCouponApplied = couponApplied.filter(coup => coup.id !== coupon.id);
        setCouponApplied(newCouponApplied);
      }else{
        var newCouponApplied = []
        newCouponApplied = newCouponApplied.concat(couponApplied);
        newCouponApplied.push(coupon);
        setCouponApplied(newCouponApplied);
      }
    }
  )
  console.log("coupon applied" + couponApplied);
  console.log(couponApplied);


  /* calculate PayAmount */
  var newHap = 0
  idAndAmount.map(item => {
    if(itemChecked.find(itemId => itemId == item.id)){
      newHap += parseInt(item.price) * parseInt(item.Amount);
    }
  })

  /* apply coupons */
  var minusAmount = 0;
  couponApplied.map(coupon => {
      if(coupon.type == "amount"){
        minusAmount += coupon.discountAmount;
      } else if(coupon.type == "rate"){
        idAndAmount.map(item => {
          if(itemChecked.find(itemId => itemId == item.id)){
            if(!couponExcluded.find(itemId => itemId == item.id)){
              minusAmount += parseInt(item.price) * parseInt(item.Amount) * coupon.discountRate / 100;
            }
          }
        })
      }
    }
  )
  const prevHap = newHap;
  newHap = newHap - parseInt(minusAmount);
  if(hap !== newHap)
    setHap(newHap);


  return(
    <div className="ShoppingList">
      <div className="CartItem">
        {cartItemResult.map(cartItem => (
          <CartItem cartItem={cartItem} onPlus={onPlus} onMinus={onMinus} idAndAmount={idAndAmount} onChecked={onChecked} key={cartItem.id}/>
        ))}
      </div>

      <div className="CartItem" align="center">
      {coupons.map(item => (
        <CartCoupon coupon={item} onCouponChange={onCouponChange} key={item.id}/>
      ))}
      </div>

      <div className="Pay">
        <CartResult hap={newHap} prevHap={prevHap} minusAmount={minusAmount} key="4"/>
      </div>
    </div>
  );
};

export default CartItemList;

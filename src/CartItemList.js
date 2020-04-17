import React, {useState, useCallback} from 'react';
import CartItem from './CartItem';
import CartCoupon from './CartCoupon';
import CartResult from './CartResult';

const CartItemList = ({cartItemResult, onChecked, itemChecked}) => {
  const [hap, setHap] = useState(0);

  /* you can choose item which is excluded from coupon by product ID*/
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

  /* calculate PayAmount */
  var newHap = 0
  idAndAmount.map(item => {
    if(itemChecked.find(itemId => itemId == item.id)){
      newHap += parseInt(item.price) * parseInt(item.Amount);
    }
  })

  /* apply coupons */
  var minusAmount = 0;
  coupons.map(coupon => {
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
      {cartItemResult.map(cartItem => (
        <CartItem cartItem={cartItem} onPlus={onPlus} onMinus={onMinus} idAndAmount={idAndAmount} onChecked={onChecked}/>
      ))}

      {coupons.map(item => (
        <CartCoupon Coupon={item} />
      ))}

      <CartResult hap={newHap} prevHap={prevHap} minusAmount={minusAmount} />
    </div>
  );
};

export default CartItemList;

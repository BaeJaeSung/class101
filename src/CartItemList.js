import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import './ShoppingList.css';
import CartItem from './CartItem';

const CartItemList = ({cartItemResult}) => {
// reform array from n to 5 * k
  const [idAndAmount, setIdAndAmount] = useState([

  ]);

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
      setIdAndAmount([]);
      setIdAndAmount(newIdAndAmount);
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
    }
  )
  console.log(cartItemResult);

  return(
    <div className="ShoppingList">

      {cartItemResult.map(cartItem => (
        <CartItem cartItem={cartItem} onPlus={onPlus} onMinus={onMinus} idAndAmount={idAndAmount} />
      ))}


    </div>
  );
};

export default CartItemList;

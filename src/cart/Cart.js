import React, {useState, useCallback} from 'react';
import CartItemList from './CartItemList'


const Cart = ({items, cartItems}) => {

  /* check item to purchase */
  const [itemChecked, setItemChecked] = useState([]);
  const onChecked = useCallback(
    id=>{
      if(!itemChecked.find(itemId => itemId == id)){
        var newItemChecked = [];
        newItemChecked = newItemChecked.concat(itemChecked);
        newItemChecked.push(id);
        setItemChecked(newItemChecked);
      }else{
        var newItemChecked = [];
        newItemChecked = newItemChecked.concat(itemChecked.filter(itemId => itemId!=id));
        setItemChecked(newItemChecked);
      }
    }
  );

  const [result, setResult] = useState([]);

  console.log("dfwfewfs");
  console.log(cartItems);
  cartItems.map(cartItem => {
    if(items.find(item => cartItem == item.id) && !result.find(item => cartItem == item.id)){
      const new_item = items.filter(item => cartItem == item.id);
      setResult(result.concat(new_item));
    }
  });


  return(
    <div>
      <CartItemList cartItemResult={result} onChecked={onChecked} itemChecked={itemChecked} key="3"/>
    </div>
  );
}

export default Cart;

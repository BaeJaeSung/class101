import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import CartItemList from './CartItemList'


const Cart = ({items, cartItems}) => {

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
  console.log(itemChecked);

  const [result, setResult] = useState([]);

  cartItems.map(cartItem => {
    console.log(cartItem);
    if(items.find(item => cartItem == item.id) && !result.find(item => cartItem == item.id)){
      const new_item = items.filter(item => cartItem == item.id);
      setResult(result.concat(new_item));
    }
  });
  console.log(result)


  return(
    <div>
      <CartItemList cartItemResult={result} onChecked={onChecked} itemChecked={itemChecked}/>
    </div>
  );
}

export default Cart;

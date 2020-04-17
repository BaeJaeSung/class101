import React, {useState} from 'react';
import './ShoppingList.css';
import ShoppingItem from './ShoppingItem';


const ShoppingList = ({items, cartItems, onChangeCart}) => {
  const [index, setIndex] = useState(0);

  /* reshape array to show items 5 * n + a*/
  const stack = [];
  var temp_stack = [];
  for (let i=0; i<items.length; i++){
    temp_stack.push(<ShoppingItem item={items[i]} cartItems={cartItems} onChangeCart = {onChangeCart} key={items[i].id} />);
    if(i%5 == 4){
      stack.push(temp_stack);
      temp_stack = [];
    }
  }
  if(temp_stack.length !== 0){
    stack.push(temp_stack);
  }


  return(
    <div className="ShoppingList">
      {stack.map(arr => (
        <div className="ShoppingListRow">
          {arr};
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;

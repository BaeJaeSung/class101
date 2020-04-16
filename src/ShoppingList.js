import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './ShoppingList.css';
import ShoppingItem from './ShoppingItem';


const ShoppingList = ({items}) => {
  const [index, setIndex] = useState(0);

  const stack = [];
  var temp_stack = [];
  for (let i=0; i<items.length; i++){

    temp_stack.push(<ShoppingItem item={items[i]} key={items[i].id} />);
    if(i%5 == 4){
      stack.push(temp_stack);
      temp_stack = [];
    }
  }
  if(temp_stack.length !== 0){
    stack.push(temp_stack);
  }


// reform array from n to 5 * k
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

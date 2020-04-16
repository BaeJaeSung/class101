import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingItem from './ShoppingItem';

const ShoppingList = ({items}) => {
  return(
    <div className="ShoppingList">

      {items.map((item) => (
        <ShoppingItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ShoppingList;

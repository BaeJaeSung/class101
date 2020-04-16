import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './ShoppingItem.css';

const ShoppingItem = ({item}) => {
  const {id, title, coverImage, price, score} = item;
  return(
    <div className="ShoppingItem" id={id}>
      <div className="ShoppingImg">
      {coverImage}
        <img src="{coverImage}" alt="상품 이미지"/>
      </div>
      <div className="ShoppingTitle">
        {title}
      </div>
      <div className="ShoppingScore">
        {score}
      </div>

      <div className="ShoppingPrice">
      //33,444 comma
        {price}
      </div>
      <br/>

    </div>
  );
};

export default ShoppingItem;

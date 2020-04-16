import React from 'react';
import logo from './logo.svg';
import './App.css';

const ShoppingItem = ({item}) => {
  const {id, title, ImgUrl, price, score} = item;
  return(
    <div className="ShoppingItem" id={id}>
      <div className="ShoppingImg">
        <img src="" alt="상품 이미지"/>
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

    </div>
  );
};

export default ShoppingItem;

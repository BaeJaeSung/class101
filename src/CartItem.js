import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './CartItem.css';
import {MdCheckBox, MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

const CartItem = ({cartItem, onPlus, onMinus, idAndAmount}) => {
  const {id, title, coverImage, price, score} = cartItem;
  const [numToBuy, setNumToBuy] = useState(idAndAmount.find(item => item.id == id).Amount);





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

      <div className="NumberSelect">
        <div className="ButtonMinus" onClick={() => {onMinus(id);setNumToBuy(idAndAmount.find(item => item.id == id).Amount)}}>
          <MdKeyboardArrowDown/>
        </div>
        <input className="NumberBuy" value={numToBuy}/>
        <div className="ButtonPlus" onClick={() => {onPlus(id);setNumToBuy(idAndAmount.find(item => item.id == id).Amount)}}>
          <MdKeyboardArrowUp/>
        </div>

      </div>
      <div className="CheckBox">
      //33,444 comma
        <MdCheckBox/>
      </div>

      <br/>

    </div>
  );
};

export default CartItem;

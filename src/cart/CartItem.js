import React, {useState} from 'react';
import './CartItem.css';
import {MdCheckBox, MdKeyboardArrowDown, MdKeyboardArrowUp, MdCheckBoxOutlineBlank} from 'react-icons/md';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CartItem = ({cartItem, onPlus, onMinus, idAndAmount, onChecked}) => {
  const {id, title, coverImage, price, score} = cartItem;
  const [numToBuy, setNumToBuy] = useState(idAndAmount.find(item => item.id == id).Amount);
  const [isChecked, setIsChecked] = useState(false);

  return(
    <div className="ShoppingItem" id={id}>
      <div className="ShoppingImg">
        <img src={coverImage} alt="상품 이미지" width="300" height="150"/>
      </div>
      <div className="ShoppingTitle">
        {title}
      </div>
      <div className="ShoppingScore">
        Score : {numberWithCommas(score)}
      </div>

      <div className="ShoppingPrice">
        {numberWithCommas(price)} 원
      </div>

      <div className="NumberSelect">
        <div className="ButtonMinus" onClick={() => {onMinus(id);setNumToBuy(idAndAmount.find(item => item.id == id).Amount)}}>
          <MdKeyboardArrowDown size="30"/>
        </div>
        <input className="NumberBuy" value={numToBuy} disabled/>
        <div className="ButtonPlus" onClick={() => {onPlus(id);setNumToBuy(idAndAmount.find(item => item.id == id).Amount)}}>
          <MdKeyboardArrowUp size="30"/>
        </div>

      </div>
      <div className="CheckBox" onClick={() => {onChecked(id); setIsChecked(!isChecked)}}>
        {isChecked? <MdCheckBox size="30"/> : <MdCheckBoxOutlineBlank size="30"/>}
      </div>
    </div>
  );
};

export default CartItem;

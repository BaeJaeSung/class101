import React from 'react';
import './ShoppingItem.css';
import {MdAddShoppingCart, MdRemoveShoppingCart} from 'react-icons/md';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ShoppingItem = ({item, cartItems, onChangeCart}) => {
  const {id, title, coverImage, price, score} = item;
  const found = cartItems.find(elm => elm==id);
  var plusCart = 0;

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

      <div className="ShoppingCart" onClick={() => onChangeCart(id)} align="center">
        {console.log(cartItems)}

        {found? <div className="CartOut" align="center"><MdRemoveShoppingCart size="32"/></div>
          : <div className="CartIn"><MdAddShoppingCart size="32"/></div>}
      </div>

      <br/>

    </div>
  );
};

export default ShoppingItem;
